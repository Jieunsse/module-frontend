import { Link } from "react-router";
import {
  Users,
  Gauge,
  Route,
  Target,
  Package,
  BadgeCheck,
  Clock,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { toneOf, type ModuleV3 } from "./data";

export default function ModuleDetailBody({ m }: { m: ModuleV3 }) {
  const tone = toneOf(m);
  const isA2 = m.code === "A2";
  return (
    <div className="flex flex-col">
      {/* 헤더 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className={`text-[20px] font-bold ${tone.text}`}>{m.code}</span>
        <span className="text-[20px] font-bold text-white">{m.name}</span>
        {m.signature && (
          <span className="text-[14px] font-semibold text-ax-amber">
            ★ 시그니처
          </span>
        )}
        {!isA2 && m.role !== "미끼" && (
          <span
            className={`ml-auto rounded-full px-2.5 py-1 text-[11px] font-medium ${tone.chip}`}
          >
            {tone.label}
          </span>
        )}
      </div>
      {!isA2 && m.position && (
        <p className="mt-2 text-[14px] leading-[1.6] text-ax-text-muted">
          {m.position}
        </p>
      )}

      {/* 대상 · 규모 */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Meta Icon={Users} label={isA2 ? "실무자" : "대상"} value={m.audience} />
        <Meta Icon={Gauge} label="규모" value={m.scale} />
      </div>

      {/* 진행 흐름 */}
      <Block Icon={Route} title="진행 흐름">
        <ol className="flex flex-col gap-2">
          {m.flow.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-ax-text-80"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ax-purple/20 text-[11px] font-bold text-ax-purple-light">
                {i + 1}
              </span>
              {f}
            </li>
          ))}
        </ol>
      </Block>

      {/* 학습 목표 */}
      <Block Icon={Target} title="학습 목표">
        <ul className="flex flex-wrap gap-2">
          {m.goals.map((g) => (
            <li
              key={g}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-ax-text-80"
            >
              {g}
            </li>
          ))}
        </ul>
      </Block>

      {/* 남는 것 */}
      <div className="mt-4 rounded-xl border border-ax-purple/25 bg-ax-purple/[0.06] px-4 py-3.5">
        <div className="flex items-center gap-2 text-ax-purple-light">
          <Package className="h-4 w-4" />
          <span className="text-[12px] font-semibold">남는 것</span>
        </div>
        <p className="mt-1.5 text-[14px] leading-[1.6] text-white">{m.output}</p>
        {m.guarantee && (
          <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium text-ax-amber">
            <BadgeCheck className="h-3.5 w-3.5" />
            {m.guarantee}
          </p>
        )}
      </div>

      {/* 길이·형식 / KPI */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Meta Icon={Clock} label="길이·형식" value={m.format} />
        <Meta Icon={LineChart} label="KPI" value={m.kpi} />
      </div>

      <Link
        to="/contact"
        className="glass-btn mt-6 inline-flex w-fit items-center gap-2 px-5 py-3 text-[14px] font-medium text-white"
      >
        도입 문의하기
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Meta({
  Icon,
  label,
  value,
}: {
  Icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="flex items-center gap-2 text-ax-text-dim">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[12px] font-semibold">{label}</span>
      </div>
      <p className="mt-1.5 text-[13px] leading-[1.55] text-ax-text-80">{value}</p>
    </div>
  );
}

function Block({
  Icon,
  title,
  children,
}: {
  Icon: typeof Users;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 text-ax-text-dim">
        <Icon className="h-4 w-4" />
        <span className="text-[12px] font-semibold uppercase tracking-wider">
          {title}
        </span>
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
