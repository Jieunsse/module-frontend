import EducationMatrixSection from "@/components/education/EducationMatrixSection";
import ProcessCareSection from "@/components/education/ProcessCareSection";
import AllModulesSection from "@/components/education/AllModulesSection";

const TITLE = "기업 AI 교육 | jocoding AX";
const DESCRIPTION =
  "커리큘럼·진행 과정·밀착 관리까지 투명하게. 대상×운영형식 매트릭스로 우리 회사에 맞는 AI 교육을 직접 골라보세요.";

export default function EducationPage() {
  return (
    <div className="flex w-full flex-col break-keep bg-ax-bg animate-[fadeSlideIn_0.25s_ease-in-out]">
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />

      <EducationMatrixSection />
      <ProcessCareSection />
      <AllModulesSection />
    </div>
  );
}
