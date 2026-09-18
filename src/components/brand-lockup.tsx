import { cn } from "@/lib/utils";

const SIZES = {
  nav: { word: "text-2xl", sub: "mt-1 text-[10px] tracking-[0.42em]" },
  hero: { word: "text-6xl sm:text-7xl lg:text-8xl", sub: "mt-3 text-xs tracking-[0.5em]" },
  footer: { word: "text-xl", sub: "mt-1 text-[9px] tracking-[0.42em]" },
} as const;

type BrandLockupProps = {
  size?: keyof typeof SIZES;
  className?: string;
};

/**
 * The brand lockup: "exhale" in bold, "cleaning service" set underneath it.
 * Never inline the two lines — the stack is the logo.
 */
export function BrandLockup({ size = "nav", className }: BrandLockupProps) {
  const s = SIZES[size];

  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span className={cn("font-display font-extrabold tracking-tight text-ink", s.word)}>
        exhale
      </span>
      <span className={cn("font-body font-medium uppercase text-brand", s.sub)}>
        cleaning service
      </span>
    </div>
  );
}
