import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = path.resolve(process.env.MARKETING_SOURCE_DIR || '../ad-agency-research');
const output = path.resolve('generated');
const folders = ['raw', 'playbook', 'clients'];
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.filter(e => !e.name.startsWith('.')).map(async e => {
    const file = path.join(dir, e.name);
    return e.isDirectory() ? walk(file) : e.name.endsWith('.md') ? [file] : [];
  }));
  return files.flat();
}
const roots = (await readdir(root)).filter(n => n.endsWith('.md')).map(n => path.join(root, n));
const files = [...roots, ...(await Promise.all(folders.map(f => walk(path.join(root, f))))).flat()].sort();
function plain(text) { return text.replace(/https?:\/\/\S+/g, '').replace(/[#*`>|\[\]]/g, '').replace(/\s+/g, ' ').trim(); }
const documents = await Promise.all(files.map(async file => {
  const body = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
  const source = path.relative(root, file).replaceAll('\\', '/');
  const group = source.startsWith('raw/') ? '리서치 원문' : source.startsWith('playbook/') ? '실무 플레이북' : source.startsWith('clients/') ? '고객 사례' : '전체 가이드';
  const title = plain(body.match(/^# (.+)$/m)?.[1] || path.basename(file, '.md')).replace(/^\d+[._ ]+/, '');
  return { id: createHash('sha256').update(source).digest('hex').slice(0, 12), title, body, source, group,
    minutes: Math.max(2, Math.ceil(plain(body).length / 650)), description: plain(body.split('\n').filter(l => l.trim() && !l.startsWith('#') && !l.startsWith('|')).slice(0, 3).join(' ')).slice(0, 150) };
}));
const master = documents.find(d => d.source.startsWith('00_MASTER'));
if (!master) throw new Error('총정리 원본 문서를 찾을 수 없습니다.');
const sections = [...master.body.matchAll(/^## (\d+)\. (.+)$/gm)];
const curriculum = [
  [1, '마케팅 대행의 큰 그림', '누가, 어떤 가치에 돈을 내는지 이해합니다.', '관심 있는 수익모델 하나를 고르고 고객과 제공 가치를 한 문장으로 적어보세요.', '월 리테이너 모델의 기본 수익은 어디서 나오나요?', ['매달 받는 운영대행료', '광고 플랫폼 주식 배당', '고객에게 받는 일회성 보증금'], 0, '리테이너는 지속적인 운영 서비스를 제공하고 매달 정해진 대행료를 받는 구조입니다.'],
  [2, '업계 용어와 기본 원칙', '낯선 용어와 운영 방식의 차이를 구분합니다.', '처음 알게 된 용어 세 개를 자신의 말로 설명해 보세요.', '서비스를 평가할 때 먼저 확인할 것은?', ['무조건 빠른 결과', '규칙 준수와 실제 고객 가치', '비공개 자동화 도구의 개수'], 1, '원문은 플랫폼 규칙, 법 준수, 실제 가치 제공을 운영 방식의 주요 구분 기준으로 설명합니다.'],
  [4, '국내 시장과 상품 이해', '국내 대행사의 수익 구조를 살펴봅니다.', '자신이 도울 수 있는 업종 한 개와 필요한 서비스를 적어보세요.', '광고 상품을 비교할 때 적절한 방법은?', ['모든 매체의 수수료가 같다고 가정한다', '조회 수만 비교한다', '매체별 수익 구조와 제공 범위를 구분한다'], 2, '같은 광고대행이라도 매체와 계약 구조에 따라 수익원이 다르므로 구분해서 읽어야 합니다.'],
  [5, '가격과 수익성 설계', '매출뿐 아니라 비용과 운영 부담을 함께 봅니다.', '상품 하나의 월 가격, 작업 시간, 외주비를 적고 실제로 남는 금액을 계산해 보세요.', '상품의 지속 가능성을 보려면?', ['매출에서 비용과 운영 부담을 함께 고려한다', '고객 수만 늘린다', '경쟁사보다 항상 싸게 판다'], 0, '가격만으로 판단하지 않고 마진과 운영 부담, 고객 이탈을 함께 고려해야 합니다.'],
  [6, '첫 고객을 만나는 방법', '고객 확보 채널을 비교하고 작은 실행을 정합니다.', '선택한 업종의 문제와 제안할 해결책을 세 문장으로 적어보세요.', '첫 제안의 출발점으로 적절한 것은?', ['모든 업종에 동일한 제안', '고객의 구체적인 문제 파악', '근거 없는 매출 보장'], 1, '고객의 문제에 맞는 제안을 만드는 것이 영업 메시지를 구체화하는 출발점입니다.'],
  [7, '실무 스킬과 학습 경로', '필요한 도구와 다음 학습 과제를 선택합니다.', '이번 주에 연습할 매체 한 개와 결과물 한 개를 정해 보세요.', '학습을 실행으로 연결하는 방법은?', ['도구 이름을 모두 외운다', '강의를 끝없이 수집한다', '하나의 매체에서 작은 결과물을 만든다'], 2, '학습 범위를 좁히고 실제 결과물을 만들면서 실무 역량을 확인할 수 있습니다.'],
  [8, '실패 패턴 읽기', '사례에서 반복되는 위험 신호를 찾습니다.', '제안서에 쓰지 않을 과장 표현과 대신 제시할 근거를 정리해 보세요.', '신뢰할 수 있는 제안에 가까운 것은?', ['상위 노출 무조건 보장', '범위·측정 기준·계약 조건 명시', '플랫폼 직원이라고 사칭'], 1, '명확한 범위와 측정 기준, 계약 조건을 제시해야 고객이 제안을 평가할 수 있습니다.'],
  [9, '나의 실행 로드맵', '지금 가진 역량을 첫 상품과 연결합니다.', '30일 안에 완성할 샘플, 상품, 고객 제안을 한 개씩 적어보세요.', '로드맵을 자신의 계획으로 바꾸려면?', ['현재 역량과 가용 시간에 맞춰 조정한다', '원문의 수익 예상치를 보장으로 간주한다', '모든 서비스를 동시에 시작한다'], 0, '원문은 특정 역량을 가진 사람을 가정하므로 자신의 조건에 맞춰 조정해야 합니다.'],
];
const lessons = curriculum.map(([section, title, description, exercise, question, options, answer, explanation], index) => {
  const i = sections.findIndex(s => Number(s[1]) === section);
  if (i < 0) throw new Error(`학습 섹션 ${section} 누락`);
  const body = master.body.slice(sections[i].index + sections[i][0].length, sections[i + 1]?.index).trim();
  return { id: `lesson-${index + 1}`, title, description, body, source: master.source, group: '학습 코스', minutes: Math.max(3, Math.ceil(plain(body).length / 650)), lesson: index + 1, exercise, quiz: { question, options, answer, explanation } };
});
await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'content.json'), JSON.stringify({ documents, lessons, importedAt: new Date().toISOString(), sourceDate: '2026-08-27' }));
console.log(`Imported ${documents.length} original documents and ${lessons.length} lessons. Source files unchanged.`);
