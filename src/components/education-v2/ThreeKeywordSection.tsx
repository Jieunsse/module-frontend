import { HelpCircle, Package, Settings2 } from "lucide-react";
import { LADDER } from "./data";

const KEYWORDS = [
  {
    Icon: HelpCircle,
    q: "누구에게",
    a: "전사 / 팀 / 임원",
    note: "누구를 교육하나 (예산 주체)",
  },
  {
    Icon: Package,
    q: "무엇을",
    a: "결과물 + 그 난이도",
    note: "무엇이 남나 (자사 데이터 사내 업무툴)",
  },
  {
    Icon: Settings2,
    q: "어떻게",
    a: "1:1 / 해커톤 / PBL / 세미나 / 온라인",
    note: "어떤 운영형식으로 (5값 고정)",
  },
];

export default function ThreeKeywordSection() {
  return (
    <section
      data-gnb-theme="dark"
      className="relative w-full px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            3 Keywords
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            담당자가 던지는 3가지 질문으로 분류합니다
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            <span className="text-white">누구에게</span> ·{" "}
            <span className="text-white">무엇을</span> ·{" "}
            <span className="text-white">어떻게</span> — 이 세 질문이 모든 모듈의
            좌표입니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {KEYWORDS.map(({ Icon, q, a, note }) => (
            <div key={q} className="glass-panel rounded-[20px] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ax-purple/15 text-ax-purple-light">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-wider text-ax-text-dim">
                {q}
              </p>
              <p className="mt-1.5 text-[18px] font-bold text-white">{a}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-ax-text-muted">
                {note}
              </p>
            </div>
          ))}
        </div>

        {/* 난이도 = ‘무엇을’의 깊이 (사다리) */}
        <div className="mt-12 rounded-[20px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-center text-[14px] text-ax-text-muted">
            역량 수준은 별도 축이 아니라{" "}
            <span className="text-white">‘무엇을(결과물)’의 깊이</span>입니다 —
            어떤 결과물까지 원하냐가 곧 직원 수준 어디냐.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-4">
            {LADDER.map((step, i) => (
              <div key={step.level} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-ax-purple/20 bg-ax-purple/[0.05] p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ax-purple/20 text-[12px] font-bold text-ax-purple-light">
                      {i + 1}
                    </span>
                    <span className="text-[16px] font-bold text-white">
                      {step.level}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] font-semibold text-ax-amber">
                    AI {step.verb}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.55] text-ax-text-80">
                    {step.evidence}
                  </p>
                  <p className="mt-3 text-[11px] text-ax-text-dim">
                    {step.codes.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[13px] text-ax-text-dim">
            도우미 → 자동화 → 프로덕트 → 로드맵. 사다리라 진행 동선이 공짜로
            나옵니다.
          </p>
        </div>
      </div>
    </section>
  );
}
