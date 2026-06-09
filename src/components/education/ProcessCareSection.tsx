import { Link } from "react-router";
import {
  ClipboardCheck,
  Rocket,
  Gauge,
  PackageCheck,
  BarChart3,
} from "lucide-react";

// 진행 과정(시간 순서) 위에 밀착 관리(=1:1 퍼실리테이팅) 개입 시점을 오버레이.
const STEPS = [
  { Icon: ClipboardCheck, phase: "사전 진단", care: "코치 배정 · 목표 합의" },
  { Icon: Rocket, phase: "회차 진행", care: "1:1 개입 · 실습 코칭" },
  { Icon: Gauge, phase: "중간 점검", care: "진도 점검 · 이탈 케어" },
  { Icon: PackageCheck, phase: "산출물 점검", care: "피드백 · 보완" },
  { Icon: BarChart3, phase: "성과 정리", care: "성과 리포트 · 사내 전파" },
];

export default function ProcessCareSection() {
  return (
    <section
      id="process"
      data-gnb-theme="dark"
      className="relative w-full scroll-mt-24 px-5 py-20 md:px-9 md:py-28 xl:px-10 xl:py-32"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-wider text-ax-purple-light">
            Process & Care
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-white md:text-[40px]">
            교육이 굴러가는 동안, 방치하지 않습니다
          </h2>
          <p className="mt-5 text-[16px] text-ax-text-muted md:text-[18px]">
            위는 <span className="text-white">진행 과정</span>, 아래는 그동안의{" "}
            <span className="text-ax-amber">밀착 관리</span>. 교육과정 전 과정을
            강사가 밀착 관리합니다.
          </p>
        </div>

        {/* 데스크톱: 가로 타임라인 + 밀착관리 오버레이 / 모바일: 세로 */}
        <div className="mt-14">
          {/* 진행 과정 라인 */}
          <ol className="grid grid-cols-1 gap-5 md:grid-cols-5 md:gap-3">
            {STEPS.map(({ Icon, phase, care }, i) => (
              <li key={phase} className="relative flex flex-col">
                {/* 진행 노드 */}
                <div className="glass-panel flex flex-col items-center gap-3 rounded-[18px] px-4 py-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ax-purple/15 text-ax-purple-light">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-montserrat text-[12px] font-semibold text-ax-text-dim">
                    STEP {i + 1}
                  </span>
                  <span className="text-[16px] font-semibold text-white">
                    {phase}
                  </span>
                </div>

                {/* 밀착 관리 오버레이 콜아웃 */}
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-ax-amber/25 bg-ax-amber/[0.06] px-3 py-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ax-amber" />
                  <span className="text-[13px] leading-snug text-ax-text-80">
                    {care}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          {/* 밀착 관리 라벨 (라인 전체에 얹힌다는 메시지) */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-ax-amber">
            <span className="h-px w-8 bg-ax-amber/40" />
            1:1 퍼실리테이팅이 전 구간에 얹힙니다
            <span className="h-px w-8 bg-ax-amber/40" />
          </div>
        </div>

        {/* Before / After + 담당자 한마디 */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-ax-text-dim">
              Before
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-ax-text-muted">
              "교육은 받았는데 막상 실무로 돌아오면 아무도 안 쓰더라."
            </p>
          </div>
          <div className="rounded-[18px] border border-ax-purple/30 bg-ax-purple/[0.08] p-6">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-ax-purple-light">
              After
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-white">
              "코치가 회차마다 붙으니 끝까지 따라왔고, 부서마다 도구가 하나씩
              남았다."
            </p>
          </div>
          <div className="glass-panel flex flex-col justify-center rounded-[18px] p-6">
            <p className="text-[15px] leading-[1.7] text-ax-text-80">
              💬 "진도가 처지는 인원을 코치가 먼저 챙겨줘서 이탈이 거의 없었어요."
            </p>
            <p className="mt-3 text-[13px] text-ax-text-dim">— 교육 담당자</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="glass-btn inline-flex items-center justify-center px-7 py-4 text-lg font-medium text-white"
          >
            도입 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
