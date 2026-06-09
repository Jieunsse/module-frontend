import { useState } from "react";
import { X, Package } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import ModuleDetailBody from "./ModuleDetailBody";
import {
  LEVELS,
  FORMATS,
  MODULES,
  FACILITATION,
  CATALOG_HEADLINE,
  type Level,
  type Module,
} from "./data";

function moduleAt(level: Level, format: string): Module[] {
  return MODULES.filter((m) => m.level === level && m.format === format);
}

function ModuleChip({ m, onClick }: { m: Module; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="glass-panel w-full rounded-xl px-3 py-2.5 text-left transition hover:border-ax-purple-light/60"
    >
      <span className="block text-[13px] font-semibold leading-tight text-white">
        {m.name}
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

function DetailModal({ m, onClose }: { m: Module; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-panel relative max-h-[88vh] w-full max-w-[800px] rounded-[20px] p-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 text-ax-text-dim transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <ModuleDetailBody m={m} />
      </div>
    </div>
  );
}

export default function EducationMatrixSection() {
  const bp = useBreakpoint();
  const [selected, setSelected] = useState<Module | null>(null);
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
            {CATALOG_HEADLINE}
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            <span className="text-white">대상(역량 수준)</span> ×{" "}
            <span className="text-white">운영형식</span>으로 한눈에. 칸을 누르면
            고민·결과물·커리큘럼까지 열립니다.
          </p>
        </div>

        {isDesktop ? (
          <div className="mt-14">
            {/* 헤더: 대상(역량 수준) */}
            <div className="grid grid-cols-[120px_repeat(4,1fr)] gap-3">
              <div />
              {LEVELS.map((lv) => (
                <div
                  key={lv}
                  className="rounded-lg bg-ax-purple/10 py-2 text-center text-[14px] font-semibold text-ax-purple-light"
                >
                  {lv}
                </div>
              ))}
            </div>

            {/* 행: 운영형식 */}
            {FORMATS.map((fmt) => (
              <div
                key={fmt}
                className="mt-3 grid grid-cols-[120px_repeat(4,1fr)] gap-3"
              >
                <div className="flex items-center justify-end pr-3 text-[14px] font-medium text-ax-text-muted">
                  {fmt}
                </div>
                {LEVELS.map((lv) => {
                  const mods = moduleAt(lv, fmt);
                  return (
                    <div
                      key={lv}
                      className="flex min-h-[72px] flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2"
                    >
                      {mods.map((m) => (
                        <ModuleChip
                          key={m.id}
                          m={m}
                          onClick={() => setSelected(m)}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* 밴드: 1:1 퍼실리테이팅 — 전 수준 가로지름 */}
            <button
              type="button"
              onClick={() => setSelected(FACILITATION)}
              className="mt-3 grid w-full grid-cols-[120px_1fr] gap-3 text-left"
            >
              <div className="flex items-center justify-end pr-3 text-[14px] font-medium text-ax-amber">
                1:1 코칭
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-ax-amber/30 bg-ax-amber/[0.06] px-5 py-4 text-center transition hover:border-ax-amber/60">
                <span className="text-[15px] font-semibold text-white">
                  {FACILITATION.code} · {FACILITATION.name}{" "}
                  <span className="text-ax-amber">★ 시그니처</span>
                </span>
                <span className="mt-1 text-[13px] text-ax-text-muted">
                  {FACILITATION.headline}
                </span>
              </div>
            </button>
          </div>
        ) : (
          /* 모바일/태블릿 폴백: 대상 탭 + 세로 카드 */
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
                  onClick={() => setSelected(m)}
                  className="glass-panel rounded-xl p-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-semibold text-white">
                      {m.name}
                    </span>
                    <span className="text-[12px] text-ax-purple-light">
                      {m.format}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-ax-amber">
                    {m.headline}
                  </p>
                  <p className="mt-2 text-[13px] text-ax-text-muted">
                    “{m.pain}”
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[12px] text-ax-text-dim">
                    <Package className="h-3.5 w-3.5" />
                    {m.output} · {m.duration}
                  </p>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelected(FACILITATION)}
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

      {selected && (
        <DetailModal m={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
