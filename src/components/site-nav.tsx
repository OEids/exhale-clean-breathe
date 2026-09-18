import { BrandLockup } from "@/components/brand-lockup";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Reviews", href: "#reviews" },
];

export function SiteNav() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
      <a href="#top" aria-label="Exhale Cleaning Service, back to top">
        <BrandLockup />
      </a>

      <div className="hidden items-center gap-7 text-sm text-ink/70 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="underline-offset-8 transition-colors hover:text-brand hover:underline"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#book"
          className={cn(
            "rounded-full bg-ink px-4 py-2 font-medium text-background",
            "transition-opacity hover:opacity-90",
          )}
        >
          Book a clean
        </a>
      </div>

      <a
        href="#book"
        className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background md:hidden"
      >
        Book a clean
      </a>
    </nav>
  );
}
