// education-v3 데이터 — "상부 보고서(요약)" 단일 정본.
// v1/v2를 건드리지 않는 독립 트랙. v3의 축은 사업 역할(포지션)이다:
//   ① 트랙 A(A1~A5) + 트랙 B(B1~B5)
//   ② 각 모듈을 BM 포지션(미끼·수익엔진·마진엔진·열쇠·도어오프너…)으로 분류
//   ③ 모듈별 대상·규모·진행흐름·학습목표·남는것·길이형식·KPI

export type Track = "A" | "B";

// 사업 역할 톤 — 카드 강조색 그룹.
export type Role =
  | "미끼" // 전사 침투 입구
  | "수익엔진" // 핵심 수익
  | "빌더양성"
  | "열쇠" // 결재 뚫기
  | "마진엔진"
  | "도어오프너"
  | "오버레이"; // B1 시그니처

export type ModuleV3 = {
  code: string;
  name: string;
  track: Track;
  tier: string; // 입문 / 활용 / 심화 / 리더 / 오버레이 / 이벤트 …
  role: Role;
  position: string; // 사업 역할 한 줄 (포트폴리오 표의 포지션 — 내부 BM 렌즈)
  signature?: boolean; // B1
  // ── 고객 대면 카피 (B1 시그니처 양식) ──
  value?: string; // 가치 한 줄
  pain?: string; // 이런 고민이 있다면 (고객 목소리)
  differentiator?: string; // 차별 포인트
  cta?: string; // CTA 라벨
  // ── 스펙 ──
  audience: string; // 대상
  scale: string; // 규모
  flow: string[]; // 무엇을 하나 (진행 흐름)
  goals: string[]; // 학습 목표
  output: string; // 남는 결과물
  format: string; // 길이·형식
  kpi: string; // KPI
  guarantee?: string; // 완성 보장 문구 (전원 완성 등)
};

export const NORTH_STAR =
  "토이가 아닌, 자사 데이터로 작동하는 업무 도구";

export const CATALOG_HEADLINE =
  "10개 모듈은 커리큘럼이 아니라, 전사를 뚫는 사업 동선입니다.";

export const SUBHEAD =
  "전 모듈 공통 북극성은 하나 — 자사 데이터로 실제 작동하는 업무 도구를 남깁니다. 성과 수치는 레퍼런스 1호 전까지 ‘약속’이 아니라 ‘측정 설계’로 답니다.";

export const MODULES: ModuleV3[] = [
  {
    code: "A1",
    name: "AI 라이트업",
    track: "A",
    tier: "입문",
    role: "미끼",
    position: "",
    audience: "전 직원(비개발 포함)",
    scale: "전사교육",
    flow: [
      "(사전) 플립러닝 개념학습 + 내 업무 1건 제출",
      "AI 첫걸음(프롬프트)",
      "첫 바이브코딩 — 자사 맥락 도우미(샘플·더미 데이터)",
      "자동화 1건 완성",
    ],
    goals: [
      "AI 거부감 해소",
      "자사 맥락 도우미 제작",
      "반복업무 1건 자동화",
    ],
    output: "내 반복업무 1개 자동화",
    guarantee: "전원 완성",
    format: "4h · 실시간 워크숍 + 사전 플립러닝",
    kpi: "1인당 첫 산출물 완성률 / AI 거부감 사전·사후",
  },
  {
    code: "A2",
    name: "바이브코딩 실무 적용",
    track: "A",
    tier: "활용",
    role: "수익엔진",
    position: "핵심 수익 엔진 (개인·단기)",
    audience: "반복업무를 이미 쥔 주니어~미들 실무자 (신입 제외 → A5)",
    scale: "직무 혼합(직군별 기수)",
    flow: [
      "자동화할 업무 고르기 — 적합한 업무만 선별",
      "개선 전 소요시간 측정 (기준값 확보)",
      "자사 데이터로 자동화 직접 제작",
      "개선 후 시간 재측정 → 운영 가이드·체크리스트로 정착",
    ],
    goals: [
      "자동화 후보 판별",
      "워크플로 제작",
      "절감 객관 측정·보고",
      "재현(다음 건 자력)",
    ],
    output:
      "작동 자동화 워크플로 1건 + Before/After 절감 리포트 + 운영카드 + 재현 체크리스트 + 팀 공유 라이브러리",
    format: "8h(1건) / 16h(연동·2건) 2-tier · PBL 하이브리드",
    kpi: "워크플로 완성률 / 주당 절감시간(객관 실측) / 정착·재현 1회 완료",
  },
  {
    code: "A3",
    name: "바이브코딩 빌더",
    track: "A",
    tier: "심화",
    role: "빌더양성",
    position: "빌더 양성 (장기·고단가·소수)",
    audience:
      "A2 수료(또는 동등) + 프로덕트급 과제 1건 보유 + 스폰서 승인 — 선발 게이트 통과자",
    scale: "코치 1인당 소수 전담",
    flow: [
      "과제 적합도 게이트",
      "기획",
      "바이브코딩 제작",
      "거버넌스 통과 배포",
      "팀 정착·운영 인수 + 재현 레시피 박제",
    ],
    goals: [
      "사내 문제를 프로덕트로 기획",
      "거버넌스 통과 배포",
      "다음 프로덕트 자력 착수(재현)",
      "운영 인수 설계",
    ],
    output:
      "작동 팀 백오피스 프로덕트 1개(배포 완료) + 거버넌스 인수 패키지 + 운영카드 + 빌더 재현 레시피",
    format: "4주(MVP 배포) / 8주(운영·개선) 2-tier · 2주 스프린트 단위 결제",
    kpi: "재현 입증(2번째 과제 기획 완료) / 거버넌스 통과 배포율 / 인수 패키지 전달율",
  },
  {
    code: "A4",
    name: "AI 리더십·전략",
    track: "A",
    tier: "리더",
    role: "열쇠",
    position: "결재 뚫는 열쇠 — top-down 임원 로드맵",
    audience: "임원(결재자 본인) + 직속 팀장 소수 동반 (책임 주체 = 임원)",
    scale: "~12명",
    flow: [
      "AX 전환 프레임 — 성숙도 진단",
      "전환 전략 — 우선순위·변화관리·측정 프레임",
      "부서 로드맵 작성 + 15분 체감 빌드(현실감 검증)",
    ],
    goals: [
      "조직 AI 성숙도·기회 진단",
      "우선순위·변화관리 결정",
      "분기 로드맵 설계·책임",
      "downstream 측정 프레임 설계",
    ],
    output:
      "부서 AX 전환 로드맵 1부 (분기 목표 + 선행지표 측정 프레임 + 우선 업무 baseline 포함)",
    format: "1일 워크숍 + 임원 1:1(B1 풀케어)",
    kpi: "실행 가능한 로드맵 1부 완성률 / 선행지표 측정 프레임 설계(절감시간 미약속)",
  },
  {
    code: "A5",
    name: "신입/주니어 온보딩",
    track: "A",
    tier: "입문",
    role: "수익엔진",
    position: "단독 수익 (HR 온보딩 예산)",
    audience: "신규 입사자·주니어",
    scale: "입사 batch 10~20명",
    flow: [
      "회사 맥락·AI 사용범위",
      "AI 기본기",
      "신입의 실제 첫 과제에 AI 얹어 산출물 완성",
      "반복 1건 자동화 맛보기 (직무 배정 有=직무 첫 과제 / 배정 前=온보딩 공통 실과제, 택1)",
    ],
    goals: [
      "사내 AI 사용범위 이해",
      "AI 기본기",
      "첫 과제를 AI로 완성",
      "자동화 맛보기(자립화)",
    ],
    output: "직무(또는 온보딩 공통) 첫 산출물 1개 + 자동화 미니 도구",
    guarantee: "전원 완성 (미달 시 무상 보강)",
    format: "2주·4회(≈8.5h) · 기존 온보딩에 얹는 AI 트랙",
    kpi: "1인당 첫 산출물 완성률 / AI 활용 편차·거부감 사전·사후",
  },
  {
    code: "B1",
    name: "1:1 퍼실리테이팅",
    track: "B",
    tier: "오버레이",
    role: "오버레이",
    signature: true,
    position: "마진 엔진 + 업셀 종착지 (단독 아님)",
    audience:
      "모든 트랙에 결합 — 단 고-floor 트랙(A2·B3·A3)에 두껍게, 미끼(A1)엔 미부착/라이트",
    scale: "코치 1:N(스탠다드)~1:소수(풀케어), 투입강도 3-tier",
    flow: [
      "사전 진단",
      "개인별 완주선(결과물 크기) 설계",
      "회차별 1:1 케어·중간 재조정",
      "floor 이상 결과물 완성",
    ],
    goals: [
      "성실 참여 전원이 완주선을 넘김",
      "수준차·이탈을 개인별 난이도 설계로 흡수",
    ],
    output: "host 트랙 결과물의 floor 이상 작동물",
    guarantee: "성실 참여 전원 완성 (못 넘으면 무상 보강)",
    format: "본 트랙 기간 종속 (오버레이)",
    kpi: "완성률·완주율 델타(B1 결합 vs 미결합) / 이탈률↓",
  },
  {
    code: "B2",
    name: "바이브코딩 해커톤",
    track: "B",
    tier: "이벤트",
    role: "마진엔진",
    position: "단독 마진 엔진 — 1~2일 집중",
    audience: "전 직원(팀빌딩 겸), 전대상",
    scale: "팀 단위",
    flow: [
      "(사전) 적합도 게이트로 과제 선별",
      "팀빌딩",
      "집중 제작(팀당 1개)",
      "발표·시연",
      "스폰서가 채택 결정",
    ],
    goals: [
      "팀으로 과제 정의·범위 축소",
      "작동 도구 제작",
      "채택 의사결정 받기",
    ],
    output:
      "팀당 작동 도구 1개(데모 아님) + 채택 결정(쓴다/누가 운영) + 발표 자료",
    format: "2일 기본(채택 결정 포함) / 1일 라이트(체감 중심)",
    kpi: "채택 결정률(쓰기로 한 팀 비율) / 도구 완성 팀 비율",
  },
  {
    code: "B3",
    name: "직무 특화 PBL",
    track: "B",
    tier: "활용·팀",
    role: "마진엔진",
    position: "단독 마진 엔진 — A2의 팀 확산판",
    audience: "반복업무를 쥔 직군 실무자 (신입 → A5)",
    scale: "직군 단위 기수",
    flow: [
      "(사전) 적합도 게이트로 직군 자동화 후보 선별",
      "직군 공통 프레임 학습",
      "각자 자기 반복업무 자동화 제작",
      "현업 정착(회차마다 정착 체크)",
      "직군 라이브러리 적립",
    ],
    goals: [
      "직군 반복업무에서 자동화 후보 판별",
      "직군 프레임으로 제작",
      "실제 업무에 정착",
    ],
    output:
      "팀원별 작동 자동화 N건(팀 정착) + 직군 AI 적용 라이브러리(팀 자산) + 직무 적용률 리포트",
    format: "라이트 ~4주(1~2건/인) / 풀 8~12주(팀 확산+B1 풀케어) · 직군 기수 회차제",
    kpi: "직무 적용률(30일 후 실사용 팀원 비율) / 인당 정착 건수",
  },
  {
    code: "B4",
    name: "AI 트렌드 세미나",
    track: "B",
    tier: "리더·전사",
    role: "도어오프너",
    position: "유료 각성 도어오프너 — bottom-up 발굴",
    audience: "전 직원(의사결정층 포함)",
    scale: "전사 결집 단발",
    flow: [
      "업종 맞춤 트렌드·AI 실적용 레퍼런스 큐레이션",
      "직원이 자기 반복업무에서 AI 적용 기회 발굴",
      "적합도 판별 프레임으로 ‘되는 기회’만 추림",
      "전사 기회 백로그 + 후속 동선",
    ],
    goals: [
      "눈높이 정렬",
      "자기 업무에서 AI 적용 기회 발굴",
      "‘되는 것/안 되는 것’ 구분",
      "전사 우선순위 합의",
    ],
    output:
      "우선순위 매긴 전사 AI 적용 기회 백로그 (실행 가능 후보 + 적합도 판정)",
    format: "2~2.5h · 사전 부담 0 · 테이블별 퍼실리테이터",
    kpi: "후속 과정 전환율 / 발굴 기회 수 / 백로그 채택률",
  },
  {
    code: "B5",
    name: "온라인/자기주도",
    track: "B",
    tier: "입문·전사",
    role: "도어오프너",
    position: "저단가·고마진 깔기 입구 (zero marginal cost)",
    audience: "전 직원",
    scale: "인원 제한 없음",
    flow: [
      "주차별 영상 + 자동채점 실습(통과해야 다음 주차 게이트)",
      "자사 맥락 도구 제작",
      "4주차 수료 프로젝트를 자동채점이 ‘작동함’ 검증",
      "통과 제출(=수료)",
    ],
    goals: [
      "자기주도로 AI·프롬프트·바이브코딩 기초",
      "자사 맥락 작동 도구 1건 완성",
      "자동채점 통과로 작동 증명",
    ],
    output: "자사 업무 맥락 작동 도구 1건(샘플·더미·가이드형) + 이수증(부산물)",
    format:
      "4주 자기주도(상시 온라인) · 1:1 없음(자동채점 게이팅+제출 강제만, 보장은 A1/B1 업셀)",
    kpi: "후속 전환율 / 1인당 수료 프로젝트 완성률",
  },
];

// 사업 역할 → 강조 톤 (Tailwind 클래스 묶음)
export const ROLE_TONE: Record<
  Role,
  { label: string; text: string; chip: string; ring: string }
> = {
  미끼: {
    label: "미끼상품",
    text: "text-sky-300",
    chip: "bg-sky-400/10 text-sky-300",
    ring: "border-sky-400/25 bg-sky-400/[0.04]",
  },
  수익엔진: {
    label: "수익 엔진",
    text: "text-emerald-300",
    chip: "bg-emerald-400/10 text-emerald-300",
    ring: "border-emerald-400/25 bg-emerald-400/[0.04]",
  },
  빌더양성: {
    label: "빌더 양성",
    text: "text-ax-purple-light",
    chip: "bg-ax-purple/15 text-ax-purple-light",
    ring: "border-ax-purple/35 bg-ax-purple/[0.06]",
  },
  열쇠: {
    label: "결재 열쇠",
    text: "text-ax-amber",
    chip: "bg-ax-amber/12 text-ax-amber",
    ring: "border-ax-amber/35 bg-ax-amber/[0.06]",
  },
  마진엔진: {
    label: "마진 엔진",
    text: "text-rose-300",
    chip: "bg-rose-400/10 text-rose-300",
    ring: "border-rose-400/25 bg-rose-400/[0.04]",
  },
  도어오프너: {
    label: "도어오프너",
    text: "text-teal-300",
    chip: "bg-teal-400/10 text-teal-300",
    ring: "border-teal-400/25 bg-teal-400/[0.04]",
  },
  오버레이: {
    label: "★ 시그니처",
    text: "text-ax-amber",
    chip: "bg-ax-amber/12 text-ax-amber",
    ring: "border-ax-amber/40 bg-ax-amber/[0.06]",
  },
};

export function toneOf(m: ModuleV3) {
  return m.signature ? ROLE_TONE["오버레이"] : ROLE_TONE[m.role];
}

// 업셀 동선 (보고서 §1 하단)
export const UPSELL_STEPS: { tag: string; codes: string; desc: string }[] = [
  { tag: "전사 깔기", codes: "B4 · B5", desc: "도어오프너로 전사 각성" },
  { tag: "입문", codes: "A1", desc: "전원 첫 산출물" },
  { tag: "활용", codes: "A2", desc: "개인 절감 핵심 수익" },
  { tag: "팀 확산", codes: "B3", desc: "직군 단위 마진 엔진" },
];

export const UPSELL_OVERLAY =
  "A3(빌더)·A4(임원)는 위에서 뚫고, B1은 모든 트랙에 얹는다.";

// 트랙별 묶음
export const TRACK_A = MODULES.filter((m) => m.track === "A");
export const TRACK_B = MODULES.filter((m) => m.track === "B");
