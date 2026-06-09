import { X } from "lucide-react";
import ModuleDetailBody from "@/components/education/ModuleDetailBody";
import type { Module } from "./data";

export default function ModuleModal({
  m,
  onClose,
}: {
  m: Module;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-panel relative max-h-[88vh] w-full max-w-[800px] rounded-[20px] p-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 text-ax-text-dim transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <ModuleDetailBody m={m} />
      </div>
    </div>
  );
}
