import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PurchaseGroupSection from "@/components/education-v2/PurchaseGroupSection";
import ThreeKeywordSection from "@/components/education-v2/ThreeKeywordSection";
import MatrixSection from "@/components/education-v2/MatrixSection";
import BoundarySection from "@/components/education-v2/BoundarySection";
import AllModulesSection from "@/components/education-v2/AllModulesSection";
import ModuleModal from "@/components/education-v2/ModuleModal";
import ProcessCareSection from "@/components/education/ProcessCareSection";
import { CATALOG_HEADLINE, type Module } from "@/components/education-v2/data";

const TITLE = "기업 AI 교육 v2 | jocoding AX";
const DESCRIPTION =
  "전사·팀·임원 구매 그룹으로 묶은 10개 AI 교육 모듈. 누구에게·무엇을·어떻게 3키워드로 우리 회사에 맞는 시작점을 찾으세요.";

export default function EducationV2Page() {
  const [selected, setSelected] = useState<Module | null>(null);

  return (
    <div className="flex w-full flex-col break-keep bg-ax-bg animate-[fadeSlideIn_0.25s_ease-in-out]">
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />

      {/* 히어로 */}
      <section
        data-gnb-theme="dark"
        className="relative w-full px-5 pt-32 pb-10 text-center md:px-9 md:pt-40 xl:px-10"
      >
        <div className="mx-auto max-w-[900px]">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            jocoding AX · Education
          </span>
          <h1 className="mt-5 text-[34px] font-bold leading-[1.3] text-white md:text-[52px]">
            {CATALOG_HEADLINE}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.7] text-ax-text-muted md:text-[19px]">
            모든 모듈의 결과물은 결국{" "}
            <span className="text-white">자사 데이터로 작동하는 사내 업무툴</span>
            입니다. 전 직원이 직접 만들고, 1:1로 끝까지 봅니다.
          </p>
          <Link
            to="/contact"
            className="glass-btn mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 text-[16px] font-medium text-white"
          >
            도입 문의하기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PurchaseGroupSection onSelect={setSelected} />
      <ThreeKeywordSection />
      <MatrixSection onSelect={setSelected} />
      <BoundarySection />
      <ProcessCareSection />
      <AllModulesSection />

      {selected && (
        <ModuleModal m={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
