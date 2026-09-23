import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

// Generate once locally and commit the PNG; production builds need no browser or font fetch.
await mkdir('public', { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="ko"><meta charset="utf-8"><style>
    *{box-sizing:border-box}body{margin:0;background:#f5f6ef;color:#243b30;font-family:'Malgun Gothic','Noto Sans CJK KR',sans-serif}
    .card{width:1200px;height:630px;padding:58px 66px;position:relative;overflow:hidden;border:14px solid #e7eddd}
    .brand{font-size:29px;font-weight:700;display:flex;gap:13px;align-items:center;letter-spacing:-1px}.mark{width:43px;height:43px;background:#345e42;color:white;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:30px}
    .eyebrow{font-size:13px;letter-spacing:4px;color:#799264;margin-top:50px;font-weight:700}
    h1{font-size:59px;line-height:1.38;letter-spacing:-3px;margin:18px 0 23px;font-weight:700;position:relative;z-index:2}h1 span{color:#71855f}
    .description{font-size:23px;color:#77846c;letter-spacing:-.7px}.bottom{position:absolute;bottom:48px;left:66px;display:flex;gap:15px;font-size:17px;color:#577447}.badge{border:1px solid #c9d7b6;padding:10px 17px;border-radius:30px;background:#eef3e6}
    .circle{position:absolute;width:380px;height:380px;border:1px solid #d3dfc2;border-radius:50%;right:-55px;top:105px}.circle.second{width:470px;height:470px;right:-100px;top:60px}
    .note{position:absolute;right:75px;top:215px;width:210px;height:245px;background:#fffef8;border:1px solid #dce3cf;border-radius:15px;transform:rotate(10deg);padding:30px;box-shadow:0 15px 30px #2a3e2110}
    .note svg{color:#60824e;margin-bottom:27px}.note small{display:block;font-size:11px;letter-spacing:3px;color:#8d9c7b}.note strong{display:block;font-size:20px;white-space:nowrap;margin:13px 0;color:#405d35}.line{height:5px;background:#e0e8d5;border-radius:8px;width:130px;margin-top:17px}.star{position:absolute;right:41px;top:111px;font-size:83px;color:#8da374}
  </style><body><div class="card"><div class="brand"><span class="mark">✳</span>마케팅 노트</div><div class="eyebrow">LEARN. BUILD. GROW.</div><h1>배우고, 실행하고,<br><span>나만의 마케팅을 쌓다.</span></h1><div class="description">기초부터 실무까지, 나를 위한 마케팅 학습 공간</div><div class="bottom"><span class="badge">8개 학습 단원</span><span class="badge">실무 위키</span><span class="badge">퀴즈 & 학습 메모</span></div><div class="circle"></div><div class="circle second"></div><div class="note"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v14"/></svg><small>MY PLAYBOOK</small><strong>오늘도 한 걸음.</strong><div class="line"></div><div class="line" style="width:80px"></div></div><div class="star">✳</div></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/share-card-v1.png' });
} finally { await browser.close(); }
