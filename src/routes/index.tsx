import { createFileRoute, Link } from "@tanstack/react-router";
import cleanKitchen1 from "@/assets/clean-kitchen-1.jpg.asset.json";
import heroImage from "@/assets/hero-natural.jpg";
import { BookingForm } from "@/components/booking-form";
import { BrandLockup } from "@/components/brand-lockup";
import { Panel, PanelLabel } from "@/components/panel";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exhale Cleaning Service — Bradford home cleaning" },
      {
        name: "description",
        content:
          "Exhale is a small, trusted home cleaning service in Bradford and all BD postcode areas. Start with a free meet-and-greet, then a plan built around your home.",
      },
      { property: "og:title", content: "Exhale Cleaning Service" },
      {
        property: "og:description",
        content:
          "Gentle care for every space. A free meet-and-greet, a plan built around your home, and a cleaner you can rely on. Bradford and all BD postcodes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Exhale Cleaning Service" },
      {
        name: "twitter:description",
        content:
          "Bradford home cleaning without the mental load. Book a free meet-and-greet, then breathe easy.",
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

const ABOUT = [
  {
    title: "Personalised plans",
    copy: "We understand no two homes are the same, so we build every plan around yours.",
  },
  {
    title: "Cleaner, brighter home",
    copy: "We help you keep your home genuinely clean week after week, so it never slips.",
  },
  {
    title: "Gentle, reliable cleaners",
    copy: "We take extra care, treating your home the way we would treat our own.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Book your free meet and greet",
    copy: "A friendly visit to see the space, talk through what matters to you, and answer questions.",
  },
  {
    number: "2",
    title: "Book your clean",
    copy: "Following your meet-and-greet, choose a service and the days that suit your household.",
  },
  {
    number: "3",
    title: "Breathe easy",
    copy: "Relax and enjoy your home, knowing the cleaning is taken care of.",
  },
];

const REVIEWS = [
  { heading: "Client Success Stories", quote: "Jasmine and her team are like my cleaning angels…" },
  { heading: "Stories From The Home", quote: "We last used JCS as we had an important…" },
  { heading: "What Our Clients Say", quote: "These girls are amazing at cleaning. I have been…" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen pb-16">
      <SiteNav />

      <main className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Hero */}
          <section className="glass animate-inhale col-span-12 flex flex-col rounded-3xl p-9 lg:col-span-7 lg:row-span-2">
            <PanelLabel>Bradford · All BD postcodes</PanelLabel>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-ink">
              Breathe out.
              <br />
              We clean in.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink/70">
              Exhale is a small, trusted home cleaning service. We start with a free meet-and-greet,
              then look after your home with a plan built around it — so you can stop thinking about
              the chores.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-brand/25 transition-opacity hover:opacity-90"
              >
                Book your free meet-and-greet
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
                Free meet-and-greet, no obligation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sage" />
                Weekly & fortnightly plans
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

          {/* Plans */}
          <Panel className="col-span-12 sm:col-span-6 lg:col-span-5">
            <PanelLabel>Plans & pricing</PanelLabel>
            <p className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-ink">
              Every price is quoted after we've seen the home.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              That's what the meet-and-greet is for: the number you're given is the number you pay,
              with nothing added on later.
            </p>
            <p className="mt-4 text-xs text-ink/60">
              Weekly and fortnightly plans · one-off and occasional cleans too.
            </p>
          </Panel>

          {/* Where we work */}
          <Panel grain className="col-span-12 lg:col-span-5">
            <PanelLabel>Where we work</PanelLabel>
            <p className="mt-3 font-display text-3xl font-extrabold text-ink">Bradford</p>
            <p className="mt-1 text-sm text-ink/70">
              and all BD postcode areas — a small, trusted team rather than a rotating cast of
              strangers.
            </p>
          </Panel>

          {/* What we care about */}
          <Panel className="col-span-12 lg:col-span-7" id="services">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <PanelLabel>A cleaner way of living</PanelLabel>
              <span className="text-xs text-ink/50">Gentle care for every space</span>
            </div>
            <ul className="mt-6">
              {ABOUT.map((item, index) => (
                <li
                  key={item.title}
                  className="flex items-baseline gap-5 border-t border-panel-border py-5 first:border-t-0"
                >

                  <span className="font-display text-sm font-semibold text-brand">
                    {`0${index + 1}`}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          {/* From our cleans */}
          <Panel className="col-span-12" id="cleans">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <PanelLabel>From our cleans</PanelLabel>
              <span className="text-xs text-ink/50">Real homes, looked after by the team</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="overflow-hidden rounded-2xl">
                <img
                  src={cleanKitchen1.url}
                  alt="A freshly cleaned kitchen with a marble-topped island, pendant lights and garden view"
                  width={1290}
                  height={386}
                  className="aspect-[16/9] h-full w-full object-cover"
                />
              </figure>
              <div className="hidden items-center justify-center rounded-2xl border border-dashed border-panel-border bg-mist/30 p-6 text-center text-xs leading-relaxed text-ink/50 sm:flex">
                More photos from recent cleans
                <br />
                coming soon
              </div>
              <div className="hidden items-center justify-center rounded-2xl border border-dashed border-panel-border bg-mist/30 p-6 text-center text-xs leading-relaxed text-ink/50 lg:flex">
                Your home could be next —
                <br />
                book a free meet-and-greet
              </div>
            </div>
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
              <span className="text-xs text-ink/50">From our existing homes</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {REVIEWS.map((review) => (
                <figure
                  key={review.heading}
                  className="rounded-2xl border border-panel-border bg-mist/40 p-5"
                >
                  <figcaption className="eyebrow text-[10px]">{review.heading}</figcaption>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">
                    "{review.quote}"
                  </blockquote>
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
                Send this over and we'll come back to arrange your free meet-and-greet. No payment,
                no pressure — just a chat about your home.
              </p>
              <p className="mt-6 text-sm text-ink/70">
                Prefer to talk? Add a good time in the notes and we'll ring you.
              </p>
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
            <p>Exhale Cleaning Service · Bradford & all BD postcodes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
