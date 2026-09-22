# 마케팅 노트

Next.js / React / Fumadocs 문서 컴포넌트로 만든 개인 마케팅 학습 사이트입니다.

## 실행

```powershell
npm install
npm run dev
```

PC에서 http://127.0.0.1:3107 접속. 운영 빌드는 `npm run build`, 실행은 `npm start`입니다. 두 실행 명령 모두 이 PC의 loopback 주소에만 바인딩합니다.

## 자료와 학습 기록

- 기본 빌드는 저장소에 포함된 `content/research`를 읽습니다. 총정리 1개, 리서치 8개, 실무 플레이북 10개로 구성된 일반 학습 자료 19개가 포함됩니다.
- `npm run content`로 자료 19개와 총정리에서 발췌한 학습 단원 8개를 `generated/content.json`에 생성합니다. 생성 결과는 Git에 포함하지 않습니다.
- Vercel은 Next.js 기본 설정과 `npm run build`로 배포할 수 있습니다. 별도의 원본 폴더 업로드나 환경변수 없이 저장소만으로 빌드됩니다.
- 고객 사례, 내부 사이트 감사, 고객명이 포함된 실행 로드맵·첫해 시나리오는 배포용 자료에서 제외했습니다. 전체 PC 원본 40개는 그대로 남아 있습니다.
- PC에서 전체 원본을 읽으려면 PowerShell에서 `$env:MARKETING_SOURCE_DIR='../ad-agency-research'`를 설정하고 실행하세요. 외부 배포에서는 이 환경변수를 설정하지 마세요. 기본 자료로 돌아오려면 해당 환경변수를 제거하고 재빌드하세요.
- 원본을 수정해도 배포용 사본은 자동으로 바뀌지 않습니다. 공개할 자료만 검토하여 `content/research`를 갱신하고 다시 빌드하세요.
- 원본 마크다운은 실행 가능한 MDX 대신 안전한 Markdown으로 렌더링합니다. 원문의 HTML은 실행하지 않습니다. 문서 간 상대 링크를 사이트 주소로 바꿉니다. 가져오지 않은 첨부파일은 원본 참고로 표시합니다.
- 진도, 북마크, 실습 메모, 마지막으로 읽은 문서는 `marketing-notes-v1` localStorage에 저장합니다. 로그인/서버 저장/기기 동기화는 없습니다. 브라우저 데이터 삭제 시 기록이 사라집니다.
- 원본 내 수정 표시와 별도 검증·보강 문서를 보존하고 독서 화면에서 연결합니다. 이번 작업에서 원문의 사실이나 정책을 새로 검증한 것은 아닙니다.
- 실습과 확인 문제는 학습을 돕기 위해 추가했습니다. 원문에 있는 사업 성과를 보장하지 않습니다.
- 기본 배포에는 일반 학습 자료만 포함됩니다. 추가 문서를 넣거나 별도 원본 경로를 지정하면 그 내용이 웹페이지와 검색 API에 포함됩니다.
- Google Fonts를 사용할 수 없으면 시스템 한글 폰트로 표시합니다.

## 검증

```powershell
npm run build
npm run typecheck
npm test
npm run test:e2e
```

E2E는 실행 중인 3107 포트 서버를 사용하거나 자동으로 개발 서버를 띄웁니다. Playwright의 Chromium이 필요하며, 없으면 `npx playwright install chromium`으로 설치하세요.
