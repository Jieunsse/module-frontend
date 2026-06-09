import { useState, useEffect } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w >= 1280) return "desktop";
    if (w >= 768) return "tablet";
    return "mobile";
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setBp("desktop");
      else if (w >= 768) setBp("tablet");
      else setBp("mobile");
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}
