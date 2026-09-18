import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds the organic paper-grain overlay. */
  grain?: boolean;
};

/**
 * The frosted surface every bento block sits on.
 * Colour, border and shadow all come from the design tokens in styles.css.
 */
export function Panel({ className, grain = false, children, ...props }: PanelProps) {
  return (
    <div
      className={cn("glass relative overflow-hidden rounded-3xl p-7", grain && "grain", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/** Small uppercase label that heads every panel. */
export function PanelLabel({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("eyebrow", className)} {...props} />;
}
