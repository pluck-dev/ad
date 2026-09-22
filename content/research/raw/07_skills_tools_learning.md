# 07. 광고 대행 실무에 필요한 스킬·툴 스택과 최단 학습 경로

> 조사일: 2026-08-27 · 대상: 한국 거주 소프트웨어 개발자(쇼츠·블로그 자동 생성 파이프라인 보유)
> 목적: "클라이언트 광고/마케팅 대행"을 실제로 수행하려면 무엇을 배워야 하고, 어떤 툴을 쓰며, 무료·저가 자원으로 얼마나 빨리 익힐 수 있는지 정리
> 방법: 웹 검색 22회 + 페이지 정독 21건(영/한). 출처는 각 섹션 말미와 문서 끝 §10에 URL로 명기. 출처 없이 적은 부분은 "(일반 지식)"으로 표시.

---

## 0. 한 페이지 요약 (TL;DR)

| 구분 | 결론 |
|---|---|
| 우선순위 플랫폼 (한국 소상공인·중소 브랜드 대상) | **1) 메타(인스타 릴스 광고) 2) 네이버 검색광고+플레이스 3) 구글/유튜브 4) 네이버 GFA 5) 카카오모먼트** — 쿠팡/스마트스토어 광고는 이커머스 클라이언트일 때만 |
| 무료 자격증 (이력서·신뢰용) | Google Ads Search(무료, 3~5시간 공부), GA4(무료), Meta Blueprint 강의는 무료·시험은 $99, TikTok Academy 강의 무료·인증시험은 1년 실무 필요, 검색광고마케터 1급(KAIT, 5만원, 온라인) |
| 추적 스택 (반드시) | GA4 + GTM + Meta Pixel/CAPI(서버사이드 GTM 또는 Stape) + UTM 규칙 + 네이버 프리미엄 로그분석(검색광고용, 별도 검수 필요) + GFA 전용 전환 |
| 소재 | "훅→문제→해결→CTA" 구조, 훅이 성과의 60~70% 결정, 주 3~5개 신규 변형, 48시간 킬룰, 60/30/10 예산 배분. UGC 스타일이 브랜드 폴리시드 소재보다 CTR +27% |
| 계정 구조 (절대 원칙) | **광고계정은 항상 클라이언트 소유**, 대행사는 파트너/권한 위임으로 접근. 메타=Business Manager 파트너, 구글=MCC 연결, 네이버=권한 부여(최대 3명), 카카오=멤버 초대+영업권 |
| 개발자 우위 | 서버사이드 추적, 자동 리포팅(Looker Studio+API), n8n 자동화, 프로그래매틱 SEO, AI 음성 에이전트, 쇼츠 자동 생산 파이프라인 — 일반 대행사가 못 하는 영역 |
| 시급 최상위 스킬 | ① 전환 추적/서버사이드 세팅(1회성 고단가) ② 구글·메타 미디어바잉(리테이너) ③ 네이버 플레이스+블로그 로컬 SEO(국내 수요 큼) ④ 자동화·AI 에이전트 구축(셋업비+월 유지비) |
| 학습 기간 | 30일: 자격증 2~3개 + 자기 상품 10만원 테스트 캠페인 / 60일: 무료 클라이언트 2곳 운영 + 리포트 자동화 / 90일: 유료 클라이언트 3곳, 월 리포트 SOP 완성 |

---

## 1. 플랫폼별: 초보자가 알아야 할 것 · 인증 · 학습 시간 · 무료 공식 강의

### 1.1 Meta Ads (페이스북·인스타그램·릴스) — Meta Blueprint

**초보자가 알아야 할 것**
- 계정 위계: Business Portfolio(구 Business Manager) → 광고계정 → 캠페인 → 광고세트 → 광고. 픽셀/데이터셋, 페이지, 인스타 계정이 "자산(asset)".
- 캠페인 목표(판매/리드/트래픽/참여/인지도), Advantage+ 캠페인(자동화), 광고세트 단위 타겟(브로드 vs 관심사 vs 맞춤/유사 타겟), 노출 위치(릴스/스토리/피드), 입찰(최저비용/비용상한/ROAS 목표).
- 핵심 지표: CPM, CTR(링크), CPC, CPA/CPL, ROAS, 빈도, 훅률(3초 시청/노출), 홀드율(15초/노출), thumbstop.
- 학습 단계(2026): 픽셀+CAPI 없이 시작하면 최적화 불가 → 추적 먼저.
- 한국 소상공인 실무에서 메타는 사실상 "인스타 릴스 광고"이며, 소재 = 세로 영상 9:16, 첫 1~2초 훅이 결정적.

**인증(Meta Blueprint)**
- 강의는 100+ 미니코스 전부 무료. 시험만 유료: Digital Marketing Associate $99(Pearson VUE, 2026-07 기준), 전문가(Professional)급 $99~150.
- 총 7종: Digital Marketing Associate(입문) / Media Buying Professional(중급, 대행 실무자에 가장 적합) / Creative Strategy / Media Planning / Marketing Science / Community Manager / Business Marketing Strategy.
- 준비 시간: 무료 코스 15~40시간, Associate는 "구글 광고 자격증 1개와 비슷한 난이도로 1주 공부면 통과 가능"(집중 시) ~ 3~4주(여유 있게). 시험 90분, 약 60문항 객관식.
- 추천 순서(Markampus 기준): ① 무료 모듈 11~12시간(Ads Fundamentals 2h, Audience Targeting 2h, Creative Best Practices 1.5h, Measurement & Reporting 2.5h, Instagram Advertising 1.5h, Conversions API Setup 2h) → ② 모의 캠페인 10~20시간 → ③ 시험 대비 15~20시간 → ④ $50 이상 실제 캠페인.
- 팁: 30문항 연습시험을 100% 나올 때까지 반복 후 응시. 전문가급 시험에도 Associate 범위 문제가 섞여 나오므로 Associate부터.

**무료 공식 강의**: https://www.facebookblueprint.com (카탈로그 검색 "digital marketing") — 한국어 UI 지원.

**판단**: 시험($99)은 "클라이언트 제안서에 뱃지 넣기" 목적이면 가치 있고, 실력 목적이면 무료 코스 + 실제 집행이 더 낫다. Media Buying Professional은 실무 3~6개월 후에.

출처: geekflare Meta Blueprint 가이드, bir.ch 가이드, Markampus 2026 무료 메타 인증, Stackmatix "Meta Ads Certification worth it 2026" (URL은 §10)

### 1.2 Google Ads — Skillshop (검색·디스플레이·유튜브·쇼핑·앱·측정·AI)

**초보자가 알아야 할 것**
- 계정 위계: MCC(관리자 계정) → 클라이언트 계정 → 캠페인 → 광고그룹 → 키워드/광고.
- 캠페인 타입: 검색(Search), P-Max(Performance Max), 디스플레이, 동영상(YouTube), 쇼핑, 앱, 디맨드젠(Demand Gen). 한국 로컬 비즈니스는 "검색 + P-Max + 유튜브 쇼츠 인피드" 조합이 일반적.
- 키워드 매치 타입(확장/구문/일치), 부정 키워드, 품질점수, 입찰전략(클릭수 최대화 → 전환수 최대화 → tCPA/tROAS 순으로 전환 쌓이면 이동), 전환 액션 설정(GA4 연동 또는 Google Tag), 광고 확장(에셋).
- 유튜브 광고: 인스트림(건너뛰기 가능/불가), 인피드, 범퍼(6초), 쇼츠 지면. 15~30초 세로 소재 필수, CPV/CPM 과금.

**인증(Skillshop)**
- **전부 무료**(9개 시험). 각 시험 약 50~75문항, 75분, 80% 합격, 유효기간 1년, 24시간 후 무제한 재응시.
- Search 인증: 공부 3~5시간이면 충분(초보 기준 1~2일). Display, Video, Shopping, Apps, Measurement, AI-Powered Ads/Performance, Creative 등.
- GA4 인증(Google Analytics Certification)도 Skillshop에서 무료.
- 시작 순서: Search → Measurement(전환/GA4) → Video(유튜브) → AI-Powered/P-Max → Display/Shopping(필요 시).

**무료 공식 강의**: https://skillshop.withgoogle.com/intl/ko_ALL/googleads/ (한국어 제공)

출처: ioquery Google Ads Certification 2026, meshworld Skillshop 목록, Markampus 구글 무료 인증 2026, DMA 싱가포르 가이드

### 1.3 YouTube 광고 (별도 언급)
- Google Ads 내 동영상 캠페인으로 운영. 별도 인증은 Skillshop "Video" 인증(무료).
- 알아야 할 것: 시청자 리스트(채널 시청자 리마케팅), 맞춤 세그먼트(검색어 기반 인텐트 타겟), 쇼츠 지면 자동 포함, "Video Action/Demand Gen" 전환형 캠페인, 소재 규격(9:16 쇼츠 / 16:9 인스트림).
- **개발자 파이프라인 접점**: 이미 쇼츠를 자동 생성하니 "오가닉 쇼츠 → 성과 좋은 것만 광고 소재로 전환(Boost)"이 자연스러운 서비스 상품이 된다. (일반 지식)

### 1.4 TikTok Ads — TikTok Academy
- 강의 무료(https://ads.tiktok.com/business/en/academy). 창의(creative), 광고, 측정, 광고 정책, 산업별 코스.
- 인증: **TikTok Media Buying Professional Certification** — 110분 감독형 시험, "TikTok Ads Manager 1년 이상 실무자" 대상, 유효 2년(재인증은 짧은 비감독 시험). 시험 준비 자료(커버리지 가이드, 스터디 가이드, 모의고사 A/B, 웨비나 리플레이) 무료 제공. 시험 비용은 페이지에 미기재(유료로 알려짐).
- 한국 실무 비중: 10~20대 타겟 브랜드/앱이 아니면 우선순위 낮음. 메타·유튜브 다음에 배워도 늦지 않다.

출처: kolsquare TikTok Academy 리뷰, tiktokacademy.com 인증 준비 경로

### 1.5 네이버 검색광고 (파워링크·쇼핑검색·브랜드검색·플레이스광고)

**초보자가 알아야 할 것**
- 광고시스템(searchad.naver.com) 위계: 광고주 계정 → 캠페인(파워링크/쇼핑검색/파워컨텐츠/브랜드검색/플레이스) → 광고그룹 → 키워드/소재.
- **비즈채널**(웹사이트·전화·플레이스·스마트스토어 등)을 먼저 등록·검수받아야 광고 가능. 비즈머니 충전(선불). 
- 키워드 입찰(CPC), 품질지수(7단계), 확장소재(전화/위치/추가제목/이미지), 지역·시간·기기 타겟, 키워드도구, 순위 확인.
- 전환 추적 = **프리미엄 로그분석**(무료) — §2.5 참고. 이걸 안 깔면 "노출·클릭"만 보인다.
- 국내 로컬 비즈니스(병원·학원·음식점·인테리어 등)에서 여전히 리드 획득의 핵심 채널. 클라이언트가 가장 먼저 물어보는 채널이기도 하다.

**교육/인증**
- 네이버 자체 "무료 광고주 교육/온라인 교육"이 광고시스템 내 '교육' 메뉴와 네이버 광고 공식 블로그·유튜브(네이버 광고)에 있음. 이번 조사에서 2026년 공식 교육 일정 페이지는 직접 확인 못함 → 광고시스템 로그인 후 확인 권장. (부분 확인)
- **검색광고마케터 1급** — 한국정보통신진흥협회(KAIT) 주관 민간등록자격(2012-1136). 과목: 온라인비즈니스·디지털마케팅 / 검색광고 실무 / 검색광고 활용전략. 객관식 40 + 단답 20, 90분, 100점 만점 70점 합격(과목별 40% 이상), 응시료 5만원, **온라인 응시**. 네이버·카카오 검색광고 실무 반영. 대형 대행사 채용·인사평가에 활용. 공부 기간은 실무 경험 없으면 2~4주(일반 지식).
- 시험접수: https://www.ihd.or.kr/introducesubject5.do

**대행사 계정 연결(권한 부여)** — §6.4 참고.

출처: ihd.or.kr 검색광고마케터, raonad 권한설정 가이드, i-boss 권한설정 기능 안내, ideakey 공지

### 1.6 네이버 GFA (성과형 디스플레이 광고)
- 네이버 앱 메인/서브, 밴드, 카페 피드 등에 네이티브 이미지·배너·캐러셀·영상 노출. 실시간 입찰(RTB), 과금 CPC/CPM/CPV 선택 가능. 예산 100% 소진 보장 안 됨.
- 타겟: 성별·연령·지역·관심사·기기·OS + ADID/MAT(앱 어트리뷰션) 연동 맞춤타겟. 너무 좁히면 효율 하락.
- **주의**: 비즈채널과 프리미엄 로그분석은 검색광고와 **별도로 GFA 전용 전환 설정**을 해야 한다. 미설정 시 전환 데이터가 안 쌓여 최적화 불가.
- 초보 운영 전략: "웹사이트 전환" 캠페인 우선, 일 10만원으로 소구점·타겟 여러 개 테스트 후 효율 좋은 그룹에 증액. 2026 기준 평균 CPC 리테일 500~1,000원, B2B 2,000~5,000원. 세팅 변경은 최소 2주 유지(AI 학습 리셋 방지). ADVoost(쇼핑 자동화)는 주 40전환 이상 있어야 학습.
- 교육: 네이버 GFA 공식 가이드 + 아이보스/앰피엠/OSC 블로그 정리 글로 충분. 별도 인증 없음.

출처: 앰피엠 인사이드 GFA 완벽가이드, OSC GFA 가이드 2026, i-boss "GFA가 뭐야", sellernow 체크리스트

### 1.7 카카오모먼트 (카카오톡 비즈보드·디스플레이·메시지)
- 카카오비즈니스(business.kakao.com) → 광고계정(운영 기본 단위) → 비즈월렛(결제) 연결 → 캠페인(비즈보드/디스플레이/카카오톡 채널 메시지/동영상/스폰서드보드).
- 대행사 접근: 광고계정에 **'멤버로 요청/초대'**로 관리자센터 접근. 대행사 공식 파트너면 **영업권**(카카오광고 통합에이전시)로 실적 조회·관리 및 **대행 수수료 지급 기준**이 됨. 영업권 신청 후 마스터가 5일 내 수락 없으면 자동 실패. 대행사가 직접 만든 계정은 즉시 영업권 추가 가능.
- 포괄위임(운영·충전·환불·세금계산서 전부)을 원하면 대행사 정보로 광고계정 생성 가능 — 단, §6 원칙상 가급적 클라이언트 소유 + 멤버 권한 권장.
- 교육: 카카오비즈니스 가이드(gitbook) 무료. 인증 없음.

출처: 카카오 비즈니스 가이드(gitbook) 광고계정 운영/모먼트 시작하기, 카카오광고 통합에이전시 가이드 영업권 관리, 카카오 고객센터 광고계정, sonet.kr 권한 공유 글

### 1.8 쿠팡 광고 (ads.coupang.com)
- CPC 과금, 검색 상단 "광고" 노출. 유형: **AI 스마트광고**(목표 ROAS만 입력, 상품·키워드 자동), **매출 최적화**(상품 수동 선택 + 자동), **매출 시작 광고**(첫 판매 목적, ROAS 미설정), **수동 광고**(상품·키워드·입찰가 직접). 브랜드 광고는 별도.
- 일예산 최소 1만원(쿠팡 권장 3만원). 목표 ROAS 기본 350% — 너무 높이면 노출 기회 감소, 너무 낮으면 적자.
- 초보 셀러 대행 시: 상품광고 + 수동 타겟 위주, 쿠팡 앱에서 직접 검색해 연관 검색어 추출, 2~3단어 롱테일 키워드가 소액 광고에 효율적. 저성과 키워드 주기적 제외. 자동 쿠폰 적용(쿠팡 부담) 켜기.
- 학습: 쿠팡 광고센터 도움말 + 윈들리/레비오사/아이보스 글. 1~2주면 운영 가능.

출처: windly.cc 쿠팡 광고 종류와 세팅, leviosa 쿠팡광고 3천원 시작, i-boss 소규모 브랜드 쿠팡 광고 직접운영

### 1.9 스마트스토어 광고 (네이버 쇼핑검색광고)
- 네이버 검색광고 시스템의 "쇼핑검색" 캠페인 유형으로 운영(스토어 = 비즈채널). 상품 단위 입찰, 쇼핑 카탈로그 매칭, 쇼핑브랜드형(브랜드 스토어 대상).
- 핵심 스킬: 상품명·카테고리·속성 최적화(쇼핑 SEO)가 광고 효율을 좌우. 프리미엄 로그분석으로 구매 전환 추적.
- 별도 인증 없음. 검색광고마케터 시험 범위에 포함. (일반 지식 + 검색광고 공식 구조)

### 1.10 당근 비즈니스 광고 (지역 광고)
- 당근 비즈니스 계정(비즈프로필) 필요. 유형: 비즈프로필 광고, 소식 광고, URL 광고. 가장 많이 쓰는 형태는 **피드 배너**(좌 정사각 이미지 + 우 제목 → 프로필/외부 링크).
- 동네 반경 타겟(동 단위), 소액(일 5천~2만원)으로 로컬 매장에 유효. "전문가 모드"로 세부 설정. 크몽에 대행 세팅 서비스가 다수(3~10만원대) → 대행 단가 낮으므로 **패키지의 부가 항목**으로 넣는 게 적절.
- 학습: 당근 비즈니스 도움말 + 크몽·커넥트리 글. 1~2일이면 충분.

출처: 크몽 당근 광고 대행 gig, 커넥트리 당근 광고대행사 평균비용/전문가모드

### 1.11 인스타그램 릴스 운영(오가닉)
- 대행 실무에서 "광고 운영"과 "계정 운영(콘텐츠)"은 별도 상품. 릴스 운영은 주 3~5개 세로 영상, 첫 1~2초 훅, 자막, 트렌드 오디오, 저장·공유 유도, 프로필→링크(랜딩/예약) 동선 설계.
- 개발자 파이프라인 접점: 쇼츠 자동 생성물을 릴스에 동시 배포(포맷 동일). 한국 소상공인은 "릴스 대신 올려주세요" 수요가 광고 운영 수요보다 클 수 있다.
- 학습: Meta Blueprint "Instagram Advertising" 1.5h 모듈 + 실제 계정 운영.

출처: i-boss 2026 영상 트렌드 TOP5 (첫 1~2초 훅), Meta Blueprint 모듈 목록(Markampus)

---

## 2. 추적·분석 스택 (Tracking / Analytics)

> 원칙: **추적 없이 광고 켜지 않는다.** 첫 미팅에서 "전환 추적 세팅"을 별도 항목(1회성 셋업비)으로 견적에 넣는다. 개발자에게 가장 유리한 영역.

### 2.1 GA4
- 필수: 속성 생성, 데이터 스트림, 이벤트(자동/추천/맞춤), 키 이벤트(구 전환) 지정, Google Ads 연결, 탐색 보고서, UTM 기반 세션 소스/매체 분석.
- 인증: Skillshop GA4 인증(무료). 공부 4~8시간.

### 2.2 GTM (Google Tag Manager)
- 웹 컨테이너: 태그/트리거/변수, dataLayer, GA4 태그, Google Ads 전환, Meta Pixel(2026-04 Meta 공식 GTM 템플릿 출시 — GA4 dataLayer를 읽어 표준 이커머스 이벤트 자동 매핑).
- **서버사이드 GTM**(sGTM): 웹→서버 컨테이너→GA4·Meta CAPI·Google Ads로 분배. 호스팅은 Stape($10~50/월) 또는 GCP 직접. 개발자라면 반나절이면 세팅 가능. 브라우저 차단(iOS, 애드블록) 우회로 신호 품질 상승.

### 2.3 Meta Pixel + CAPI (Conversions API)
세 가지 구현 방식(DataAlly 2026 가이드):
| 방식 | 셋업 시간 | 비용 | 적합 |
|---|---|---|---|
| CAPI Gateway | 2~4h | $10~400+/월 | 메타만 쓰는 광고주 |
| 서버사이드 GTM(Stape) | 4~8h | $10~50/월 | 다채널(메타+구글+틱톡) — **추천** |
| 직접 API 구현 | 20~40 dev-hours | $500~5,000 1회 | 커스텀 플랫폼, 오프라인 전환 |
- 중복 제거: Pixel과 CAPI가 **동일 event_id + event_name** 전송. fbp/fbc·event_id는 해시하지 말 것(해시하면 매칭 깨짐). 이메일·전화·이름은 SHA256 해시.
- EMQ(Event Match Quality) 목표: Purchase 8.8~9.3, AddToCart 8.0+, PageView 6.5~7.5. `em`(해시 이메일) 추가만으로 최대 +4점.
- Meta 자체 발표: CAPI+Pixel 병행 시 결과당 비용 17.8% 절감.

### 2.4 UTM 규칙
- utm_source / utm_medium / utm_campaign / utm_content / utm_term 네이밍 표준을 클라이언트별 스프레드시트로 고정. 예: `source=meta, medium=paid_social, campaign=2609_lead_gangnam, content=hook3_ugc`. 소재 네이밍과 UTM을 동일 규칙으로 → 리포트 자동화의 전제. (일반 지식)

### 2.5 네이버 프리미엄 로그분석 (검색광고 전환 추적)
- 무료. 절차: 비즈채널 검수 완료 → 광고시스템 도구 > 프리미엄 로그분석 > 신규 신청 → 1~7일 내 설치 안내 메일 → 공통 PV 스크립트(헤더/푸터) + 전환 스크립트(`wcs.trans`) 삽입 → **검수 신청**(실제 검색 키워드로 테스트) → 활성화.
- 전환 유형 10종: view_product, add_to_cart, purchase(결제금액 value 필수), lead, sign_up, checkout, booking, subscribe, content view, custom.
- 주의: **네이버 애널리틱스와 프리미엄 로그분석 중 하나만** 사용 가능. 아임웹·식스샵·카페24·큐샵은 관리자에서 ID만 입력하면 됨(버튼 전환추적도 지원). 실패 원인 대부분은 "검수 누락" 또는 이벤트 위치 오류.
- GFA는 별도 전환 설정 필요(§1.6).

### 2.6 콜 트래킹
- 국내 로컬 비즈니스(병원·학원·인테리어)는 전화 문의가 핵심 전환. 방식: ① 네이버 검색광고 확장소재 "전화" + 프리미엄 로그분석 전화 버튼 클릭 전환 ② 050 가상번호 기반 콜트래킹 서비스(국내 사업자 다수, 월 수만원대) ③ Google Ads 통화 전환(전화번호 대체 스크립트). 이번 조사에서 국내 콜트래킹 업체별 비교는 검색 한도로 확보 못함 → 후속 조사 항목. (부분 확인)

### 2.7 랜딩페이지 도구
- **아임웹**: 국내 소상공인 표준. 네이버 로그분석·GA·픽셀 연동 메뉴 내장, 결제·예약 모듈. 클라이언트가 이미 쓰고 있을 확률 높음.
- **카페24**: 쇼핑몰. 프리미엄 로그분석 무료 설치 지원 대상.
- **Framer**: 디자인 퀄리티·속도. 개발자에게 가장 빠름, 해외 스타일 브랜드에 적합. 국내 결제/예약은 외부 연동 필요.
- **Unbounce/Instapage**: 해외 표준 LP 빌더, A/B 테스트 내장. 국내 소상공인 예산엔 과함.
- 개발자 관점: Next.js + Vercel로 LP 직접 만들면 프로그래매틱 SEO(§7.6)와 연결된다. (일반 지식)

### 2.8 CRM
- **GoHighLevel(GHL)**: $97/월~, CRM+SMS/이메일+퍼널+파이프라인+화이트라벨 SaaS 리셀($297~997/클라이언트/월). 해외 대행사 표준. 국내는 카카오톡 채널·문자(알림톡) 연동이 약해 온전히 쓰기 어렵다.
- **HubSpot Free**: 무료 CRM, 폼·이메일. 국내 B2B 클라이언트에 무난.
- **노션**: 리드 시트·SOP·클라이언트 포털 대용. 소규모 대행은 노션+구글시트로 시작해도 충분.
- 국내 리드 관리 실무는 "카카오 채널 + 구글시트 + 알림톡"인 경우가 많다. (일반 지식)

출처: e2msolutions Stape 가이드, somo Meta Pixel GTM 템플릿, DataAlly CAPI 2026, adligator Pixel&CAPI 2026, ppcle 프리미엄 로그분석 가이드, 아임웹/식스샵/큐샵 도움말, netpartners GHL vs n8n

---

## 3. 소재(크리에이티브) 제작

### 3.1 소재 구조 프레임워크
- **훅 → 문제(공감/자극) → 해결(제품/서비스) → 증거(리뷰·비포애프터·숫자) → CTA**. 훅이 참여 여부의 60~70%를 결정.
- 테스트 위계(영향 큰 순): 포맷(영상 vs 정지 vs UGC) → 컨셉(문제중심 vs 해결중심, 감성 vs 이성) → 요소(훅 변형) → 최적화(버튼색·CTA 문구).
- **훅 매트릭스**(Chatterbuzz): 5가지 훅 공식 × 2 앵글(고통 vs 열망) = 10개 변형. 훅 공식 예: "나는 [옛 방식]을 그만뒀고 [결과]가 생겼다" / "[숫자]개 업체가 [방식]으로 바꿨다" / "왜 [타겟]은 아직도 [비효율]을 하나?" / "아무도 말 안 하지만 [인사이트]" / "[지표] 비포 vs 애프터".
- **48시간 킬룰**: 변형당 $20~50/일, 1,000+ 노출 후 판정 — 훅률>30% & CPA 목표 이하 → 스케일 / 훅률>25% & CPA 10~30% 초과 → 반복 개선 / 훅률<25% 또는 CPA 50% 초과 → 종료. 테스트 중 Advantage+ Creative 끄기.
- **60/30/10 예산**: 검증된 승자 60%, 승자 변형 30%, 완전 신규 컨셉 10%.
- 2026 스타트업 승리 포맷: 혜택 중심 단일 이미지, 오가닉풍 영상, 고객 후기 캐러셀, UGC 영상, 문제-자극 정적 이미지.

### 3.2 UGC 스타일
- UGC풍이 폴리시드 브랜드 소재 대비 CTR +27%, 전환율 +19%(UGC King). 핸드헬드, 자막, 말하는 얼굴(talking head), 언박싱/사용 장면, "광고 같지 않은" 톤.
- 한국 소상공인 관례(일반 지식): 사장님 얼굴 등장 영상, 매장 현장·시술 과정·비포애프터, 가격 직접 노출("○○원"), "네이버 예약/카카오 채널 문의" CTA, 후기 캡처 콜라주, 지역명 키워드 자막(예: "강남 왁싱"). 의료·미용은 의료광고법(비포애프터·과장 금지) 주의.

### 3.3 대행사가 주 10~50개 소재를 만드는 방법
- 볼륨 논쟁: "주 3~5개 신규 변형"(대부분 소규모 계정에 충분) vs "주 20~50개 변형"(대형 DTC, 피로도 대응). 소상공인은 **주 3~6개 컨셉 + 훅 변형**이 현실적.
- 프로세스: 승자 컨셉의 "변형 트리" — 포맷(토킹헤드/텍스트 오버레이/UGC 후기) × 길이(15/30/45초) × 톤(회의적/열정적/전문가) × 오프닝 프레임. 하나의 원본 영상에서 훅만 바꿔 5~10개 생산.
- 네이밍 규칙 예: `YYMM_클라_컨셉_포맷_훅번호_v1` — 리포트에서 소재 단위 성과 자동 집계의 전제.

### 3.4 AI 소재 도구 (일반 지식, 2026 기준 주요 툴)
| 용도 | 툴 | 비고 |
|---|---|---|
| 이미지 | Midjourney, Nano Banana(Gemini), Ideogram(텍스트 포함) | 배경·컨셉 이미지, 제품 합성 |
| 영상 생성 | Kling, Runway, Seedance, Veo | 5~10초 B-roll, 제품 모션 |
| AI 아바타/UGC | HeyGen, Arcads, Creatify | 스크립트→토킹헤드 UGC 대량 생산 |
| 음성 | ElevenLabs, 국내 TTS(타입캐스트 등) | 나레이션, 다국어 |
| 편집·자막 | CapCut, Premiere, Remotion(코드 기반) | 자막 자동, 템플릿 대량 렌더 |
| 정적 소재 | Canva, Figma | 캐러셀, 배너, 템플릿화 |
- **개발자 우위**: Remotion/ffmpeg 기반 템플릿으로 "스크립트 → 훅 10개 × 자막 스타일 3개 = 30개 변형"을 코드로 렌더. 이미 보유한 쇼츠 파이프라인이 곧 소재 공장.

출처: Chatterbuzz 4-step 프레임워크, UGC King 2026, Stackmatix 메타 소재 테스트, Darkroom 소재 피로도, adlibrary "how many creatives", Reloop AI 소재 테스트, i-boss 2026 영상 트렌드

---

## 4. SEO / 로컬 (네이버 중심 + 구글 + GEO)

### 4.1 Google Business Profile (GBP)
- 국내에선 외국인 고객·호텔·관광·글로벌 B2B 외엔 비중 낮음. 기본: 카테고리 정확히, NAP 일관성, 사진·게시물 주기적, 리뷰 응답, Q&A, 서비스/메뉴 등록. 순위 3요소: 관련성·거리·인지도(리뷰 수/평점/링크). (일반 지식 — 검색 한도로 2026 체크리스트 미확보)

### 4.2 네이버 스마트플레이스 (국내 로컬의 핵심)
- **2026 순위 신호 4가지**(삐딱한마케팅): ① 저장(가고 싶은 곳) ② 예약·주문·문의(플랫폼 내 전환) ③ 리뷰(최근성·꾸준함) ④ 재방문·길찾기. "홀에서 일어난 일을 온라인 신호로 번역하는 일".
- 2026 업데이트로 AI 기반 검색 비중 증가 → 키워드 반복·사진 장수보다 **정보 일관성·맥락·행동 데이터**가 무겁다(파인애드, OSC).
- 운영 SOP(주간): 기본정보(메뉴·영업시간·사진) 경쟁사 수준으로 완성 → 지역+업종+상황 조합 좁은 키워드 3~5개 → 결제대·영수증 등 자연스러운 접점에 리뷰/저장 유도 → 주간 리뷰 흐름 꾸준히(양보다 지속) → 월 1회 블로그 글과 플레이스 리뷰 키워드 정렬. 사장님이 아니라 **직원이 수행하도록 표준화**.
- **리뷰 관리 합법 vs 저품질**: 특정 시기에 몰아서 등록된 리뷰·대가성 리뷰 작업은 블라인드 위험, 누적 시 플레이스 자체가 검색에서 통째로 밀리는 패널티(i-boss 2026). 합법적 대안: 영수증 리뷰 유도 안내물, 방문 후 알림톡으로 리뷰 요청, 고화질 사진 리뷰 유도 이벤트(표시광고법상 대가 제공 시 명시). 
- 학습: 아이보스 플레이스 카테고리 + 크몽 아티클 + 네이버 스마트플레이스 센터 도움말. 1주.

### 4.3 네이버 블로그 로직 (C-Rank / D.I.A. / 스마트블록)
- **C-Rank**: 블로그(채널) 단위 신뢰도. 주제 집중(최대 2~3 카테고리), 규칙적 발행(주 2~3회), 체류·댓글·재방문, 원본성, 활동 지속성. 패널티: 주제 산만, 장기 휴면 후 몰아 올리기, 낮은 참여.
- **D.I.A.(Deep Intent Analysis)**: 문서 단위 품질. 검색의도 부합, 완결성(1,500자+, 구조), 원본 이미지 5장+(다운로드 이미지 감지·감점), ALT 텍스트, **영상 삽입 가산점**(2026), 체류 2분+(2026 상위권은 2분 30초~3분). 2026 업데이트: 하이퍼클로바X 기반으로 키워드 매칭보다 **맥락·정확성** 평가, 키워드 스터핑은 어뷰징 처리.
- **스마트블록**: 라이프스타일 키워드의 80% 이상이 주제별 묶음(스마트블록)으로 노출 → "메인 키워드 1위"보다 "의도별 블록 진입"이 목표. 
- 조합 전략: C-Rank 높은 블로그에 D.I.A. 높은 글 = 최대 확률.
- **개발자 파이프라인 접점**: 블로그 자동 생성 시 원본 이미지·영상 삽입·1,500자+·의도별 구조를 파이프라인 규칙으로 강제. 단, 네이버는 AI 대량 생성·복붙을 감지하므로 **클라이언트별 실제 현장 사진/영상 투입**이 전제.

### 4.4 스키마(Schema.org)
- 구글 대상: LocalBusiness, FAQPage, Product, Review, Article, VideoObject. 네이버는 스키마 영향 미미. GEO(§4.5)에서 FAQ·Article 스키마는 AI 인용에 유리. (일반 지식)

### 4.5 GEO (Generative Engine Optimization, 2026)
- 정의: ChatGPT·Perplexity·Google AI Overviews(전체 검색의 30~40%에 노출)·네이버 AI 브리핑이 답변에 **인용**하도록 콘텐츠 구조화. KPI에 "인용률(Citation Rate)" 추가. Gartner: 2026 전통 검색량 25% 감소 전망.
- 8가지 전술(Enrich Labs): ① 첫 200단어 안에 직접 답 ② 헤더를 질문형으로 ③ 원본 통계·데이터 포함 ④ 글 말미 6개+ FAQ ⑤ 실명 저자·자격 ⑥ 권위 매체 3자 인용 확보 ⑦ 상황별 대화형 쿼리 타겟("X 상황엔 Y") ⑧ 갱신일 표시·최신 수치.
- 문단 2~3문장으로 짧게(Yotpo). llms.txt, 측정 툴(LLMrefs 등)은 아직 표준 아님.
- 대행 상품화: "네이버 블로그 + 플레이스 + GEO 콘텐츠" 로컬 패키지로 묶기 — 국내는 아직 경쟁자가 거의 없다.

출처: locaposting C-Rank/D.I.A., locaposting 체크리스트 20, sigmine 체류시간 전략, bbima 플레이스 2026, pinead, OSC 플레이스 운영 가이드, i-boss 리뷰작업 저품질, Enrich Labs GEO 2026, Yotpo GEO 12 tips, LLMrefs

---

## 5. 리포팅 & 클라이언트 커뮤니케이션

### 5.1 도구 비교
| 도구 | 가격 | 특징 | 추천 대상 |
|---|---|---|---|
| **Looker Studio** | 무료(Pro $9/유저/프로젝트/월, PDF 예약 200건) | 구글 계열 무료 커넥터, 나머지는 유료 커넥터 필요, 직접 구축 | **개발자 → 1순위**. 메타/네이버는 API→BigQuery/Sheets로 직접 적재 |
| Supermetrics | $25~400+/월 | 데이터 이동(→Sheets/Looker/DWH) 전문, 대시보드는 직접 | 커넥터 개발 귀찮을 때 |
| AgencyAnalytics | $25/월~(클라이언트당 $12~18) | 85+ 채널, 화이트라벨 포털, PDF 자동, 랭크 트래킹 | 클라이언트 5곳+ 되면 |
| Whatagraph/DashThis/Databox | $100~300/월대 | 드래그앤드롭 브랜드 리포트 | 비개발자 대행사 |
- 국내 문제: 네이버 검색광고·GFA·카카오모먼트 커넥터가 해외 툴에 거의 없음 → **네이버 검색광고 API(공식 제공) + 카카오모먼트 API로 직접 시트 적재**가 개발자의 차별점.

### 5.2 월간 리포트 템플릿(구성)
1. 한 줄 요약(이번 달 결과·다음 달 액션 3개)
2. 핵심 KPI(지출·전환·CPA/ROAS·리드 수) 전월 대비
3. 채널별 성과(네이버/메타/구글) + 소재 TOP3/BOTTOM3
4. 랜딩/전환율·문의 품질(클라이언트 피드백 반영)
5. 테스트 결과와 배운 점
6. 다음 달 계획·예산 제안·필요 협조 사항(사진/리뷰/이벤트)
(일반 관례 정리)

### 5.3 커뮤니케이션 케이던스
- 온보딩 2주: 주 2회 짧은 업데이트(추적 세팅·소재 승인).
- 정상 운영: 주 1회 카톡/슬랙 요약(3줄) + 월 1회 리포트 미팅(30분). 이상 징후(지출 급증·계정 제재) 즉시.
- 소재 승인·리뷰 요청 등 **클라이언트 숙제**를 명확히 → 성과 부진 시 책임 소재 정리에 필수. (일반 지식)

출처: dataslayer AgencyAnalytics 대안 2026, reportingninja Supermetrics 대안, Whatagraph 비교, AgencyAnalytics competitors

---

## 6. 운영(Operations): SOP · 계약 · 세금 · 계정 구조

### 6.1 SOP/협업 툴
- 노션(SOP·클라이언트 위키·리포트 초안), 슬랙 또는 카카오워크(클라이언트 채널), ClickUp/노션 보드(주간 작업), 구글 드라이브(소재·리포트 보관). 소상공인 클라이언트는 **카카오톡 단톡**이 현실 — 대신 결정 사항은 노션/메일로 문서화.

### 6.2 계약서 필수 조항 (일반 관례)
- 범위(채널·소재 개수·리포트 주기), 기간(3개월 최소·자동 갱신), 대행 수수료(매체비의 %·정액·하이브리드), 매체비 결제 주체(**클라이언트 카드/계정 직접 결제**), 계정 소유권(클라이언트), 성과 보장 없음 명시, 소재 저작권·초상권, 해지 통보 30일, 데이터 접근 종료 절차.

### 6.3 세금·인보이스 (국내)
- 광고대행업은 업종 특성상 **일반과세자**로 등록 권장(B2B 세금계산서 발급 필요).
- **매체비 vs 수수료 구분**: 광고주로부터 광고료(매체비)와 대행 수수료를 구분 수령해 매체사에 광고료를 전달하는 구조면, 부가세 과세표준은 **대행 수수료만**. 즉 매체비를 대행사 매출로 잡지 않도록 계약·세금계산서를 구분 발행. 가장 깔끔한 방법은 매체비는 클라이언트가 직접 결제하고 대행사는 수수료만 세금계산서 발급.
- 3만원 초과 지출은 세금계산서·현금영수증·카드전표 등 적격증빙 필요. 소프트웨어 구독(해외) 비용은 해외 결제 내역+인보이스 보관.
- 증빙 3종 세트: 계약서(용도) + 세금계산서(금액) + 집행 화면 캡처(실집행).

### 6.4 광고계정 구조 — "내 계정·내 카드로 절대 돌리지 않는다"
이유(공통): ① 메타 광고계정은 생성된 Business Portfolio에 **영구 귀속**, 다른 BM으로 이전 불가 → 이별 시 데이터·픽셀 학습·리뷰 히스토리 전부 소실 ② 담당자 퇴사 시 접근 소멸 ③ 결제 문제·정책 위반 제재가 대행사 전체 계정으로 번짐 ④ 감사·오프보딩 시 소유·결제·데이터 분리 ⑤ 매체비를 대행사 매출로 잡는 세무 문제(§6.3).

| 플랫폼 | 올바른 구조 | 절차 요약 |
|---|---|---|
| **Meta** | 클라이언트 Business Portfolio가 광고계정·페이지·픽셀 소유, 대행사는 **파트너**로 접근 | business.facebook.com/settings/partners → "파트너에게 자산 공유 요청" → 클라이언트 **Business Portfolio ID**(광고계정 ID 아님) 입력 → 권한(광고계정: Advertiser 권장, Admin은 최소화) → 클라이언트 승인. 비밀번호 공유 금지. 클라이언트 BM이 없으면 먼저 만들게 함. 24~48h 내 팔로업 |
| **Google Ads** | 클라이언트 계정을 대행사 **MCC(관리자 계정)**에 연결 | MCC 생성(ads.google.com/home/tools/manager-accounts) → 계정 > 하위계정 설정 > + > 기존 계정 연결 → 고객 ID 입력 → 클라이언트 이메일 승인. 기존 계정 이력·결제 그대로 유지. 한 계정은 최대 5개 MCC에 연결 가능, 계층 최대 6단계. 관리자 소유권은 별도 부여 |
| **네이버 검색광고** | 클라이언트 광고주 계정이 대행사 계정에 **권한 부여** | 대행사: 내정보 > 권한설정 > "권한 받기 허용". 클라이언트: 권한설정 > 부여하기 > 대행사 ID 입력 > 권한 유형(광고관리 / 성과조회 / +로그분석 / +세금계산서 조합 8종) 선택 → 대행사 수락. 계정당 최대 3명에게 부여, 받는 쪽은 최대 5개. 비즈머니 충전·환불·쿠폰전환은 소유주만 |
| **카카오모먼트** | 클라이언트 광고계정에 대행사 **멤버 초대**(+공식 대행사면 영업권) | 광고계정 > 멤버 > 초대/요청. 영업권은 통합에이전시에서 신청, 마스터 5일 내 수락 |
| **쿠팡/스마트스토어** | 판매자 계정 내 부계정/매니저 권한 | 쿠팡 윙 서브계정, 스마트스토어 매니저 초대(일반 지식) |
| **GA4/GTM** | 클라이언트 구글 계정이 속성·컨테이너 소유, 대행사 이메일에 편집자 권한 | 관리 > 계정 액세스 관리 |

출처: AdManage 화이트라벨 가이드, Leadsie 파트너 접근 요청, Meta 비즈니스 지원센터 파트너 추가, Google Ads Help 7456530/6139186/7459399, raonad/i-boss 네이버 권한, 카카오 가이드, ksjtax 광고대행업 세무, U-LEX 광고대행 세금계산서, findsemusa, clobe 광고비 증빙 2026

---

## 7. 개발자의 AI·자동화 엣지 (판매 가능한 상품)

### 7.1 n8n / Make 자동화 (대행사가 파는 것)
- 실제 팔리는 워크플로: 리드 트리아지(폼→CRM→알림톡/슬랙→담당 배정), 고객지원 자동응답, **리포트 자동 생성**, 데이터 입력, 콘텐츠 리퍼포징(블로그→쇼츠→릴스→카드뉴스).
- 가격: 셋업비 + 월 유지비(모니터링·개선). 통상 **$500~5,000/월** 범위. 가치(절감 시간·인건비) 기준 과금, 툴 비용 기준 아님.
- 툴: n8n(셀프호스팅 무료/클라우드 $20~, 500+ 통합, JS/Python 코드 노드), Make, Zapier, LLM API. 국내는 카카오 알림톡·네이버 API 연동을 n8n HTTP 노드로 직접 붙이는 게 차별점.
- 실패 패턴: 자율성 과대 판매(Gartner: 2027년까지 에이전틱 프로젝트 40%+ 취소), 가격 경쟁, 기술 강조. → "한 업종의 한 가지 고통스러운 반복 업무"를 측정 가능한 결과로.
- GHL vs n8n: GHL은 클라이언트 대면 운영체제, n8n은 백엔드 로직. $50K+ MRR 대행사는 둘 다 사용.

### 7.2 Claude/GPT로 카피·소재 스크립트
- 훅 매트릭스(§3.1) × 클라이언트 톤 가이드를 프롬프트 템플릿화 → 소재 초안 10개/5분. 네이버 블로그 초안은 D.I.A. 규칙(의도·구조·1,500자+·FAQ)을 시스템 프롬프트에 내장. 최종 검수는 사람(의료광고법·표시광고법).

### 7.3 자동 리포팅
- 네이버 검색광고 API + Meta Marketing API + Google Ads API → BigQuery/Sheets → Looker Studio 템플릿 복제. 월 1회 PDF 자동 발송 + LLM이 "한 줄 요약·다음 액션" 초안 작성. 리포팅 시간을 클라이언트당 3시간→15분으로.

### 7.4 리드 스크래핑 (법적 주의)
- 공개 사업자 정보(플레이스·GBP·사업자등록)로 잠재 클라이언트 리스트 자동화는 가능하나, **개인정보보호법·정보통신망법(광고성 정보 전송 사전 동의, 야간 전송 제한, 수신거부)** 준수 필수. 이메일·문자 콜드 아웃리치는 "사업자 대표 공개 연락처"에 한해, 옵트아웃 명시. 크롤링은 robots·약관 확인. (일반 지식 — 법률 자문 아님)

### 7.5 챗봇·AI 음성 에이전트
- 비용 구조(Vapi): 플랫폼 $0.05/분 + STT ~$0.01 + LLM $0.02~0.20 + TTS ~$0.04 + 전화 $0.01~0.03 = **실비 $0.15~0.31/분**. Retell: $0.07/분~ + LLM, 번호 $2/월, 월 1,000분 ≈ $85~130.
- 로컬 비즈니스 판매가: 월 500콜 이하 매니지드 $99~500/월. 커스텀 구축은 $3,000~12,000 셋업 + $300~1,500/월(월 3,000콜 이상일 때 정당화). 사례: 부동산 관리사 월 $4,200 → $480로 절감, 2개월 내 ROI.
- 국내 현실: 한국어 STT/TTS 품질·전화망(050/알림톡) 연동이 관건. 예약 접수·부재중 콜백·FAQ 응답이 1차 상품. 카카오 채널 챗봇(챗봇 빌더 무료)도 병행.

### 7.6 클라이언트용 자동 쇼츠 (사용자 파이프라인)
- 상품화: "월 12~20개 쇼츠/릴스 자동 생산 + 업로드 + 성과 상위 2개 광고 부스팅" 패키지. D.I.A. 영상 가산점과 결합해 "블로그 글 안에 쇼츠 삽입"까지 세트.
- 차별점: 일반 대행사는 편집자 인건비 때문에 월 4~8개가 한계 → 자동화로 단가 1/3.
- 주의: 클라이언트 실제 촬영분(현장 클립·사장님 멘트) 없이 완전 생성형만 쓰면 플랫폼 노출·신뢰 모두 약함 → 월 1회 촬영 가이드 제공 + 원본 소스 확보 프로세스 필요.

### 7.7 프로그래매틱 SEO
- Next.js/Astro로 "지역×서비스×상황" 템플릿 페이지 수백 개 생성(예: "강남 왁싱 첫방문 가격"), 구조화 데이터·내부링크·GEO 규칙 적용. 구글·AI 검색용. 네이버 웹문서 노출은 제한적이나 네이버 "웹사이트" 탭·AI 브리핑 인용은 가능. 얇은 중복 페이지는 패널티 → 페이지별 고유 데이터(가격표·후기·사진) 필수. (일반 지식)

출처: Cut The SaaS AI 자동화 대행사 가이드, nextgenchannels, netpartners GHL vs n8n 2026, autocoreai, Retell "Vapi review", cekura Vapi 가격, jahanzaib AI voice pricing, yesworkflow 비용

---

## 8. 학습 경로: 30 / 60 / 90일 커리큘럼

> 전제: 하루 2~3시간, 자기 상품(또는 지인 매장)으로 실제 집행. "강의만 듣기"는 금물 — 모든 주차에 실제 계정 조작이 있어야 한다.

### 8.1 Day 1~30: 기초 + 자격증 + 첫 캠페인
| 주 | 학습 | 실습 | 자원 |
|---|---|---|---|
| 1주 | Google Ads Search 인증(3~5h) + GA4 인증(4~8h) + GTM 기초 | 내 사이트에 GA4+GTM 설치, 키 이벤트 1개 | Skillshop(한국어) https://skillshop.withgoogle.com/intl/ko_ALL/googleads/ |
| 2주 | Meta Blueprint 무료 모듈 6개(11~12h) | 내 상품으로 메타 리드/판매 캠페인 일 1만원 × 7일, 픽셀+CAPI(sGTM/Stape) 세팅 | facebookblueprint.com, DataAlly CAPI 가이드 |
| 3주 | 네이버 검색광고: 광고시스템 도움말 + 검색광고마케터 교재 | 비즈채널·프리미엄 로그분석 신청·검수, 파워링크 키워드 20개 일 1만원 | searchad.naver.com, ppcle 로그분석 가이드, ihd.or.kr |
| 4주 | 소재 프레임워크(§3) + 유튜브 실무 채널 시청 | 훅 5개 × 앵글 2 = 10개 릴스 소재 제작(파이프라인 활용), 48시간 킬룰 적용 | Chatterbuzz, Ben Heath(Meta), Solutions 8 / Aaron Young(Google), Ahrefs(SEO) |
- **30일 산출물**: 자격증 2개, 픽셀·CAPI·GA4·로그분석이 붙은 내 사이트, 총 20~30만원 실집행 데이터, 소재 10개.

### 8.2 Day 31~60: 무료/저가 클라이언트 2곳 + 자동화
| 주 | 학습 | 실습 |
|---|---|---|
| 5주 | 네이버 플레이스·블로그 로직(§4) | 지인 매장 1곳 플레이스 최적화 + 블로그 4편(파이프라인) + 플레이스 광고 |
| 6주 | 메타 파트너 접근·구글 MCC·네이버 권한(§6.4) | 클라이언트 2곳 계정 연결을 **정석대로**(클라이언트 소유) 세팅, 계약서 초안 |
| 7주 | Looker Studio + 네이버/메타 API | 리포트 템플릿 1개 자동화(주간 3줄 요약 자동 발송) |
| 8주 | 검색광고마케터 1급 응시(5만원) + 카카오모먼트/GFA 가이드 | GFA 웹사이트 전환 캠페인 일 3~5만원 테스트, 월간 리포트 1회 발송 |
- **60일 산출물**: 무료(또는 실비) 클라이언트 2곳 운영 중, 리포트 자동화, 사례(케이스) 2개, 검색광고마케터 자격.

### 8.3 Day 61~90: 유료 전환 + 상품 패키지
| 주 | 학습 | 실습 |
|---|---|---|
| 9주 | 소재 볼륨 프로세스(변형 트리, 네이밍, 60/30/10) | 클라이언트당 주 5개 소재 생산 루틴 확립 |
| 10주 | n8n 리드 자동화 + 알림톡 | 폼→시트→알림톡→슬랙 파이프 1개 판매용 데모 |
| 11주 | GEO + 프로그래매틱 SEO | 클라이언트 1곳 지역×서비스 페이지 30개 + FAQ 스키마 |
| 12주 | 영업: 케이스 스터디 정리, 가격표, 제안서 | 유료 클라이언트 3곳 목표(월 30~80만원 리테이너 + 셋업비) |
- **90일 산출물**: 유료 3곳, SOP 노션(온보딩·주간·월간·오프보딩), 상품 3종(추적 셋업 / 광고 운영 리테이너 / 쇼츠+블로그+플레이스 로컬 패키지).

### 8.4 무료·저가 자원 목록
**공식 무료**
- Google Skillshop(한국어): https://skillshop.withgoogle.com/intl/ko_ALL/googleads/
- Meta Blueprint: https://www.facebookblueprint.com/student/catalog/list?search=digital+marketing
- TikTok Academy: https://ads.tiktok.com/business/en/academy
- 카카오비즈니스 가이드: https://kakaobusiness.gitbook.io/main/ad/moment/intro
- 카카오 통합에이전시 가이드: https://kakaobusiness.gitbook.io/agency_guide/total-guide/account_manage-1
- 네이버 검색광고 시스템/도움말: https://searchad.naver.com (로그인 후 '교육' 메뉴), 네이버 광고 공식 블로그·유튜브

**해외 유튜브 채널(무료, 영어)** — 일반 지식·업계 표준 추천
- Meta: Ben Heath, Nick Theriot, Dara Denney(소재)
- Google Ads: Solutions 8(Kasim Aslam), Aaron Young(Define Digital Academy), Paid Media Pros
- SEO/GEO: Ahrefs, Semrush, Search Engine Journal
- 추적: MeasureSchool(GTM/sGTM), Analytics Mania(GA4/GTM 블로그)
- 자동화: n8n 공식 채널, Nate Herk(n8n), Liam Ottley(AI 자동화 대행)

**국내 커뮤니티·교육**
- **아이보스(i-boss.co.kr)**: 국내 최대 마케터 커뮤니티. "퍼포먼스 마케팅 채널 모음 68개" 글(https://www.i-boss.co.kr/ab-6141-65971), 각 매체 실무 글, 교육 후기 1,100건+. 아이보스교육(ibossedu.co.kr)의 "퍼포먼스 마케팅 입문", "성과 개선을 위한 퍼포먼스 마케팅 실전"은 실무자 강의(수십만원대, 오프라인/온라인). 검색광고·플레이스 실무 강의가 특히 국내 특화.
- **패스트캠퍼스 디지털마케팅**: 콘텐츠 마케팅 + 퍼포먼스(그로스해킹) 구성. 스쿨(전일제)/캠프(저녁). 후기: "수업 자체는 들을 만하다"(i-boss 후기). 단, 개발자에겐 속도 느리고 비쌈(수백만원) → 비추. 
- **클래스101**: 마케팅/그로스 카테고리 있음. 검증된 평판 정보 부족, 입문용 이상은 기대 말 것.
- **도와세움 아카데미**: 채널별 퍼포먼스 마케팅 전략 커리큘럼(중소사업자 대상).
- 국내 유튜브(일반 지식): 아이보스 공식, 네이버 광고 공식, 마케팅 실무 채널(예: "마케팅 어벤저스", "퍼포먼스 마케터 김OO"류) — 채널명은 변동이 잦아 아이보스 68개 채널 글에서 최신 목록을 확인 권장.

**책(국내, 일반 지식)** — 검색 한도로 2026 베스트셀러 목록 미확인. 업계에서 꾸준히 추천되는 축: 《마케팅 설계자》(러셀 브런슨, 퍼널), 《브랜드 설계자》, 《컨테이저스》(조나 버거), 《스틱》(칩 히스), 《무기가 되는 스토리》(도널드 밀러, 메시지 구조), 《그로스 해킹》(라이언 홀리데이), 《마케팅이다》(세스 고딘), 국내 실무서로 《퍼포먼스 마케팅 실무》류·네이버 검색광고 수험서(검색광고마케터 1급 교재).

### 8.5 연습 방법
1. **자기 상품 10만원 테스트**: 채널당 10만원(메타·네이버·구글)으로 "추적→소재 10개→킬룰→리포트" 전 과정을 1회 완주. 실패해도 리포트가 포트폴리오.
2. **무료 작업 2곳**: 지인 매장·동네 가게에 "매체비 본인 부담, 운영 무료 1~2개월, 대신 케이스 스터디·후기 사용 허락" 조건. 계정 구조는 정석대로.
3. **케이스 스터디 문서**: 전후 수치, 소재, 배운 점 → 제안서·크몽/숨고 프로필에 사용.
4. **주간 복기**: 매주 금요일 "가설→결과→다음 테스트" 1페이지.

---

## 9. 솔로 운영자 기준 "시간당 수익"이 높은 스킬 순위

> 가격 근거: 해외 툴/대행 가격(§2, §5, §7 출처) + 국내 크몽·아이보스 관례(일반 지식). 국내 단가는 해외의 1/2~1/3 수준으로 보정.

| 순위 | 스킬 | 왜 시급이 높은가 | 국내 현실 단가(추정) |
|---|---|---|---|
| 1 | **전환 추적·서버사이드 세팅**(GA4+GTM+sGTM+CAPI+네이버 로그분석) | 1회 4~8시간 작업, 반복 가능, 비개발자 대행사가 못 함, 광고 성과의 전제라 협상력 큼 | 셋업 30~100만원/건 |
| 2 | **n8n/AI 자동화 구축**(리드 파이프·리포트·챗봇) | 셋업비+월 유지비 이중 과금, 절감 인건비 기준 가격 | 셋업 50~300만원 + 월 10~50만원 |
| 3 | **구글·메타 미디어바잉 리테이너** | 월 반복 수익, 소재 자동화로 시간 압축 가능 | 월 30~100만원 + 매체비 10~20% |
| 4 | **네이버 플레이스+블로그+쇼츠 로컬 패키지** | 국내 수요 최대, 파이프라인으로 원가 1/3, GEO까지 묶으면 경쟁자 없음 | 월 30~80만원 |
| 5 | **AI 음성 에이전트/예약 봇** | 실비 $0.15~0.31/분 대비 판매가 월 $99~500, 마진 큼. 국내는 초기 시장 | 월 20~50만원 |
| 6 | 소재 대량 제작(AI+템플릿) | 개당 단가는 낮으나 볼륨으로 승부, 리테이너 부가 항목 | 개당 2~5만원 또는 월 20~40만원 |
| 7 | 네이버 검색광고 단독 운영 | 수요 크지만 경쟁 심하고 단가 낮음(크몽 월 10~30만원대) | 월 15~40만원 |
| 8 | 당근/카카오/쿠팡 개별 운영 | 소액·저단가, 패키지 부가로만 | 건당 5~15만원 |

**결론**: 개발자는 "추적 셋업(1회) → 운영 리테이너(월) → 자동화/AI(셋업+월)"의 3단 사다리로 클라이언트당 LTV를 키우는 구조가 시간당 수익을 최대화한다. 순수 광고 운영만 팔면 일반 대행사와 가격 경쟁에 빠진다.

---

## 10. 출처 URL

**플랫폼·인증**
- https://geekflare.com/consumer-tech/meta-blueprint-certification-courses/
- https://bir.ch/blog/facebook-blueprint-certification
- https://markampus.com/blog/free-meta-advertising-certifications-2026/
- https://www.stackmatix.com/blog/meta-ads-certification
- https://www.facebookblueprint.com/student/catalog/list?search=digital+marketing
- https://ioquery.fr/en/google-ads-certification-guide
- https://meshworld.in/blog/reference/learning/google-skillshop-certifications/
- https://markampus.com/blog/free-google-digital-marketing-certifications-2026/
- https://www.digitalmarketingagency.sg/blog/google-ads-certification
- https://skillshop.withgoogle.com/intl/ko_ALL/googleads/
- https://ads.tiktok.com/business/en/academy
- https://www.tiktokacademy.com/student/path/2552988-certification-exam-prep
- https://www.kolsquare.com/en/blog/what-is-the-tiktok-academy
- https://www.ihd.or.kr/introducesubject5.do (검색광고마케터)
- https://inside.ampm.co.kr/insight/9780 (네이버 GFA 완벽 가이드)
- https://inside.ampm.co.kr/insight/59959
- https://oscsnm.com/naver-gfa-guide-2026/
- https://www.i-boss.co.kr/ab-6141-54992 (GFA가 뭐야)
- https://sellernow.co.kr/post/507099
- https://kakaobusiness.gitbook.io/main/ad/moment/intro
- https://kakaobusiness.gitbook.io/main/ad/moment/intro/run/account-guide
- https://kakaobusiness.gitbook.io/agency_guide/total-guide/account_manage-1 (영업권)
- https://cs.kakao.com/helps_html/1073189461?locale=ko
- https://sonet.kr/1554/
- https://www.windly.cc/blog/coupang-ad-types-and-settings
- https://leviosa.ai.kr/articles/coupang-ads
- https://www.i-boss.co.kr/ab-6141-59610 (쿠팡 광고 직접운영)
- https://kmong.com/gig/566030 (당근 광고 대행)
- https://connectree.net/post74/?bmode=view&idx=13688311 (당근 광고 비용)

**추적·분석**
- https://www.e2msolutions.com/blog/server-side-gtm-tracking-stape-setup-guide/
- https://somo.agency/blog/meta-pixel-gtm-template/
- https://www.dataally.ai/blog/how-to-set-up-meta-conversions-api
- https://adligator.com/blog/facebook-pixel-conversions-api-capi-setup-guide-2026
- https://novapixeldev.com/blog/correct-ga4-meta-pixel-setup-step-by-step
- https://ppcle.com/blog/web-dev/naver-premium-analytics
- https://imweb.me/faq?mode=view&category=29&category2=35&idx=71893
- https://help.sixshop.com/learn-sixshop/store-manager/add-ons/naver-premium-log-analytics
- https://help.qshop.ai/customer_support/guide/partner/naver_premiumlog
- https://help.airbridge.io/en/guides/naver-performance-da

**소재**
- https://www.chatterbuzzmedia.com/blog/ad-creative-testing/
- https://www.stackmatix.com/blog/meta-ads-creative-testing-framework
- https://www.darkroomagency.com/observatory/creative-fatigue-performance-testing-framework
- https://reloop.so/blog/article/ad-creative-testing-framework/
- https://adlibrary.com/posts/how-many-ad-creatives-to-test
- https://ugcking.com/blog/creative-testing-framework
- https://www.i-boss.co.kr/ab-6141-69848 (2026 영상 트렌드)

**SEO/로컬/GEO**
- https://locaposting.com/blog/naver-crank-dia-algorithm
- https://locaposting.com/blog/naver-seo-checklist
- https://sigmine.ai/blog/naver-blog-seo-strategy-202605
- https://brunch.co.kr/@chatsapiens/8
- https://bbima.kr/blog/naver-place-ranking-2026
- https://pinead.co.kr/네이버-플레이스-상위노출-다가-올-2026년을-위한-핵심/
- https://oscsnm.com/naver-place-operation-guide-2026-4/
- https://www.i-boss.co.kr/ab-6141-69507 (리뷰작업 → 저품질)
- https://www.i-boss.co.kr/ab-2987-543037
- https://baikuk.blog/posts/guides/naver-place-optimization/
- https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026
- https://www.yotpo.com/blog/chatgpt-seo-geo-tips/
- https://llmrefs.com/generative-engine-optimization

**리포팅**
- https://agencyanalytics.com/competitors
- https://www.dataslayer.ai/blog/agency-analytics-alternative-2026
- https://www.reportingninja.com/blog/supermetrics-alternatives
- https://whatagraph.com/blog/articles/agencyanalytics-alternatives-and-competitors

**운영·계정·세무**
- https://admanage.ai/blog/white-label-facebook-ads
- https://www.leadsie.com/blog/request-facebook-ad-account-access
- https://www.facebook.com/business/help/708679622611131
- https://www.stackmatix.com/blog/meta-business-manager-guide
- https://support.google.com/google-ads/answer/7456530?hl=en
- https://support.google.com/google-ads/answer/6139186?hl=en
- https://support.google.com/google-ads/answer/7459399?hl=en
- https://ads.google.com/home/tools/manager-accounts/
- https://raonad.com/네이버-검색광고-권한설정-방법-권한별-소개-주의사/
- https://www.i-boss.co.kr/ab-6141-16632
- https://www.ideakey.co.kr/html/customer/notice_detail.html?no=191&PageNo=36
- http://www.ksjtax.co.kr/httpstax1282imwebmeadmindesign/?bmode=view&idx=12540623
- https://www.ulex.co.kr/tax/서면2015부가2022-173844
- https://www.findsemusa.com/service/consult/consultView.do?qidx=28728
- https://clobe.ai/blog/business-evidence-criteria-processing-income-2026
- https://www.kifrs.com/community/3580

**AI·자동화**
- https://cut-the-saas.com/guides/how-to-start-an-ai-automation-agency
- https://www.nextgenchannels.com/guides/how-to-start-ai-automation-agency/
- https://netpartners.marketing/gohighlevel-vs-n8n-2026/
- https://www.autocoreai.net/blog/n8n-vs-gohighlevel
- https://www.retellai.com/blog/vapi-ai-review
- https://www.cekura.ai/blogs/vapi-ai-pricing
- https://www.jahanzaib.ai/blog/ai-voice-agent-pricing-breakdown
- https://www.yesworkflow.com/blog/ai-voice-agent-cost

**학습·커뮤니티**
- https://www.i-boss.co.kr/ab-6141-65971 (퍼포먼스 마케팅 채널 68개)
- https://www.i-boss.co.kr/ab-74894 (아이보스 교육 후기)
- https://www.i-boss.co.kr/ab-6141-28031 (패스트캠퍼스 후기)
- https://www.ibossedu.co.kr/edu-goods-290 (퍼포먼스 마케팅 입문)
- https://www.ibossedu.co.kr/edu-goods-372
- https://dowaseum.academy/curriculum002
- https://class101.net/en/categories/6220895c9dede0214b0783d4

---

## 11. 조사 한계·후속 항목
- 세션 웹검색 한도(200회)에 도달해 다음 항목은 검색 미수행 → 일반 지식으로 보완했으며 검증 필요: 해외 유튜브 채널 최신 상태, 국내 마케팅 책 2025~26 베스트셀러, 국내 콜트래킹 업체 비교, GBP 2026 체크리스트, 아임웹/Framer 비교 기사, 네이버 검색광고 2026 공식 교육 일정.
- 아이보스(i-boss.co.kr) 페이지는 봇 차단(403)으로 본문 확인 불가 — 검색 스니펫 기준.
- 국내 단가(§9)는 추정치. 크몽·숨고 실제 시세 조사로 보정 권장.
