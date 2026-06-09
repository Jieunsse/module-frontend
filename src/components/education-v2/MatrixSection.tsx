import { useState } from "react";
import { Package } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import {
  LEVELS,
  FORMATS,
  MODULES,
  FACILITATION,
  type Level,
  type Module,
  type ModuleV2,
} from "./data";

function moduleAt(level: Level, format: string): ModuleV2[] {
  return MODULES.filter((m) => m.level === level && m.format === format);
}

function ModuleChip({ m, onClick }: { m: ModuleV2; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="glass-panel w-full rounded-xl px-3 py-2.5 text-left transition hover:border-ax-purple-light/60"
    >
      <span className="block text-[13px] font-semibold leading-tight text-white">
        <span className="text-ax-purple-light">{m.code}</span> {m.name}
      </span>
      <span className="mt-1 line-clamp-2 block text-[11px] leading-snug text-ax-text-muted">
        {m.headline}
      </span>
      <span className="mt-1.5 block text-[11px] text-ax-text-dim">
        {m.duration}
      </span>
    </button>
  );
}

export default function MatrixSection({
  onSelect,
}: {
  onSelect: (m: Module) => void;
}) {
  const bp = useBreakpoint();
  const [activeLevel, setActiveLevel] = useState<Level>("입문");
  const isDesktop = bp === "desktop";

  return (
    <section
      id="matrix"
      data-gnb-theme="dark"
      className="relative w-full scroll-mt-24 px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Curriculum Matrix
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            난이도 × 운영형식으로 한눈에
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            세로축 = <span className="text-white">무엇을(난이도)</span>, 가로축 ={" "}
            <span className="text-white">어떻게(운영형식)</span>. 칸을 누르면
            고민·결과물·커리큘럼까지 열립니다.
          </p>
        </div>

        {isDesktop ? (
          <div className="mt-14">
            <div className="grid grid-cols-[110px_repeat(5,1fr)] gap-3">
              <div />
              {FORMATS.map((fmt) => (
                <div
                  key={fmt}
                  className="rounded-lg bg-white/5 py-2 text-center text-[13px] font-medium text-ax-text-muted"
                >
                  {fmt}
                </div>
              ))}
              <div className="rounded-lg bg-ax-amber/10 py-2 text-center text-[13px] font-medium text-ax-amber">
                1:1 코칭
              </div>
            </div>

            {LEVELS.map((lv) => (
              <div
                key={lv}
                className="mt-3 grid grid-cols-[110px_repeat(5,1fr)] gap-3"
              >
                <div className="flex items-center justify-end pr-3 text-[14px] font-semibold text-ax-purple-light">
                  {lv}
                </div>
                {FORMATS.map((fmt) => {
                  const mods = moduleAt(lv, fmt);
                  return (
                    <div
                      key={fmt}
                      className="flex min-h-[72px] flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2"
                    >
                      {mods.map((m) => (
                        <ModuleChip key={m.id} m={m} onClick={() => onSelect(m)} />
                      ))}
                    </div>
                  );
                })}
                {/* 1:1 코칭 열 — 밴드 셀(전 행 가로지름 표현) */}
                <div className="flex min-h-[72px] items-center justify-center rounded-xl border border-ax-amber/15 bg-ax-amber/[0.04]">
                  {lv === "입문" && (
                    <button
                      type="button"
                      onClick={() => onSelect(FACILITATION)}
                      className="px-2 text-center"
                    >
                      <span className="text-[12px] font-semibold text-ax-amber">
                        B1 ★
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => onSelect(FACILITATION)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-ax-amber/30 bg-ax-amber/[0.06] px-5 py-3 text-center transition hover:border-ax-amber/60"
            >
              <span className="text-[14px] font-semibold text-white">
                {FACILITATION.code} · {FACILITATION.name}{" "}
                <span className="text-ax-amber">★ 시그니처</span>
              </span>
              <span className="text-[12px] text-ax-text-muted">
                — 모든 칸 위에 얹히는 오버레이
              </span>
            </button>
          </div>
        ) : (
          <div className="mt-12">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  onClick={() => setActiveLevel(lv)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition ${
                    activeLevel === lv
                      ? "bg-ax-purple text-white"
                      : "border border-white/15 text-ax-text-muted"
                  }`}
                >
                  {lv}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {MODULES.filter((m) => m.level === activeLevel).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onSelect(m)}
                  className="glass-panel rounded-xl p-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-semibold text-white">
                      <span className="text-ax-purple-light">{m.code}</span>{" "}
                      {m.name}
                    </span>
                    <span className="text-[12px] text-ax-purple-light">
                      {m.format}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-ax-amber">
                    {m.headline}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[12px] text-ax-text-dim">
                    <Package className="h-3.5 w-3.5" />
                    {m.output}
                  </p>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onSelect(FACILITATION)}
              className="mt-5 w-full rounded-xl border border-ax-amber/30 bg-ax-amber/[0.06] px-4 py-4 text-center"
            >
              <span className="text-[15px] font-semibold text-white">
                {FACILITATION.name} <span className="text-ax-amber">★ 시그니처</span>
              </span>
              <p className="mt-1 text-[13px] text-ax-text-muted">
                {FACILITATION.headline}
              </p>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
