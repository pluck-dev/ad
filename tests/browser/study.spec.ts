import { test, expect } from '@playwright/test';
test('share bots receive complete metadata and a real 1200 by 630 PNG without JavaScript', async ({ request }) => {
  for (const agent of ['Discordbot/2.0', 'Twitterbot/1.0']) {
    for (const [route, title] of [['/', '마케팅 노트'], ['/docs/lesson-1', '마케팅 대행의 큰 그림'], ['/library/playbook', '실무 플레이북']]) {
      const response = await request.get(route, { headers: { 'user-agent': agent } });
      expect(response.status()).toBe(200);
      const head = (await response.text()).split('</head>')[0];
      const meta = (name: string) => head.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]+)"`))?.[1];
      expect(meta('og:title')).toContain(title);
      expect(meta('og:description')?.length).toBeGreaterThan(15);
      expect(meta('og:locale')).toBe('ko_KR');
      expect(meta('twitter:card')).toBe('summary_large_image');
      expect(meta('twitter:image')).toEqual(meta('og:image'));
      expect(new URL(meta('og:url')!).pathname).toBe(route);
      const image = new URL(meta('og:image')!);
      expect(['http:', 'https:']).toContain(image.protocol);
      const png = await request.get(image.pathname);
      expect(png.status()).toBe(200);
      expect(png.headers()['content-type']).toContain('image/png');
      const buffer = await png.body();
      expect(buffer.subarray(1, 4).toString()).toBe('PNG');
      expect(buffer.readUInt32BE(16)).toBe(1200);
      expect(buffer.readUInt32BE(20)).toBe(630);
    }
  }
});
test('lesson progress, notes, bookmarks persist and quizzes reset between lessons', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await page.getByRole('link', { name: '첫 번째 학습 시작하기' }).click();
  await expect(page).toHaveURL(/lesson-1/);
  await expect(page.locator('.markdown-body table').first().locator('del')).toHaveCount(0);
  await expect(page.locator('.markdown-body table').first()).toContainText('35만~100만');
  await page.getByRole('button', { name: '북마크', exact: true }).click();
  await page.getByRole('textbox', { name: '실습 메모' }).fill('식당 대상 월 운영 상품을 먼저 설계한다.');
  await page.getByLabel('매달 받는 운영대행료', { exact: true }).check();
  await page.getByRole('button', { name: '답 확인하기' }).click();
  await expect(page.getByRole('status')).toContainText('정답이에요');
  await page.getByRole('button', { name: '이 단원 학습 완료하기' }).click();
  await page.reload();
  await expect(page.getByRole('textbox', { name: '실습 메모' })).toHaveValue('식당 대상 월 운영 상품을 먼저 설계한다.');
  await expect(page.getByRole('button', { name: '저장됨', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: '읽음 완료', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.locator('.reader-pagination').getByRole('link', { name: /다음 단원/ }).click();
  await expect(page.getByRole('button', { name: '답 확인하기' })).toBeDisabled();
  await page.goto('/saved');
  await expect(page.locator('.library-row')).toHaveCount(1);
  await expect(page.locator('.library-row h2')).toHaveText('마케팅 대행의 큰 그림');
  await page.goto('/');
  await expect(page.locator('.stats-row')).toContainText('13');
  expect(errors).toEqual([]);
});
test('Korean full text search, keyboard dismissal, empty results and correction navigation', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Control+k');
  await page.getByRole('textbox', { name: '전체 문서 검색' }).fill('리테이너');
  await expect(page.locator('.search-results a').first()).toBeVisible();
  await page.locator('.search-results a').first().click();
  await expect(page).toHaveURL(/\/docs\//);
  await expect(page.locator('.search-dialog')).not.toBeVisible();
  await page.getByRole('link', { name: '검증·보강 문서 →' }).click();
  await expect(page.locator('article>h1')).toContainText('검증');
  await page.keyboard.press('Control+k');
  await page.getByRole('textbox', { name: '전체 문서 검색' }).fill('존재하지않는검색어xyz987');
  await expect(page.getByText('검색 결과가 없어요.')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('.search-dialog')).not.toBeVisible();
});
test('mobile navigation and wide source tables do not overflow the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole('button', { name: '메뉴 열기' }).click();
  await page.getByRole('link', { name: '실무 플레이북', exact: true }).click();
  await expect(page).toHaveURL(/library\/playbook/);
  await expect(page.locator('.mobile-overlay')).toHaveCount(0);
  await page.goto('/docs/lesson-1');
  await expect(page.locator('table').first()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const table = await page.locator('.table-scroll').first().evaluate(el => ({ scroll: el.scrollWidth, width: el.clientWidth }));
  expect(table.scroll).toBeGreaterThan(table.width);
});
test('corrupt storage recovers and missing documents return 404', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('marketing-notes-v1', '{invalid-json'));
  await page.goto('/docs/lesson-1');
  await expect(page.getByRole('textbox', { name: '실습 메모' })).toBeEnabled();
  await expect(page.getByText('브라우저 저장이 불가능합니다.', { exact: false })).toBeVisible();
  const response = await page.goto('/docs/no-such-document');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: '문서를 찾지 못했어요.' })).toBeVisible();
});
