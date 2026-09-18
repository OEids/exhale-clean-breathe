import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-natural.jpg";
import { BookingForm } from "@/components/booking-form";
import { BrandLockup } from "@/components/brand-lockup";
import { Panel, PanelLabel } from "@/components/panel";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exhale Cleaning Service — Breathe out, we clean in" },
      {
        name: "description",
        content:
          "Regular home cleans, deep cleans, move-out cleans and office cleans across London. Insured, eco products, one honest price. Book once and breathe out.",
      },
      { property: "og:title", content: "Exhale Cleaning Service" },
      {
        property: "og:description",
        content:
          "London cleaning without the mental load. Breathe out — we clean in. From £38, fully insured.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Exhale Cleaning Service" },
      {
        name: "twitter:description",
        content:
          "London cleaning without the mental load. Breathe out — we clean in. From £38, fully insured.",
      },
    ],
  }),
  component: Index,
});

const WEEK = [
  { label: "Bedrooms · dusted & straightened", done: true },
  { label: "Bathrooms · descaled & sanitised", done: true },
  { label: "Kitchen · deep clean & polish", done: true },
  { label: "Living room · fresh & tidy", done: false },
];

const STATS = [
  { value: "2,400+", label: "Homes cleaned this year" },
  { value: "4.9", label: "Average home rating" },
  { value: "<24h", label: "To confirm your slot" },
];

const SERVICES = [
  {
    number: "01",
    title: "Regular home clean",
    copy: "Weekly or fortnightly. Kitchen, baths, floors and the corners you forget.",
    price: "from £38",
  },
  {
    number: "02",
    title: "Deep clean",
    copy: "One slower pass: inside the oven, behind the appliances, every bit of limescale.",
    price: "from £95",
  },
  {
    number: "03",
    title: "Move-out clean",
    copy: "Deposit-returning standard, landlord sign-off, no second visit.",
    price: "from £140",
  },
  {
    number: "04",
    title: "Office clean",
    copy: "After hours, so the team walks into a reset room by nine.",
    price: "from £120",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Pick your clean",
    copy: "Choose a room, a full home, or a fortnightly plan.",
  },
  {
    number: "2",
    title: "We arrive prepared",
    copy: "Eco products, your checklist, and a calm crew.",
  },
  {
    number: "3",
    title: "Exhale",
    copy: "Walk into a fresh space and leave the chore behind.",
  },
];

const REVIEWS = [
  {
    quote:
      "I actually look forward to Friday now. The house smells calm and I don't have to think about chores all week.",
    initials: "AR",
    name: "Amara R. · Clapham",
  },
  {
    quote:
      "Booked a monthly deep clean for my flat. Spotless, on time, and genuinely lovely people. Worth every penny.",
    initials: "DO",
    name: "Dev O. · Islington",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen pb-16">
      <SiteNav />

      <main className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Hero */}
          <section className="glass animate-inhale col-span-12 flex flex-col rounded-3xl p-9 lg:col-span-7 lg:row-span-2">
            <PanelLabel>London · Fully insured</PanelLabel>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-ink">
              Breathe out.
              <br />
              We clean in.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink/70">
              Spotless homes without the mental load. Book once, exhale for the week — we handle
              every corner so you can just let go.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-brand/25 transition-opacity hover:opacity-90"
              >
                Book your first clean
              </a>
              <a
                href="#how"
                className="rounded-full border border-panel-border bg-panel px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand/40"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-xs text-ink/60">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sage" />
                4.9 from 1,200+ homes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sage" />
                Same-week slots
              </span>
            </div>
            <figure className="mt-9 h-56 overflow-hidden rounded-2xl sm:h-64">
              <img
                src={heroImage}
                alt="A calm, uncluttered living room in morning light with linen curtains and an olive tree"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </figure>
          </section>

          {/* This week */}
          <Panel className="col-span-12 sm:col-span-6 lg:col-span-5">
            <PanelLabel>This week in your home</PanelLabel>
            <ul className="mt-4 space-y-4">
              {WEEK.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span
                    className={`size-2.5 rounded-full ${item.done ? "bg-brand" : "bg-sage"}`}
                  />
                  <span className="text-sm font-medium text-ink/80">{item.label}</span>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Price */}
          <Panel className="col-span-12 sm:col-span-6 lg:col-span-5">
            <PanelLabel>Typical first visit</PanelLabel>
            <p className="mt-3 font-display text-3xl font-extrabold text-ink">£45</p>
            <p className="text-xs text-ink/60">per hour · 2 cleaners · from £120</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-mist">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand to-sage" />
            </div>
            <p className="mt-2 text-xs text-ink/60">
              80% of first bookings are 3-hour full-home cleans.
            </p>
          </Panel>

          {/* Stats */}
          {STATS.map((stat, index) => (
            <Panel
              key={stat.value}
              className={`col-span-12 sm:col-span-4 ${index === 0 ? "" : "sm:col-span-4"}`}
            >
              <p className="font-display text-4xl font-extrabold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </Panel>
          ))}

          {/* Services */}
          <Panel grain className="col-span-12" id="services">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <PanelLabel>What we take off you</PanelLabel>
              <span className="text-xs text-ink/50">Four ways to exhale</span>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {SERVICES.map((service) => (
                <li
                  key={service.number}
                  className="flex items-baseline gap-5 border-t border-panel-border py-5 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0"
                >
                  <span className="font-display text-sm font-semibold text-brand">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-ink">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{service.copy}</p>
                  </div>
                  <span className="shrink-0 text-sm text-ink/70">{service.price}</span>
                </li>
              ))}
            </ul>
          </Panel>

          {/* How it works */}
          <Panel className="col-span-12 lg:col-span-5" id="how">
            <PanelLabel>How it works</PanelLabel>
            <ol className="mt-5 space-y-5">
              {STEPS.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{step.title}</p>
                    <p className="mt-0.5 text-xs text-ink/60">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          {/* Reviews */}
          <Panel
            className="col-span-12 flex flex-col justify-between lg:col-span-7"
            id="reviews"
          >
            <div className="flex items-center justify-between">
              <PanelLabel>What clients tell us</PanelLabel>
              <span className="text-xs text-ink/50">Verified reviews</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {REVIEWS.map((review) => (
                <figure
                  key={review.initials}
                  className="rounded-2xl border border-panel-border bg-mist/40 p-5"
                >
                  <blockquote className="text-sm leading-relaxed text-ink/80">
                    "{review.quote}"
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-mist font-display text-[10px] font-semibold text-brand">
                      {review.initials}
                    </span>
                    <span className="text-xs text-ink/70">{review.name}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Panel>

          {/* Booking */}
          <section className="col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-5" id="book">
            <div className="flex flex-col justify-center lg:col-span-2 lg:p-4">
              <PanelLabel>Let it go</PanelLabel>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink">
                Tell us about the place.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
                Two minutes, no phone calls. We come back within the day with a time and a number.
              </p>
              <div className="mt-6 space-y-1 text-sm text-ink/70">
                <p>hello@exhale.london</p>
                <p>020 7946 0100</p>
                <p>London-wide · Mon–Sat</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <BookingForm />
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-panel-border pt-8">
          <BrandLockup size="footer" />
          <div className="flex flex-wrap items-center gap-5 text-xs text-ink/50">
            <Link
              to="/policies"
              className="underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Appointments & cancellations
            </Link>
            <p>Exhale Cleaning Service · London · fully insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
