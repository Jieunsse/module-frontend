import { Link } from "react-router";
import {
  Clock,
  Users,
  Sparkles,
  Package,
  ArrowRight,
  Target,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import type { Module, Syllabus } from "./data";

export function PainBlock({ pain }: { pain: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-[12px] font-semibold text-ax-text-dim">
        이런 고민이 있다면
      </p>
      <p className="mt-1.5 text-[14px] leading-[1.6] text-ax-text-80">
        “{pain}”
      </p>
    </div>
  );
}

export function SyllabusBlock({ s }: { s: Syllabus }) {
  return (
    <div className="mt-5">
      {/* 학습 성과 */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2 text-ax-purple-light">
          <Target className="h-4 w-4" />
          <span className="text-[12px] font-semibold">학습 성과</span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          {s.objectives.map((o) => (
            <li
              key={o}
              className="flex items-start gap-2 text-[13px] leading-[1.6] text-ax-text-80"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ax-purple-light" />
              {o}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] text-ax-text-dim">선수 지식 · {s.prereq}</p>
      </div>

      {/* 회차별 */}
      <p className="mt-5 text-[13px] font-semibold uppercase tracking-wider text-ax-text-dim">
        회차별 커리큘럼
      </p>
      <ol className="mt-3 flex flex-col gap-3">
        {s.sessions.map((ses) => (
          <li
            key={ses.no}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-white">
                {ses.no} · {ses.topic}
              </span>
              <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-ax-text-dim">
                {ses.time}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-[1.6] text-ax-text-muted">
              🎯 {ses.goal}
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              {ses.activities.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-[13px] leading-[1.55] text-ax-text-80"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ax-text-dim" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-2.5 flex items-center gap-1.5 text-[12px] text-ax-text-muted">
              <Package className="h-3.5 w-3.5 text-ax-purple-light" />
              <span className="font-medium text-white">{ses.output}</span>
            </div>
            {ses.coachNote && (
              <div className="mt-2 flex items-start gap-1.5 rounded-lg border border-ax-amber/25 bg-ax-amber/[0.06] px-2.5 py-1.5">
                <UserCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ax-amber" />
                <span className="text-[12px] leading-snug text-ax-text-80">
                  {ses.coachNote}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* 최종 산출물 / 졸업 요건 */}
      <div className="mt-4 rounded-xl border border-ax-purple/30 bg-ax-purple/[0.08] px-4 py-3">
        <div className="flex items-center gap-2 text-ax-purple-light">
          <GraduationCap className="h-4 w-4" />
          <span className="text-[12px] font-semibold">최종 산출물</span>
        </div>
        <p className="mt-1.5 text-[14px] font-medium text-white">
          {s.finalDeliverable}
        </p>
        <p className="mt-1 text-[12px] text-ax-text-muted">{s.graduation}</p>
      </div>
    </div>
  );
}

function Meta({
  Icon,
  label,
  value,
}: {
  Icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="flex items-center gap-2 text-ax-text-dim">
        <Icon className="h-4 w-4" />
        <span className="text-[12px]">{label}</span>
      </div>
      <p className="mt-1.5 text-[14px] font-medium leading-[1.5] text-white">
        {value}
      </p>
    </div>
  );
}

export default function ModuleDetailBody({ m }: { m: Module }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-ax-purple/20 px-3 py-1 text-[12px] font-semibold text-ax-purple-light">
          {m.code} · {m.level}
        </span>
        <span className="rounded-full border border-white/15 px-3 py-1 text-[12px] text-ax-text-muted">
          {m.format}
        </span>
      </div>

      <h3 className="mt-4 text-[22px] font-bold text-white">{m.name}</h3>
      {/* 가치 한 줄 */}
      <p className="mt-2 text-[15px] font-medium leading-[1.6] text-ax-amber">
        {m.headline}
      </p>

      {/* 이런 고민이 있다면 */}
      <div className="mt-5">
        <PainBlock pain={m.pain} />
      </div>

      {/* 무엇을 하나 / 남는 결과물 / 대상 / 길이 */}
      <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Meta Icon={Sparkles} label="무엇을 하나" value={m.what} />
        <Meta Icon={Package} label="남는 결과물" value={m.output} />
        <Meta Icon={Users} label="추천 대상/규모" value={m.audience} />
        <Meta Icon={Clock} label="길이·형식" value={m.duration} />
      </dl>

      {/* 차별 포인트 */}
      <div className="mt-4 rounded-xl border border-ax-purple/30 bg-ax-purple/[0.08] px-4 py-3">
        <p className="text-[12px] font-semibold text-ax-purple-light">
          차별 포인트
        </p>
        <p className="mt-1 text-[14px] leading-[1.6] text-white">
          {m.differentiator}
        </p>
      </div>

      {/* 커리큘럼 — 상세 syllabus 있으면 우선, 없으면 흐름 요약 */}
      {m.syllabus ? (
        <SyllabusBlock s={m.syllabus} />
      ) : (
        <div className="mt-5">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-ax-text-dim">
            커리큘럼 흐름
          </p>
          <ol className="mt-3 flex flex-col gap-2">
            {m.curriculum.map((c, i) => (
              <li
                key={c}
                className="flex items-start gap-3 text-[14px] text-ax-text-80"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ax-purple/20 text-[11px] font-semibold text-ax-purple-light">
                  {i + 1}
                </span>
                {c}
              </li>
            ))}
          </ol>
        </div>
      )}

      {m.jobTags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {m.jobTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-ax-text-muted"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      <p className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-[13px] text-ax-text-muted">
        예산·기간은 인원에 맞춰 <span className="text-ax-amber">맞춤 견적</span>
        으로 안내드려요.
      </p>

      {/* CTA — 진입 모듈을 from 으로 전달(entry_source) */}
      <Link
        to={`/contact?from=${m.id}`}
        className="glass-btn mt-4 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-medium text-white"
      >
        {m.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </>
  );
}
