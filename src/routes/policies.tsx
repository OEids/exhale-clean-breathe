import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { BrandLockup } from "@/components/brand-lockup";
import { Panel, PanelLabel } from "@/components/panel";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Appointments & Cancellation Policy — Exhale Cleaning Service" },
      {
        name: "description",
        content:
          "How Exhale Cleaning Service handles regular weekly and fortnightly appointments: notice periods, cancellation charges, household illness, holidays and force majeure.",
      },
      { property: "og:title", content: "Appointments & Cancellation Policy" },
      {
        property: "og:description",
        content:
          "Regular cleans are reserved slots. Here's how much notice we need to change or cancel one, and what we do when life gets in the way.",
      },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Exhale Cleaning Service" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Appointments & Cancellation Policy" },
      {
        name: "twitter:description",
        content:
          "Notice periods, cancellation charges, household illness and holidays — the plain-English policy behind a regular Exhale clean.",
      },
    ],
  }),
  component: PoliciesPage,
});

type Block =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "note"; text: string };

type Section = {
  id: string;
  nav: string;
  title: string;
  blocks: Block[];
};

const SECTIONS: Section[] = [
  {
    id: "reserved",
    nav: "Reserved slots",
    title: "A regular appointment is a reserved slot",
    blocks: [
      {
        kind: "p",
        text: "When you book a weekly or fortnightly cleaning service, you are reserving a regular time slot within our cleaning rota. That time is allocated specifically for you and is not generally offered to another client.",
      },
      {
        kind: "p",
        text: "Because we plan our cleaning schedules and allocate cleaning teams' work in advance, a last-minute cancellation can leave us with an immediate loss of earnings for that reserved time slot.",
      },
      {
        kind: "p",
        text: "We therefore kindly ask that clients acknowledge a regular weekly or fortnightly booking is a reserved appointment, rather than simply a booking made on a visit-by-visit basis.",
      },
    ],
  },
  {
    id: "client-cancellations",
    nav: "Cancellations",
    title: "Cancellation by the client",
    blocks: [
      {
        kind: "p",
        text: "To provide a reliable service for all clients, cleaning teams and their schedules are planned and allocated up to two weeks in advance.",
      },
      {
        kind: "list",
        items: [
          "We require a minimum of 7 clear business days' notice to cancel a regular cleaning appointment.",
          "Cancellations made with less than 7 clear business days' notice incur a cancellation charge of 50% of the cleaning fee for the cancelled visit.",
          "Cancellations made within 24 hours of the scheduled clean incur a charge of 100% of the cleaning fee.",
          "The same 100% charge applies where our cleaning team arrives at the property but is unable to gain access because of a lockout, a forgotten appointment, or another issue that prevents the clean from taking place.",
          "These charges help cover the cleaning team's allocated time, travel and loss of earnings caused by the cancellation.",
        ],
      },
      {
        kind: "note",
        text: "If there is a genuine exceptional circumstance that prevented you from giving the required notice, please let us know. Each situation can be considered individually and, where appropriate, the cancellation charge may be reduced or waived.",
      },
    ],
  },
  {
    id: "illness",
    nav: "Household illness",
    title: "Illness within the household",
    blocks: [
      {
        kind: "p",
        text: "We understand that illness can happen unexpectedly.",
      },
      {
        kind: "p",
        text: "If someone in your household is unwell and you need to cancel within 24 hours of your booked cleaning time, we can offer the option to prepay 100% of the cancelled clean and retain the cleaning hours for you.",
      },
      {
        kind: "p",
        text: "The prepaid hours can then be:",
      },
      {
        kind: "list",
        items: [
          "Rescheduled and used when you are well again, subject to availability;",
          "Spread across your next few cleaning appointments; or",
          "Gifted to another person, if you would prefer.",
        ],
      },
      {
        kind: "p",
        text: "This allows us to protect the cleaning team's reserved time while also ensuring that you do not lose the cleaning hours you have paid for.",
      },
    ],
  },
  {
    id: "holidays",
    nav: "Holidays",
    title: "Public holidays & client holidays",
    blocks: [
      {
        kind: "p",
        text: "If your regular cleaning visit falls on a Bank Holiday or during a holiday period, every effort will be made to rearrange your appointment where necessary. However, an alternative time cannot always be guaranteed.",
      },
      {
        kind: "p",
        text: "Unless you have received confirmation from Exhale Cleaning Service that your appointment has been cancelled or rearranged, your regular clean will remain scheduled.",
      },
      {
        kind: "p",
        text: "If you are going on holiday, we are happy to offer a no-fee cancellation of your regular clean, provided that you give us at least 7 clear business days' notice.",
      },
      {
        kind: "list",
        items: [
          "Cancellations with less than 7 clear business days' notice may incur a 50% cancellation charge.",
          "Cancellations with less than 24 hours' notice may incur a 100% cancellation charge.",
        ],
      },
    ],
  },
  {
    id: "force-majeure",
    nav: "Force majeure",
    title: "Force majeure",
    blocks: [
      {
        kind: "p",
        text: "Exhale Cleaning Service will not be liable for failure or delay in providing services where this is caused by circumstances beyond our reasonable control.",
      },
      {
        kind: "p",
        text: "This may include, but is not limited to, delays in transportation, fuel or material shortages, strikes, embargoes, fire, flooding, quarantine restrictions, earthquakes, hurricanes, extreme weather conditions or other circumstances beyond the reasonable control of Exhale Cleaning Service.",
      },
      {
        kind: "p",
        text: "Where such circumstances occur, we will make reasonable efforts to communicate with clients and rearrange services where possible.",
      },
      {
        kind: "p",
        text: "Exhale Cleaning Service reserves the right to make reasonable adjustments to service arrangements and charges where circumstances beyond our control materially affect the provision of services.",
      },
    ],
  },
];

function PoliciesPage() {
  return (
    <div id="top" className="min-h-screen pb-16">
      <SiteNav />

      <main className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Cover */}
          <section className="glass animate-inhale col-span-12 rounded-3xl p-9">
            <PanelLabel>Policy · Plain English</PanelLabel>
            <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl">
              Regular appointments
              <br />
              & cancellation.
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
              A regular clean is a slot we hold for you. This is how much notice we need to move or
              cancel one — and what we do when the unexpected happens.
            </p>
            <nav
              aria-label="On this page"
              className="mt-8 flex flex-wrap gap-2"
            >
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-panel-border bg-mist/50 px-4 py-2 text-xs font-medium text-ink/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {section.nav}
                </a>
              ))}
            </nav>
          </section>

          {SECTIONS.map((section, index) => (
            <Panel
              key={section.id}
              grain={index === 1}
              className="col-span-12 scroll-mt-8 lg:col-span-12"
              id={section.id}
            >
              <PanelLabel>{`0${index + 1}`}</PanelLabel>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-5 max-w-3xl space-y-4">
                {section.blocks.map((block, blockIndex) => {
                  if (block.kind === "list") {
                    return (
                      <ul key={blockIndex} className="space-y-3">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-ink/75"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.kind === "note") {
                    return (
                      <p
                        key={blockIndex}
                        className="rounded-2xl border border-brand/25 bg-brand-soft px-5 py-4 text-sm leading-relaxed text-ink/80"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  return (
                    <p key={blockIndex} className="text-sm leading-relaxed text-ink/75">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </Panel>
          ))}

          {/* Questions */}
          <Panel className="col-span-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <PanelLabel>Questions about a slot</PanelLabel>
              <p className="mt-3 max-w-md font-display text-2xl font-bold tracking-tight text-ink">
                Tell us what's changed and we'll work it out.
              </p>
              <div className="mt-3 space-y-1 text-sm text-ink/70">
                <p>hello@exhale.london</p>
                <p>020 7946 0100</p>
              </div>
            </div>
            <Link
              to="/"
              className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-brand/25 transition-opacity hover:opacity-90"
            >
              Back to booking
            </Link>
          </Panel>
        </div>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-panel-border pt-8">
          <BrandLockup size="footer" />
          <p className="text-xs text-ink/50">
            Exhale Cleaning Service · London · fully insured
          </p>
        </div>
      </footer>
    </div>
  );
}
