// education-v2 데이터 — docs/jocoding_최종10모듈_확정판.md 기준 단일 정본.
// v1(data.ts)을 건드리지 않고 별도 트랙으로 둔다. 타입은 v1을 재사용하고,
// 확정판의 ✅확정 카피만 오버라이드 + 구매 그룹/난이도/경계 메타를 더한다.

import {
  MODULES as V1_MODULES,
  FACILITATION as V1_FACILITATION,
  LEVELS,
  FORMATS,
  type Module,
  type Level,
} from "@/components/education/data";

export { LEVELS, FORMATS };
export type { Module, Level };

// 구매 그룹 — 누가 예산 쥐고 누구를 교육하나 (확정판 §0.5)
export type Group = "전사" | "팀" | "임원";
export type ModuleV2 = Module & { group: Group };

// 확정판 ✅확정 반영분 — 카드 레벨 카피만 교체(syllabus 회차 상세는 v1 유지).
type Override = Partial<Module> & { group: Group };
const OVERRIDES: Record<string, Override> = {
  A1: {
    group: "전사",
    headline:
      "AI를 처음 켜보는 직원도, 첫 시간에 ‘자사 업무 도우미’를 직접 만들어 갑니다.",
    what: "AI 기본 개념 + 프롬프트 + 생애 첫 바이브코딩(자사 데이터 도우미 제작)",
    output: "자사 데이터 기반 내 업무 도우미 + 간단 자동화 1건",
    differentiator:
      "입문도 ‘듣기’가 아니라 ‘만들기’로 끝 — KPI를 1인당 첫 산출물 완성률로 못박아 commodity 탈출",
  },
  A2: {
    group: "팀",
    what: "내 직무 업무 분해 → 자사 데이터로 AI·노코드 자동화 실습",
    output: "자사 데이터 기반 내 업무 자동화 워크플로 1건",
  },
  A3: {
    group: "팀",
    headline:
      "비개발자가 사내에서 진짜 쓰는, 자사 데이터로 작동하는 미니 서비스를 직접 만들어 배포합니다.",
    what: "기획 → 바이브코딩 → 배포까지 풀사이클(2주 스프린트 단위 모듈화)",
    output: "자사 데이터로 작동하는 팀 백오피스 업무 프로덕트",
    duration: "4~12주 · 프로젝트형(2주 스프린트)",
  },
  A4: {
    group: "임원",
    level: "리더",
    headline:
      "결재권자가 직접 자사 도구를 하나 만들어보고, 그 체감 위에 우리 조직의 도입 로드맵을 그립니다.",
    what: "전략 브리핑 → 적용 과제 도출 → 임원이 직접 자사 데이터로 도구 1개 제작(코치 1:1) → 로드맵 수립",
    output: "자사 AI 도입 로드맵(경영 보고용) + 임원 본인이 만든 실제 도구 1개",
    audience: "리더·임원·DX/AX TF · 소수 정예",
    duration: "1일 워크숍(≈8h) · 코치 1:1 결합",
    differentiator:
      "‘듣는 특강’이 아니라 결재권자가 직접 만든 체감 + 우리 회사 로드맵 — 본인이 먼저 겪어 진짜 챔피언이 됨",
    cta: "리더 전략 워크숍 문의",
  },
  A5: {
    group: "전사",
    headline: "신규 입사자가 자기 직무 첫 과제를 AI로 해내며 더 빨리 기여합니다.",
    what: "AI 기본기 → 자기 직무 첫 과제에 AI 얹어 수행 → 반복 업무 자동화 1건 (직무 교육은 고객사 OJT, jocoding은 그 위에 AI 레이어)",
    output: "직무 첫 산출물(AI 활용) + 직무 자동화 1건",
    duration: "2~4주 · 고객사 온보딩에 얹는 기수제 AI 트랙",
    differentiator:
      "입사 첫날부터 ‘AI로 일하는’ 디폴트 — A1=기존 구성원 범용 / A5=신규 입사자 + 자기 직무 첫 과제를 AI로",
    cta: "신입 온보딩 AI 트랙 문의",
  },
  B2: {
    group: "팀",
    level: "빌더",
    headline:
      "사내 실제 과제를 1~2일 몰입으로 정말 쓸만한 작동 도구로 만들어 냅니다.",
    what: "팀 단위 사내 과제 선정 → 1~2일 집중 빌드 → 발표·시연 (이름은 해커톤이되 본질은 쓸만한 결과물을 만드는 집중 스프린트)",
    output: "실제 쓸만한 작동 도구(데모 프로토타입 아님) + 발표 자료",
    differentiator:
      "비개발자도 짧은 시간에 진짜 쓸만한 것을 만든다 — A3=장기 양성 / B2=집중 이벤트",
  },
  B3: {
    group: "팀",
    headline:
      "직군 팀이 자기 실전 과제를 가져오면, 거기에 딱 맞는 AI 활용을 얹어 직접 해결합니다.",
    what: "직군 팀이 자기 실전 과제 지참 → AI 적용 방법론으로 멀티세션 코칭 → 해결 (직무 전문성은 고객 팀, jocoding은 AI 적용 프레임을 표준 템플릿으로 제공)",
    output: "직무 과제를 AI로 해결한 산출물(자사 데이터)",
    differentiator:
      "산업이 아닌 직무 단위로 잘게 맞춤 → 적용률↑. 강사는 직무 전문가가 아니라 AI 적용 코치",
  },
  B4: {
    group: "전사",
    level: "리더",
    headline:
      "조코딩이 직접, 우리 회사 업무로 미리 만든 AI 도구를 시연하며 전사 눈높이를 한 번에 끌어올립니다.",
    what: "자사 업종 맞춤 트렌드 큐레이션 → 사전 워크업으로 받은 자사 반복업무를 조코딩 팀이 미리 도구화해 시연(라이브 빌드 아님) → 자사 적용 토의",
    output: "자사 맞춤 데모 도구 템플릿 1~2개 + 우리 회사 적용 아이디어 리스트",
    audience: "전 직원·임원 · 단발(전사 결집)",
    duration: "2시간 · 사전 워크업(담당자 인터뷰/설문) 포함",
    differentiator:
      "복제 불가한 조코딩 본인 + ‘우리 회사 얘기’로 만든 사전 데모 목격 — 유튜브 무료 일반론과 갈리는 지점",
    cta: "전사 각성 세미나 문의",
  },
  B5: {
    group: "전사",
    differentiator:
      "온라인도 ‘듣기’로 끝내지 않고 산출물 제출까지 — 완주 약한 구간은 1:1 결합형 집체로 업셀",
  },
};

function applyOverride(m: Module): ModuleV2 {
  const o = OVERRIDES[m.code];
  return { ...m, ...(o ?? {}), group: o?.group ?? "전사" };
}

export const MODULES: ModuleV2[] = V1_MODULES.map(applyOverride);

export const FACILITATION: Module = {
  ...V1_FACILITATION,
  what:
    "전담 코치가 개인별 결과물 스코프를 ‘완성 가능한 크기’로 조정하고 진도·이탈을 1:1 케어 → 전원이 완주선을 넘게 한다",
  output: "수강생 전원 결과물 완성 (지향이 아니라 실체로 해낸다)",
  audience: "모든 과정 결합 옵션 · 코치 투입강도(라이트/스탠다드/풀케어)",
};

export const CATALOG_HEADLINE = "듣고 끝나는 교육 말고, 만들어서 남기는 교육.";

// ── 구매 그룹 레이어 (확정판 §0.5) ───────────────────────────────
export const GROUPS: {
  key: Group;
  motion: string;
  codes: string[];
  buyer: string;
  role: string;
}[] = [
  {
    key: "전사",
    motion: "넓게 깔기",
    codes: ["A1", "B4", "B5", "A5"],
    buyer: "HR · 대규모 1회 발주",
    role: "입구·미끼",
  },
  {
    key: "팀",
    motion: "직무에 박기",
    codes: ["A2", "B3", "B2", "A3"],
    buyer: "직군 리더 · 팀 예산",
    role: "마진 엔진",
  },
  {
    key: "임원",
    motion: "위에서 뚫기",
    codes: ["A4"],
    buyer: "결재자 본인 · 소수정예",
    role: "결재 뚫는 열쇠",
  },
];

export const UPSELL = "임원(A4로 결재 뚫기) → 전사(A1 깔기) → 팀(A2·B3 박기)";

// ── 난이도 사다리 = ‘무엇을(결과물)’의 깊이 (확정판 §0.6) ─────────
export const LADDER: {
  level: Level;
  verb: string;
  evidence: string;
  codes: string[];
}[] = [
  { level: "입문", verb: "켜기", evidence: "자사 도우미 1개", codes: ["A1", "A5", "B5"] },
  { level: "활용", verb: "쓰기", evidence: "내 업무 자동화 1건", codes: ["A2", "B3", "B5"] },
  { level: "빌더", verb: "만들기", evidence: "작동 프로덕트 배포", codes: ["A3", "B2"] },
  { level: "리더", verb: "결정", evidence: "도입 로드맵·판단", codes: ["A4", "B4"] },
];

// ── 카니발 경계 (단독 존재 이유, 확정판 §1) ──────────────────────
export const BOUNDARIES: {
  pair: string;
  left: string;
  right: string;
  oneLine: string;
}[] = [
  { pair: "A1 / A5", left: "기존 구성원 전사 각성", right: "신규 입사자 + 직무 적응 동시", oneLine: "현직원 / 신입" },
  { pair: "A2 / B3", left: "개인이 자기 업무 1건 단기", right: "직군 팀이 함께 장기 과제", oneLine: "개인·단기 / 팀·장기" },
  { pair: "A3 / B2", left: "장기 빌더 양성(풀사이클)", right: "1~2일 집중 스프린트", oneLine: "장기 양성 / 집중 이벤트" },
  { pair: "A4 / B4", left: "임원 의사결정 워크숍(로드맵)", right: "전사 트렌드 인풋(단발)", oneLine: "결정 / 인지" },
];

export function moduleByCode(code: string): ModuleV2 | undefined {
  return MODULES.find((m) => m.code === code);
}
