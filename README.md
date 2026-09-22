# 마케팅 노트

Next.js / React / Fumadocs 문서 컴포넌트로 만든 개인 마케팅 학습 사이트입니다.

## 실행

```powershell
npm install
npm run dev
```

PC에서 http://127.0.0.1:3107 접속. 운영 빌드는 `npm run build`, 실행은 `npm start`입니다. 두 실행 명령 모두 이 PC의 loopback 주소에만 바인딩합니다.

## 자료와 학습 기록

- `../ad-agency-research`의 최상위 문서와 `raw`, `playbook`, `clients` 아래 Markdown을 읽습니다. 원본을 수정하지 않습니다.
- `npm run content`로 원본 40개와 총정리에서 발췌한 학습 단원 8개를 `generated/content.json`에 생성합니다. 이 파일은 Git에 포함하지 않습니다.
- 다른 위치의 원본을 사용하려면 `MARKETING_SOURCE_DIR` 환경변수를 설정하세요. 원본 수정 후 개발 서버를 재시작하거나 다시 빌드하세요.
- 원본 마크다운은 실행 가능한 MDX 대신 안전한 Markdown으로 렌더링합니다. 원문의 HTML은 실행하지 않습니다. 문서 간 상대 링크를 사이트 주소로 바꿉니다. 가져오지 않은 첨부파일은 원본 참고로 표시합니다.
- 진도, 북마크, 실습 메모, 마지막으로 읽은 문서는 `marketing-notes-v1` localStorage에 저장합니다. 로그인/서버 저장/기기 동기화는 없습니다. 브라우저 데이터 삭제 시 기록이 사라집니다.
- 원본 내 수정 표시와 별도 검증·보강 문서를 보존하고 독서 화면에서 연결합니다. 이번 작업에서 원문의 사실이나 정책을 새로 검증한 것은 아닙니다.
- 실습과 확인 문제는 학습을 돕기 위해 추가했습니다. 원문에 있는 사업 성과를 보장하지 않습니다.
- 고객 사례를 포함한 개인 자료이므로 외부 공개 배포 전에 공개할 문서 범위를 검토해야 합니다. 현재는 외부 배포하지 않습니다.
- Google Fonts를 사용할 수 없으면 시스템 한글 폰트로 표시합니다.

## 검증

```powershell
npm run build
npm run typecheck
npm test
npm run test:e2e
```

E2E는 실행 중인 3107 포트 서버를 사용하거나 자동으로 개발 서버를 띄웁니다. Playwright의 Chromium이 필요하며, 없으면 `npx playwright install chromium`으로 설치하세요.
