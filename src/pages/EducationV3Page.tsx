import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PortfolioSection from "@/components/education-v3/PortfolioSection";
import UpsellSection from "@/components/education-v3/UpsellSection";
import AllModulesSection from "@/components/education-v3/AllModulesSection";
import ModuleModal from "@/components/education-v3/ModuleModal";
import {
  CATALOG_HEADLINE,
  NORTH_STAR,
  SUBHEAD,
  type ModuleV3,
} from "@/components/education-v3/data";

const TITLE = "기업 AI 교육 v3 | jocoding AX";
const DESCRIPTION =
  "트랙 A·B 10개 AI 교육 모듈을 ‘사업 역할’로 묶은 포트폴리오. 미끼 → 수익 엔진 → 마진 엔진으로 이어지는 전사 침투 동선.";

export default function EducationV3Page() {
  const [selected, setSelected] = useState<ModuleV3 | null>(null);

  return (
    <div className="flex w-full flex-col break-keep bg-ax-bg animate-[fadeSlideIn_0.25s_ease-in-out]">
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />

      {/* 히어로 */}
      <section
        data-gnb-theme="dark"
        className="relative w-full px-5 pt-32 pb-10 text-center md:px-9 md:pt-40 xl:px-10"
      >
        <div className="mx-auto max-w-[920px]">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            jocoding AX · Education v3
          </span>
          <h1 className="mt-5 text-[34px] font-bold leading-[1.3] text-white md:text-[52px]">
            {CATALOG_HEADLINE}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.7] text-ax-text-muted md:text-[19px]">
            {SUBHEAD}
          </p>
          <p className="mx-auto mt-7 w-fit rounded-full border border-ax-amber/30 bg-ax-amber/[0.06] px-5 py-2.5 text-[14px] font-medium text-ax-amber">
            북극성 · {NORTH_STAR}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="glass-btn inline-flex items-center justify-center gap-2 px-7 py-4 text-[16px] font-medium text-white"
            >
              도입 문의하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PortfolioSection onSelect={setSelected} />
      <UpsellSection />
      <AllModulesSection />

      {selected && (
        <ModuleModal m={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
