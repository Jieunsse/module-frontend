import ModuleDetailBody from "./ModuleDetailBody";
import { TRACK_A, TRACK_B } from "./data";

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
            대상 · 규모 · 진행 흐름 · 학습 목표 · 남는 것 · KPI까지 끝까지
            투명하게.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-14">
          {[
            { key: "A", title: "트랙 A — 정규 라인업", mods: TRACK_A },
            { key: "B", title: "트랙 B — 오버레이·이벤트·입구", mods: TRACK_B },
          ].map((col) => (
            <div key={col.key}>
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-ax-purple/10 px-3 py-1.5 text-[15px] font-semibold text-ax-purple-light">
                  {col.title}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {col.mods.map((m) => (
                  <div
                    key={m.code}
                    className={`glass-panel self-start rounded-[20px] p-6 md:p-7 ${
                      m.signature ? "border-ax-amber/30" : ""
                    }`}
                  >
                    <ModuleDetailBody m={m} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
