// jocoding 교육 모듈 데이터 — IA v2 §5 + S6 콘텐츠 설계서(9요소 전환형 카드).
// 카피 출처:
//  - confirmed: jocoding_S6_모듈카탈로그_콘텐츠설계 문서 그대로 (A1·A2·A3·B1·B2·B3·B4)
//  - pending:   문서에 상세 카피 없음 → 스키마 맞춰 작성, 추후 교체 (A4·A5·B5)
// 직무는 축이 아니라 jobTags 로만 노출. 가격은 노출하지 않는다("맞춤 견적").

export type Level = "입문" | "활용" | "빌더" | "리더";
export type Format = "세미나" | "PBL·실습" | "해커톤" | "온라인";

export const LEVELS: Level[] = ["입문", "활용", "빌더", "리더"];
export const FORMATS: Format[] = ["세미나", "PBL·실습", "해커톤", "온라인"];

// 회차별 상세 커리큘럼 (교수설계). 원천 문서가 없어 설계 초안 — 확정 후 교체.
export type Session = {
  no: string; // "1회차" / "Day 1"
  time: string; // "2시간"
  topic: string;
  goal: string; // 학습 목표
  activities: string[]; // 핵심 활동
  output: string; // 회차 산출물
  coachNote?: string; // 1:1 퍼실리테이팅 개입 포인트(밀착 관리)
};

export type Syllabus = {
  objectives: string[]; // 모듈 학습 성과
  prereq: string; // 선수 지식
  sessions: Session[];
  finalDeliverable: string; // 최종 산출물
  graduation: string; // 졸업 요건 (= 산출물 1개)
};

export type Module = {
  id: string;
  code: string; // A1·B2 …
  name: string;
  level: Level;
  format: Format;
  headline: string; // 가치 한 줄
  pain: string; // 이런 고민이 있다면
  what: string; // 무엇을 하나
  output: string; // 남는 결과물
  audience: string; // 추천 대상/규모
  duration: string; // 길이·형식
  differentiator: string; // 차별 포인트
  cta: string; // CTA 라벨
  curriculum: string[]; // 참고(투명화용) — syllabus 없을 때 폴백
  syllabus?: Syllabus; // 회차별 상세 (있으면 모달에서 우선 노출)
  jobTags?: string[];
  pending?: boolean; // 카피 확정 전
};

export const MODULES: Module[] = [
  {
    id: "lightup",
    code: "A1",
    name: "AI 라이트업",
    level: "입문",
    format: "세미나",
    headline:
      "AI를 처음 켜보는 직원도, 첫 시간에 ‘내 업무 도우미’를 직접 만들어 갑니다.",
    pain: "전 직원 교육인데 수준 차가 크고, AI 거부감부터 풀어야 해요.",
    what: "AI 기본 개념 + 프롬프트 + 생애 첫 바이브코딩 실습",
    output: "나만의 업무용 GPT / 간단 자동화 1개",
    audience: "전 직원(비개발 포함) · 대규모 가능",
    duration: "4시간 · 집체/온라인",
    differentiator: "입문도 ‘듣기’가 아니라 ‘만들기’로 끝",
    cta: "전사 입문 과정 문의",
    curriculum: ["AI·생성형 개념 잡기", "업무 프롬프트 기초", "생애 첫 바이브코딩 실습"],
    syllabus: {
      objectives: [
        "AI·생성형 도구의 작동 원리를 업무 언어로 이해한다",
        "내 업무에 바로 쓰는 프롬프트와 첫 자동화를 직접 만든다",
      ],
      prereq: "없음 · 비개발자 환영",
      sessions: [
        {
          no: "1회차",
          time: "60분",
          topic: "AI, 두려움 걷어내기",
          goal: "AI 거부감을 걷고 무엇을 할 수 있는지 감을 잡는다",
          activities: [
            "생성형 AI 원리 5분 이해",
            "우리 직무 적용 사례 둘러보기",
            "ChatGPT 첫 대화 실습",
          ],
          output: "AI 활용 가능 업무 리스트",
        },
        {
          no: "2회차",
          time: "90분",
          topic: "업무 프롬프트 기초",
          goal: "반복 업무를 프롬프트로 처리한다",
          activities: [
            "프롬프트 4요소 패턴",
            "내 업무 프롬프트 작성·개선",
            "나만의 업무용 GPT 설정",
          ],
          output: "나만의 업무용 GPT",
          coachNote: "막히는 직원을 코치가 즉시 1:1 보조",
        },
        {
          no: "3회차",
          time: "90분",
          topic: "생애 첫 바이브코딩",
          goal: "간단 자동화 1개를 직접 만든다",
          activities: [
            "바이브코딩 개념 체험",
            "자연어로 간단 도구 제작",
            "결과 공유·회고",
          ],
          output: "간단 자동화 도구 1개",
        },
      ],
      finalDeliverable: "나만의 업무용 GPT + 간단 자동화 1개",
      graduation: "졸업 요건 = 작동하는 산출물 1개",
    },
  },
  {
    id: "online",
    code: "B5",
    name: "온라인 / 자기주도",
    level: "입문",
    format: "온라인",
    headline: "시간·장소 제약 없이, 스스로 따라가며 결과물까지 완주합니다.",
    pain: "전 직원을 한자리에 모으기 어렵고, 자기주도는 완주율이 걱정이에요.",
    what: "주차별 영상 + 실습 + 수료 프로젝트",
    output: "개인 수료 프로젝트",
    audience: "전 직원 · 인원 제한 없음",
    duration: "4주 · 자기주도",
    differentiator: "자기주도에도 1:1 퍼실 옵션으로 완주율 방어",
    cta: "온라인 과정 문의",
    curriculum: ["주차별 영상 학습", "주차별 실습", "수료 프로젝트 제출"],
    syllabus: {
      objectives: [
        "시간·장소 제약 없이 핵심 AI 활용을 스스로 익힌다",
        "자기주도 트랙에서도 수료 프로젝트를 끝까지 완주한다",
      ],
      prereq: "없음 · 온라인 학습 환경",
      sessions: [
        {
          no: "1주차",
          time: "약 2시간",
          topic: "AI 기본기 (영상)",
          goal: "생성형 AI와 프롬프트 기본을 이해한다",
          activities: ["개념 영상 시청", "퀴즈로 이해 점검", "프롬프트 실습 제출"],
          output: "프롬프트 실습 통과",
        },
        {
          no: "2주차",
          time: "약 2시간",
          topic: "업무 적용 실습",
          goal: "업무 시나리오에 AI를 적용한다",
          activities: ["적용 영상 시청", "과제 제출", "오답 보완"],
          output: "업무 적용 과제 통과",
        },
        {
          no: "3주차",
          time: "약 2시간",
          topic: "바이브코딩 체험",
          goal: "간단 도구를 자연어로 만든다",
          activities: ["바이브코딩 영상", "가이드 따라 제작", "결과 업로드"],
          output: "간단 도구 결과물",
        },
        {
          no: "4주차",
          time: "약 2시간",
          topic: "수료 프로젝트",
          goal: "스스로 정한 과제로 결과물을 완성한다",
          activities: ["과제 선정", "제작·제출", "(옵션) 1:1 퍼실 점검"],
          output: "개인 수료 프로젝트",
          coachNote: "완주율 방어를 위한 1:1 퍼실리테이팅 결합 옵션",
        },
      ],
      finalDeliverable: "개인 수료 프로젝트 1건",
      graduation: "수료 요건 = 수료 프로젝트 제출",
    },
    pending: true,
  },
  {
    id: "onboarding",
    code: "A5",
    name: "신입/주니어 온보딩",
    level: "입문",
    format: "PBL·실습",
    headline: "입사 초기에 AI로 일하는 습관을 ‘도구 제작’으로 심습니다.",
    pain: "신입이 들어올 때마다 AI 활용 편차가 커요.",
    what: "회사 업무 맥락 + AI 도구 실습 + 온보딩 과제 PBL",
    output: "온보딩 업무 자동화 미니 도구",
    audience: "신입·주니어 · 10~20명",
    duration: "2주 · 4회",
    differentiator: "온보딩 첫 주에 ‘만드는 경험’으로 시작",
    cta: "온보딩 과정 문의",
    curriculum: ["회사 업무 맥락 이해", "AI 도구 실습", "온보딩 과제 PBL"],
    syllabus: {
      objectives: [
        "입사 초기에 AI로 일하는 기본기를 도구 제작으로 체득한다",
        "온보딩 반복 업무 1건을 스스로 자동화한다",
      ],
      prereq: "없음 · 신입·주니어",
      sessions: [
        {
          no: "1회차",
          time: "120분",
          topic: "회사에서 AI로 일한다는 것",
          goal: "우리 회사 업무 맥락에서 AI 활용 범위를 이해한다",
          activities: [
            "업무 맥락 브리핑",
            "사내 AI 사용 규칙",
            "도구 둘러보기",
          ],
          output: "내 업무 AI 적용 후보",
        },
        {
          no: "2회차",
          time: "120분",
          topic: "AI 도구 기본기",
          goal: "핵심 도구를 실무 수준으로 다룬다",
          activities: ["프롬프트 실습", "문서·데이터 처리", "정보 검증"],
          output: "업무 프롬프트 모음",
        },
        {
          no: "3회차",
          time: "150분",
          topic: "온보딩 과제 PBL",
          goal: "온보딩 반복 업무를 자동화 설계·제작한다",
          activities: ["과제 선정", "바이브코딩 제작", "코치 점검"],
          output: "자동화 도구 v1",
          coachNote: "1:1 제작 코칭으로 첫 완성을 끝까지 지원",
        },
        {
          no: "4회차",
          time: "120분",
          topic: "발표 & 적용",
          goal: "만든 도구를 실제 업무에 적용·공유한다",
          activities: ["현업 적용", "회고", "발표"],
          output: "온보딩 자동화 미니 도구",
        },
      ],
      finalDeliverable: "온보딩 업무 자동화 미니 도구 1건",
      graduation: "졸업 요건 = 작동하는 산출물 1개",
    },
    pending: true,
  },
  {
    id: "trend",
    code: "B4",
    name: "조코딩 AI 트렌드 세미나",
    level: "입문",
    format: "세미나",
    headline:
      "최신 AI 트렌드·사례를 2시간에 압축해 전사 눈높이를 한 번에 끌어올립니다.",
    pain: "AI는 매일 바뀌는데 따라가기 벅차고, 가볍게 시작하고 싶어요.",
    what: "검증된 콘텐츠 기반 트렌드·사례 특강",
    output: "우리 회사 적용 아이디어 리스트",
    audience: "전 직원·임원 · 단발",
    duration: "2~4시간",
    differentiator: "유튜브로 검증된 전달력 있는 콘텐츠",
    cta: "세미나/특강 문의",
    curriculum: ["최신 AI 트렌드", "산업별 적용 사례", "우리 회사 적용 토론"],
    syllabus: {
      objectives: [
        "최신 AI 흐름과 사례를 우리 회사 언어로 이해한다",
        "우리 조직에 바로 시도할 적용 아이디어를 도출한다",
      ],
      prereq: "없음 · 전 직원·임원",
      sessions: [
        {
          no: "Part 1",
          time: "60분",
          topic: "최신 AI 트렌드 브리핑",
          goal: "지금 알아야 할 흐름을 압축 이해한다",
          activities: ["핵심 트렌드", "도구 지형도", "흔한 오해 바로잡기"],
          output: "트렌드 요약 노트",
        },
        {
          no: "Part 2",
          time: "60분",
          topic: "산업·직무별 적용 사례",
          goal: "우리와 닮은 사례에서 힌트를 얻는다",
          activities: ["검증된 사례 분석", "성공·실패 요인", "적용 포인트 추출"],
          output: "벤치마크 사례 메모",
        },
        {
          no: "Part 3",
          time: "60분",
          topic: "우리 회사 적용 토론",
          goal: "바로 시도할 아이디어를 도출한다",
          activities: ["그룹 토론", "아이디어 우선순위", "다음 액션 정의"],
          output: "우리 회사 적용 아이디어 리스트",
        },
      ],
      finalDeliverable: "우리 회사 AI 적용 아이디어 리스트",
      graduation: "수료 요건 = 적용 아이디어 도출 (제작형 아님)",
    },
  },
  {
    id: "apply",
    code: "A2",
    name: "바이브코딩 실무 적용",
    level: "활용",
    format: "PBL·실습",
    headline:
      "마케터·기획자가 자기 반복 업무를 직접 자동화해 주당 시간을 되찾습니다.",
    pain: "교육은 받았는데 막상 실무에 못 써요.",
    what: "내 직무 업무 분해 → AI·노코드로 자동화 실습",
    output: "내 업무 자동화 워크플로 1건",
    audience: "실무자·신입 · 직무 혼합",
    duration: "8~16시간 · PBL 결합",
    differentiator: "남의 예제가 아니라 내 실제 업무를 그 자리에서 자동화",
    cta: "직무별 활용 과정 문의",
    curriculum: ["내 업무 분해·진단", "AI·노코드 자동화 설계", "현업 적용·공유"],
    syllabus: {
      objectives: [
        "내 반복 업무를 분해해 자동화 후보를 ROI 기준으로 선정한다",
        "바이브코딩·노코드로 실제 작동하는 자동화 워크플로를 직접 제작한다",
        "현업에 적용해 절감 시간을 수치로 증명한다",
      ],
      prereq: "AI 라이트업 수료 또는 프롬프트 기초 경험",
      sessions: [
        {
          no: "1회차",
          time: "2시간",
          topic: "업무 진단 & 자동화 기회 발굴",
          goal: "내 업무를 분해하고 자동화 후보 1건을 선정한다",
          activities: [
            "주간 업무 로그 작성·분류",
            "빈도×소요시간 매핑으로 병목 찾기",
            "ROI 기준 자동화 후보 선정",
          ],
          output: "자동화 대상 업무 정의서",
          coachNote: "코치가 후보 업무의 자동화 적합성을 1:1 검토",
        },
        {
          no: "2회차",
          time: "4시간",
          topic: "AI·노코드 워크플로 설계",
          goal: "선정 업무를 바이브코딩/노코드 구조로 설계한다",
          activities: [
            "처리 단계 분해·플로우 차트화",
            "프롬프트·도구 스택 선택(LLM + 자동화 툴)",
            "입력·출력·예외 흐름 정의",
          ],
          output: "자동화 워크플로 설계도",
        },
        {
          no: "3회차",
          time: "4시간",
          topic: "제작 & 1:1 코칭",
          goal: "작동하는 워크플로 v1을 완성한다",
          activities: [
            "바이브코딩으로 워크플로 구현",
            "테스트 데이터로 동작 검증",
            "코치 1:1 디버깅·개선",
          ],
          output: "작동하는 자동화 워크플로 v1",
          coachNote: "막히는 지점을 코치가 실시간 1:1로 함께 해결 — 이탈 방지",
        },
        {
          no: "4회차",
          time: "2시간",
          topic: "현업 적용 & 성과 측정",
          goal: "실제 업무에 배포하고 효과를 수치로 증명한다",
          activities: [
            "실 업무 데이터로 적용",
            "절감 시간·처리 건수 측정",
            "동료 공유·확산 발표",
          ],
          output: "적용 결과 + 절감 시간 리포트",
        },
      ],
      finalDeliverable: "내 업무 자동화 워크플로 1건 + 절감 시간 수치",
      graduation: "졸업 요건 = 작동하는 산출물 1개 (들은 교육이 아니라 만든 교육)",
    },
  },
  {
    id: "job-pbl",
    code: "B3",
    name: "직무 특화 PBL",
    level: "활용",
    format: "PBL·실습",
    headline:
      "마케팅·영업·기획 등 직무 실전 과제로, 우리 일에 딱 맞는 AI 활용을 체화합니다.",
    pain: "범용 교육은 우리 직무랑 안 맞아요.",
    what: "직군별 프로젝트 기반 멀티세션",
    output: "직무 과제 해결 산출물",
    audience: "직군별 팀",
    duration: "4~12주",
    differentiator: "산업이 아닌 직무 단위로 잘게 맞춤 → 적용률↑",
    cta: "직무 맞춤 설계 문의",
    curriculum: ["직무 과제 발굴", "프로젝트 멀티세션", "현업 적용 검증"],
    syllabus: {
      objectives: [
        "우리 직무의 실제 과제를 AI로 해결하는 방식을 체화한다",
        "직무 적용률이 높은 산출물 1건을 만든다",
      ],
      prereq: "없음 · 직군별 팀 단위",
      sessions: [
        {
          no: "1주차",
          time: "3시간",
          topic: "직무 과제 발굴",
          goal: "직무의 진짜 페인을 과제로 정의한다",
          activities: ["직무 업무 분석", "과제 후보 도출", "우선순위 선정"],
          output: "직무 과제 정의서",
        },
        {
          no: "2주차",
          time: "3시간",
          topic: "솔루션 설계",
          goal: "AI·노코드 해결안을 설계한다",
          activities: ["접근법 비교", "도구 선택", "데이터 준비"],
          output: "솔루션 설계도",
        },
        {
          no: "3주차",
          time: "3시간",
          topic: "제작 ①",
          goal: "핵심 기능을 구현한다",
          activities: ["바이브코딩 제작", "중간 점검", "개선"],
          output: "동작 빌드 v1",
          coachNote: "직무 맥락을 반영해 코치가 1:1로 방향 보정",
        },
        {
          no: "4주차",
          time: "3시간",
          topic: "제작 ② & 현업 검증",
          goal: "현업 데이터로 검증·보완한다",
          activities: ["실데이터 테스트", "피드백 반영", "완성도 점검"],
          output: "검증된 산출물",
        },
        {
          no: "5주차",
          time: "3시간",
          topic: "적용 & 성과 공유",
          goal: "현업에 적용하고 효과를 측정·공유한다",
          activities: ["현업 적용", "효과 측정", "팀 공유"],
          output: "직무 과제 해결 산출물 + 효과",
        },
      ],
      finalDeliverable: "직무 과제 해결 산출물 1건 + 적용 효과",
      graduation: "졸업 요건 = 현업 적용 산출물 1개",
    },
    jobTags: ["마케팅", "영업", "기획", "HR"],
  },
  {
    id: "hackathon",
    code: "B2",
    name: "바이브코딩 해커톤",
    level: "활용",
    format: "해커톤",
    headline:
      "사내 실제 과제를 1~2일 만에 ‘작동하는 결과물’로 만들어 AI를 체감시킵니다.",
    pain: "단발 교육으론 동기부여도, 체감도 안 돼요.",
    what: "팀 단위 사내 과제 → 바이브코딩 프로토타입 제작 → 발표",
    output: "작동하는 프로토타입 + 발표 자료",
    audience: "전 직원(팀빌딩 겸)",
    duration: "1~2일 집중",
    differentiator: "비개발자도 작동하는 것을 만드는 해커톤",
    cta: "해커톤 기획 문의",
    curriculum: ["문제 정의·팀 빌딩", "집중 제작", "데모데이·발표"],
    syllabus: {
      objectives: [
        "사내 실제 과제를 짧은 시간에 작동하는 프로토타입으로 만든다",
        "팀 협업으로 AI 제작을 체감하고 동기를 끌어올린다",
      ],
      prereq: "바이브코딩 기초(A1/A2) 권장",
      sessions: [
        {
          no: "1단계",
          time: "Day1 오전 · 3시간",
          topic: "킥오프 & 과제 정의",
          goal: "사내 과제를 팀별로 정의한다",
          activities: ["과제 발제", "팀 빌딩", "범위 스코핑"],
          output: "팀별 과제 정의서",
          coachNote: "범위를 현실적으로 좁히도록 멘토가 1:1 코칭",
        },
        {
          no: "2단계",
          time: "Day1 오후 · 4시간",
          topic: "집중 제작 ①",
          goal: "핵심 기능 프로토타입을 만든다",
          activities: ["바이브코딩 제작", "멘토 순회", "중간 점검"],
          output: "동작하는 핵심 기능",
          coachNote: "멘토 순회 1:1로 막힘 즉시 해결",
        },
        {
          no: "3단계",
          time: "Day2 오전 · 4시간",
          topic: "집중 제작 ② & 다듬기",
          goal: "데모 가능한 수준으로 완성한다",
          activities: ["기능 보완", "데모 시나리오", "리허설"],
          output: "데모용 프로토타입",
        },
        {
          no: "4단계",
          time: "Day2 오후 · 3시간",
          topic: "데모데이 & 심사",
          goal: "발표·심사·회고로 마무리한다",
          activities: ["팀 발표", "심사·피드백", "베스트 선정"],
          output: "프로토타입 + 발표 자료",
        },
      ],
      finalDeliverable: "작동하는 팀 프로토타입 + 발표 자료",
      graduation: "졸업 요건 = 데모 가능한 프로토타입 1개",
    },
  },
  {
    id: "builder",
    code: "A3",
    name: "바이브코딩 빌더",
    level: "빌더",
    format: "PBL·실습",
    headline:
      "비개발자가 사내에서 진짜 쓰는 미니 서비스를 직접 만들어 배포합니다.",
    pain: "외주 없이 우리 팀 도구를 빠르게 만들고 싶어요.",
    what: "기획 → 바이브코딩 → 배포까지 풀사이클",
    output: "작동하는 사내 미니 웹서비스/툴",
    audience: "활용 수료자·사내 빌더 후보",
    duration: "4~12주 · 프로젝트형",
    differentiator: "비개발자를 ‘사내 빌더’로 전환 (경쟁사 빈틈)",
    cta: "핵심 인재 양성 문의",
    curriculum: ["서비스 기획", "바이브코딩 제작", "배포·운영"],
    syllabus: {
      objectives: [
        "기획부터 배포까지 풀사이클로 사내 미니 서비스를 만든다",
        "비개발자가 외주 없이 팀 도구를 운영·개선한다",
      ],
      prereq: "바이브코딩 실무 적용(A2) 수료 또는 동등 제작 경험",
      sessions: [
        {
          no: "1주차",
          time: "3시간",
          topic: "서비스 기획 & 범위 정의",
          goal: "만들 도구의 문제·사용자·범위를 확정한다",
          activities: ["문제 정의", "사용자 시나리오", "범위·성공 기준"],
          output: "서비스 기획서",
          coachNote: "범위 과대를 막는 1:1 스코핑",
        },
        {
          no: "2주차",
          time: "3시간",
          topic: "데이터·화면 설계",
          goal: "데이터 구조와 화면 흐름을 설계한다",
          activities: ["데이터 모델", "화면 플로우", "UI 와이어"],
          output: "설계 문서",
        },
        {
          no: "3주차",
          time: "3시간",
          topic: "바이브코딩 제작 ①",
          goal: "핵심 기능을 구현한다",
          activities: ["자연어로 기능 생성", "데이터 연동", "반복 개선"],
          output: "핵심 기능 동작 빌드",
          coachNote: "막힌 버그를 코치와 1:1 페어로 해결",
        },
        {
          no: "4주차",
          time: "3시간",
          topic: "제작 ② & 테스트",
          goal: "완성도를 높이고 검증한다",
          activities: ["부가 기능", "사용자 테스트", "버그 수정"],
          output: "테스트 통과 빌드",
        },
        {
          no: "5주차",
          time: "3시간",
          topic: "배포 & 운영 인수인계",
          goal: "사내 배포·운영 체계를 마련한다",
          activities: ["배포", "권한·운영 가이드", "팀 공유"],
          output: "배포된 사내 미니 서비스",
        },
      ],
      finalDeliverable: "작동하는 사내 미니 웹서비스/툴 (배포 완료)",
      graduation: "졸업 요건 = 배포된 작동 산출물 1개",
    },
  },
  {
    id: "leadership",
    code: "A4",
    name: "AI 리더십·전략",
    level: "리더",
    format: "세미나",
    headline: "리더가 직접 AX 전환 로드맵을 그리고, 조직 변화를 설계합니다.",
    pain: "경영진은 AI 도입을 압박하는데, 무엇부터 어떻게 굴릴지 막막해요.",
    what: "AX 전환 프레임 + 조직 변화 관리 + 부서 로드맵 워크숍",
    output: "부서 AX 전환 로드맵",
    audience: "팀장·임원 · 10~30명",
    duration: "1일 워크숍",
    differentiator: "현장 빌더 교육과 한 몸으로 굴러가는 리더 전략",
    cta: "리더십 과정 문의",
    curriculum: ["AX 전환 프레임", "조직 변화 관리", "로드맵 수립"],
    syllabus: {
      objectives: [
        "AX 전환을 조직 언어로 설계하고 우선순위를 정한다",
        "현장 빌더 교육과 연결된 부서 로드맵을 직접 그린다",
      ],
      prereq: "없음 · 팀장·임원 대상",
      sessions: [
        {
          no: "Part 1",
          time: "90분",
          topic: "AX 전환 프레임",
          goal: "우리 조직의 AI 성숙도와 기회를 진단한다",
          activities: ["성숙도 진단", "기회 영역 매핑", "벤치마크"],
          output: "조직 AI 진단 결과",
        },
        {
          no: "Part 2",
          time: "120분",
          topic: "전환 전략 수립",
          goal: "우선순위와 변화 관리 방향을 결정한다",
          activities: [
            "우선순위 매트릭스",
            "변화 저항 관리",
            "KPI(절감시간·자동화건수) 설계",
          ],
          output: "전환 우선순위·KPI 안",
        },
        {
          no: "Part 3",
          time: "90분",
          topic: "부서 로드맵 작성",
          goal: "분기별 실행 로드맵을 완성한다",
          activities: [
            "모듈 조합 설계(어느 팀에 무엇을)",
            "분기 목표",
            "리스크 점검",
          ],
          output: "부서 AX 전환 로드맵",
          coachNote: "현장 교육 모듈과 연결되게 1:1 자문",
        },
      ],
      finalDeliverable: "부서 AX 전환 로드맵 (분기별 + KPI)",
      graduation: "졸업 요건 = 실행 가능한 로드맵 1부",
    },
    pending: true,
  },
  {
    id: "governance",
    code: "C1",
    name: "AI 도입 거버넌스",
    level: "리더",
    format: "PBL·실습",
    headline:
      "트렌드만 듣는 특강이 아니라, 어떤 유료 AI 툴을 어떤 기준으로 도입·통제할지 직접 정해 정책 v0를 들고 나갑니다.",
    pain: "직원들이 유료 AI 툴을 제각각 쓰는데, 무엇을 도입하고 어디까지 허용·통제할지 기준이 없어요.",
    what: "타사 사례·트렌드 인풋 → 영역별 거버넌스 초안 실습 → 라이브 합의로 정책 v0 확정",
    output: "유료 AI 툴 도입·운영 거버넌스 정책 v0 1부 (스폰서 결재)",
    audience: "크로스펑셔널 거버넌스 그룹(임원 스폰서 + IT/보안 + 법무/HR)",
    duration: "사전 실습 + 라이브 반일~1일 · 플립",
    differentiator: "거버넌스 ↔ 실행 모듈 원스톱 연결 — 정책으로 끝나는 컨설팅 아님",
    cta: "AI 도입 거버넌스 수립 문의",
    curriculum: [
      "타사 거버넌스 사례·AI 트렌드 인풋",
      "영역별 초안 실습(툴 선정·보안·승인·사용정책)",
      "라이브 합의·v0 확정·실행 게이트 연결",
    ],
    syllabus: {
      objectives: [
        "타사 사례로 거버넌스 눈높이를 정렬한다",
        "유료툴 선정·보안·승인·사용정책 기준을 합의한다",
        "결재 가능한 거버넌스 정책 v0를 산출한다",
      ],
      prereq:
        "임원 스폰서 + IT/보안 + 법무/HR 담당 · 사전 비동기 자료 선학습 + 자기 영역 초안 실습",
      sessions: [
        {
          no: "사전(비동기)",
          time: "선학습",
          topic: "타사 거버넌스 사례·AI 트렌드 인풋",
          goal: "거버넌스 기준을 잡을 재료로 사례·트렌드를 이해한다",
          activities: [
            "타사 유료툴 도입 거버넌스 사례",
            "AI 트렌드 브리핑",
            "영역별 템플릿 안내",
          ],
          output: "거버넌스 기준 재료 정리",
        },
        {
          no: "사전(비동기)",
          time: "초안 실습",
          topic: "영역별 거버넌스 초안 실습",
          goal: "자기 영역의 거버넌스 초안을 템플릿 빈칸으로 작성한다",
          activities: [
            "툴 선정·평가 루브릭 초안",
            "데이터 반입·보안 검토 게이트 초안",
            "예산·승인·구매 플로우 + 전사 사용정책 초안",
          ],
          output: "영역별 거버넌스 초안",
          coachNote: "템플릿 빈칸 강제 산출로 빈손 방지",
        },
        {
          no: "라이브",
          time: "반일~1일",
          topic: "리뷰 · 충돌 조정 · 합의",
          goal: "영역 간 충돌을 조정하고 우선순위를 합의한다",
          activities: [
            "영역별 초안 리뷰",
            "영역 간 정합·충돌 조정",
            "우선순위 합의",
          ],
          output: "합의된 거버넌스 골격",
        },
        {
          no: "라이브",
          time: "마무리",
          topic: "정책 v0 확정 & 스폰서 결재",
          goal: "정책 v0를 확정·결재하고 실행 게이트로 연결한다",
          activities: [
            "정책 v0 확정",
            "스폰서 서명·결재",
            "후속 실행 게이트(A2/A3) 연결 안내",
          ],
          output: "거버넌스 정책 v0 + 스폰서 결재",
          coachNote: "후속 실행 게이트로 방치 차단",
        },
      ],
      finalDeliverable:
        "유료 AI 툴 도입·운영 거버넌스 정책 v0 1부 (툴 선정 루브릭 + 데이터/보안 게이트 + 승인·구매 플로우 + 전사 사용정책, 결재 완료)",
      graduation: "산출 요건 = 스폰서 결재 완료된 거버넌스 정책 v0 1부",
    },
    jobTags: ["임원", "IT/보안", "법무/HR"],
  },
];

// B1 · 1:1 퍼실리테이팅 ★시그니처 — 독립 모듈이 아니라 모든 모듈에 얹히는 운영 방식
// (=밀착 관리). 매트릭스에선 전 수준을 가로지르는 밴드로 표시. 증명은 §6에서.
export const FACILITATION: Module = {
  id: "facilitation",
  code: "B1",
  name: "1:1 퍼실리테이팅",
  level: "입문",
  format: "세미나",
  headline: "강의를 ‘들은’ 사람이 아니라 ‘결과물을 낸’ 사람으로 졸업시킵니다.",
  pain: "교육은 늘 일부만 따라오고 나머진 이탈해요.",
  what: "개인별 진도·과제를 전담 코치가 1:1로 케어 (모든 트랙에 부가)",
  output: "수강생 전원 결과물 완성 지향",
  audience: "모든 과정에 결합 옵션",
  duration: "선택 트랙에 부가",
  differentiator: "jocoding 단독 시그니처 — 강사 1:다수 모델과 근본적으로 다름",
  cta: "1:1 운영 방식 문의",
  curriculum: ["개인별 진단·목표 합의", "회차별 1:1 코칭", "결과물 완성 케어"],
  syllabus: {
    objectives: [
      "선택한 트랙 전 구간에 전담 코치를 붙여 전원 완주를 지향한다",
      "진도 이탈을 조기에 감지하고 개인별로 케어한다",
    ],
    prereq: "어떤 교육 트랙에도 결합 가능",
    sessions: [
      {
        no: "Phase 1",
        time: "교육 전",
        topic: "코치 배정 & 목표 합의",
        goal: "개인별 목표·산출물을 정의한다",
        activities: ["사전 진단", "코치 매칭", "목표 합의"],
        output: "개인별 학습 계획",
        coachNote: "수강생별 전담 코치 배정",
      },
      {
        no: "Phase 2",
        time: "교육 중 · 매 회차",
        topic: "회차별 1:1 코칭",
        goal: "회차마다 개인 진도·과제를 케어한다",
        activities: ["1:1 피드백", "과제 점검", "막힘 해결"],
        output: "회차별 진도 기록",
        coachNote: "회차마다 1:1로 개입",
      },
      {
        no: "Phase 3",
        time: "중반",
        topic: "중간 점검 & 이탈 케어",
        goal: "처지는 인원을 조기에 발견·복구한다",
        activities: ["진도 모니터링", "리스크 알림", "보충 케어"],
        output: "이탈 방지 조치",
        coachNote: "위험군을 선제적으로 케어",
      },
      {
        no: "Phase 4",
        time: "종료",
        topic: "결과물 완성 케어",
        goal: "전원 산출물 완성으로 마무리한다",
        activities: ["산출물 마감 코칭", "완주율 집계", "성과 정리"],
        output: "수강생 결과물 + 완주 리포트",
      },
    ],
    finalDeliverable: "수강생 전원 결과물 완성 + 완주 리포트",
    graduation: "운영 지표 = 완주율·결과물 완성률",
  },
};

export const CATALOG_HEADLINE = "듣고 끝나는 교육 말고, 만들어서 남기는 교육.";
