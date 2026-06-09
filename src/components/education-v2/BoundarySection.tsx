import { GitCompareArrows } from "lucide-react";
import { BOUNDARIES } from "./data";

export default function BoundarySection() {
  return (
    <section
      data-gnb-theme="dark"
      className="relative w-full px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Clear Boundaries
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            비슷해 보이는 모듈, 한 줄로 가릅니다
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            10개라 풍부하지만 헷갈리지 않게 — 닮은 4쌍의{" "}
            <span className="text-white">단독 존재 이유</span>를 못박았습니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {BOUNDARIES.map((b) => (
            <div
              key={b.pair}
              className="grid grid-cols-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-[110px_1fr_auto_1fr]"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-ax-purple/15 px-3 py-1.5 text-[14px] font-bold text-ax-purple-light">
                <GitCompareArrows className="h-4 w-4" />
                {b.pair}
              </span>
              <p className="text-[14px] leading-[1.55] text-ax-text-80">
                {b.left}
              </p>
              <span className="hidden text-ax-text-dim md:block">vs</span>
              <p className="text-[14px] leading-[1.55] text-ax-text-80">
                {b.right}
              </p>
              <p className="md:col-span-4 md:mt-1 md:border-t md:border-white/5 md:pt-3">
                <span className="text-[13px] text-ax-amber">
                  → {b.oneLine}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
