import { ArrowRight, Layers, ArrowDownToLine } from "lucide-react";
import { UPSELL_STEPS, UPSELL_OVERLAY } from "./data";

export default function UpsellSection() {
  return (
    <section
      data-gnb-theme="dark"
      className="relative w-full px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Upsell Motion
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            깔고 → 키우고 → 확산하는 동선
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            한 번의 발주로 끝나지 않게, 모듈은 다음 모듈로 이어집니다.
          </p>
        </div>

        {/* 메인 동선 */}
        <div className="mt-14 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {UPSELL_STEPS.map((s, i) => (
            <div key={s.codes} className="flex items-center gap-3 md:flex-1">
              <div className="flex w-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-ax-text-dim">
                  {s.tag}
                </span>
                <span className="mt-1.5 text-[20px] font-bold text-white">
                  {s.codes}
                </span>
                <span className="mt-2 text-[13px] leading-[1.55] text-ax-text-muted">
                  {s.desc}
                </span>
              </div>
              {i < UPSELL_STEPS.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-ax-purple-light md:block" />
              )}
            </div>
          ))}
        </div>

        {/* 위/아래 침투 */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-ax-amber/30 bg-ax-amber/[0.06] px-5 py-4">
            <ArrowDownToLine className="mt-0.5 h-5 w-5 shrink-0 text-ax-amber" />
            <p className="text-[13px] leading-[1.6] text-ax-text-80">
              <span className="font-semibold text-ax-amber">A3 · A4</span>는 위에서
              뚫습니다 — 빌더 양성과 임원 로드맵으로 top-down 결재를 엽니다.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <Layers className="mt-0.5 h-5 w-5 shrink-0 text-ax-purple-light" />
            <p className="text-[13px] leading-[1.6] text-ax-text-80">
              <span className="font-semibold text-ax-purple-light">B1</span>은 모든
              트랙에 얹히는 오버레이 — 고-floor 트랙(A2·B3·A3)에 두껍게 붙어 완주를
              설계합니다.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[13px] text-ax-text-dim">
          {UPSELL_OVERLAY}
        </p>
      </div>
    </section>
  );
}
