import { Leaf } from "lucide-react";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-msm-green";
  const subColor =
    variant === "light" ? "text-white/70" : "text-msm-green-light";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-msm-lime-light">
        <Leaf className="h-5 w-5 text-msm-green" fill="currentColor" />
      </div>
      <div className="leading-tight">
        <div className={`text-lg font-bold tracking-tight ${textColor}`}>
          MSM
        </div>
        <div className={`text-[10px] font-semibold tracking-widest uppercase ${subColor}`}>
          Farming Solutions
        </div>
      </div>
    </div>
  );
}
