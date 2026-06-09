import { Building2, Users, Crown, ArrowRight, UserCheck } from "lucide-react";
import { GROUPS, UPSELL, moduleByCode, type Group, type ModuleV2 } from "./data";

const GROUP_META: Record<
  Group,
  { Icon: typeof Building2; tone: string; ring: string; sub: string }
> = {
  전사: {
    Icon: Building2,
    tone: "text-sky-300",
    ring: "border-sky-400/30 bg-sky-400/[0.05]",
    sub: "넓게 깔기",
  },
  팀: {
    Icon: Users,
    tone: "text-ax-purple-light",
    ring: "border-ax-purple/40 bg-ax-purple/[0.07]",
    sub: "직무에 박기",
  },
  임원: {
    Icon: Crown,
    tone: "text-ax-amber",
    ring: "border-ax-amber/35 bg-ax-amber/[0.06]",
    sub: "위에서 뚫기",
  },
};

export default function PurchaseGroupSection({
  onSelect,
}: {
  onSelect: (m: ModuleV2) => void;
}) {
  return (
    <section
      id="groups"
      data-gnb-theme="dark"
      className="relative w-full scroll-mt-24 px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Buying Groups
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            누구를 교육하나요?
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            모듈 10개를 나열하지 않습니다.{" "}
            <span className="text-white">예산을 쥔 사람</span> 기준으로{" "}
            <span className="text-white">전사 · 팀 · 임원</span> 세 그룹으로 묶어,
            우리 회사의 시작점을 바로 찾게 합니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GROUPS.map((g) => {
            const meta = GROUP_META[g.key];
            const { Icon } = meta;
            const mods = g.codes
              .map(moduleByCode)
              .filter((m): m is ModuleV2 => !!m);
            return (
              <div
                key={g.key}
                className={`flex flex-col rounded-[20px] border p-6 ${meta.ring}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${meta.tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className={`text-[18px] font-bold ${meta.tone}`}>
                      {g.key}
                    </p>
                    <p className="text-[12px] text-ax-text-dim">{meta.sub}</p>
                  </div>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
                  <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                    <dt className="text-ax-text-dim">구매자</dt>
                    <dd className="mt-0.5 text-ax-text-80">{g.buyer}</dd>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                    <dt className="text-ax-text-dim">BM 역할</dt>
                    <dd className="mt-0.5 text-ax-text-80">{g.role}</dd>
                  </div>
                </dl>

                <div className="mt-4 flex flex-1 flex-col gap-2">
                  {mods.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => onSelect(m)}
                      className="glass-panel group/card rounded-xl px-3.5 py-3 text-left transition hover:border-ax-purple-light/60"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-semibold text-white">
                          <span className={meta.tone}>{m.code}</span> {m.name}
                        </span>
                        <span className="text-[11px] text-ax-text-dim">
                          {m.duration.split(" · ")[0]}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-ax-text-muted">
                        {m.output}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* B1 오버레이 + 업셀 동선 */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-ax-amber/30 bg-ax-amber/[0.06] px-5 py-4">
            <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-ax-amber" />
            <p className="text-[13px] leading-[1.6] text-ax-text-80">
              <span className="font-semibold text-ax-amber">
                B1 · 1:1 퍼실리테이팅
              </span>
              은 그룹이 아니라 세 그룹 전체에 얹히는{" "}
              <span className="text-white">오버레이</span>입니다 — 전사=라이트 ·
              팀=스탠다드 · 임원=풀케어로 강도만 다릅니다.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[13px] text-ax-text-80">
            <span className="font-semibold text-ax-purple-light">업셀 동선</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-ax-text-dim" />
            <span>{UPSELL}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
