import ModuleDetailBody from "@/components/education/ModuleDetailBody";
import { LEVELS, MODULES, FACILITATION } from "./data";

export default function AllModulesSection() {
  return (
    <section
      id="all-modules"
      data-gnb-theme="dark"
      className="relative w-full scroll-mt-24 px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Full Catalog
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            모든 모듈, 펼쳐서 한 번에 보기
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            클릭 없이 <span className="text-white">난이도별</span>로 전체
            커리큘럼·결과물을 끝까지 살펴보세요.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-14">
          {LEVELS.map((lv) => {
            const mods = MODULES.filter((m) => m.level === lv);
            if (mods.length === 0) return null;
            return (
              <div key={lv}>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-ax-purple/10 px-3 py-1.5 text-[15px] font-semibold text-ax-purple-light">
                    {lv}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {mods.map((m) => (
                    <div
                      key={m.id}
                      className="glass-panel self-start rounded-[20px] p-6 md:p-7"
                    >
                      <ModuleDetailBody m={m} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-ax-amber/10 px-3 py-1.5 text-[15px] font-semibold text-ax-amber">
                ★ 시그니처
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="mt-5 glass-panel rounded-[20px] border-ax-amber/30 p-6 md:p-7">
              <ModuleDetailBody m={FACILITATION} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
