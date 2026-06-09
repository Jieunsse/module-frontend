import { TRACK_A, TRACK_B, toneOf, type ModuleV3 } from "./data";

function Row({ m, onSelect }: { m: ModuleV3; onSelect: (m: ModuleV3) => void }) {
  const tone = toneOf(m);
  return (
    <button
      type="button"
      onClick={() => onSelect(m)}
      className="glass-panel grid grid-cols-[44px_1fr] items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:border-ax-purple-light/60 md:grid-cols-[52px_minmax(0,140px)_1fr_minmax(0,120px)]"
    >
      <span className={`text-[15px] font-bold ${tone.text}`}>{m.code}</span>
      <span className="text-[14px] font-semibold text-white">{m.name}</span>
      <span className="hidden text-[13px] leading-snug text-ax-text-muted md:block">
        {m.position}
      </span>
      <span
        className={`hidden w-fit justify-self-end rounded-full px-2.5 py-1 text-[11px] font-medium md:inline-flex ${tone.chip}`}
      >
        {tone.label}
      </span>
      {/* 모바일: 포지션 한 줄 */}
      <span className="col-span-2 -mt-1 text-[12px] leading-snug text-ax-text-muted md:hidden">
        {m.position}
      </span>
    </button>
  );
}

export default function PortfolioSection({
  onSelect,
}: {
  onSelect: (m: ModuleV3) => void;
}) {
  return (
    <section
      id="portfolio"
      data-gnb-theme="dark"
      className="relative w-full scroll-mt-24 px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Portfolio at a Glance
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            10개 모듈 = 사업 역할 한눈에
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            커리큘럼 나열이 아니라{" "}
            <span className="text-white">예산을 어디서 뚫고 어디서 마진을 내나</span>
            로 묶습니다. 트랙 A는 정규 라인업, 트랙 B는 오버레이·이벤트·입구입니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            { key: "A", title: "트랙 A — 정규 라인업", mods: TRACK_A },
            { key: "B", title: "트랙 B — 오버레이·이벤트·입구", mods: TRACK_B },
          ].map((col) => (
            <div key={col.key}>
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-ax-purple/10 px-3 py-1.5 text-[14px] font-semibold text-ax-purple-light">
                  {col.title}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                {col.mods.map((m) => (
                  <Row key={m.code} m={m} onSelect={onSelect} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
