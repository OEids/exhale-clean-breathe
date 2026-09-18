import { useState, type FormEvent } from "react";
import { Panel, PanelLabel } from "@/components/panel";
import { submitBookingRequest } from "@/lib/bookings";

const SERVICES = [
  "Regular home clean",
  "Deep clean",
  "Move-out clean",
  "Office clean",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-panel-border bg-mist/60 px-4 py-3 text-sm text-ink " +
  "outline-none transition-colors placeholder:text-ink/40 focus:border-brand focus:bg-mist";

const labelClass = "mt-5 block text-xs font-medium tracking-wide text-ink/60";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    event.preventDefault();

    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    setStatus("sending");
    setError(null);

    const result = await submitBookingRequest({
      name: read("name"),
      contact: read("contact"),
      postcode: read("postcode") || undefined,
      service: read("service") || SERVICES[0],
      notes: read("notes") || undefined,
    });

    if (result.error) {
      setError(result.error);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <Panel grain className="flex flex-col justify-center">
        <PanelLabel>Request received</PanelLabel>
        <p className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
          That's it — breathe out.
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          We'll come back to you within the day with a time and an honest price. Nothing else to
          fill in.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 self-start rounded-full border border-brand/40 px-5 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand-soft"
        >
          Send another request
        </button>
      </Panel>
    );
  }

  return (
    <Panel grain className="lg:p-9">
      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
          <label className={labelClass}>
            Your name
            <input name="name" required placeholder="Amara" className={fieldClass} />
          </label>
          <label className={labelClass}>
            Email or phone
            <input
              name="contact"
              required
              placeholder="you@email.com"
              className={fieldClass}
            />
          </label>
          <label className={labelClass}>
            Postcode
            <input name="postcode" placeholder="SW4 2QX" className={fieldClass} />
          </label>
          <label className={labelClass}>
            Which clean?
            <select name="service" defaultValue={SERVICES[0]} className={fieldClass}>
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={labelClass}>
          Anything we should know?
          <textarea
            name="notes"
            rows={3}
            placeholder="Two cats, one stubborn stove."
            className={fieldClass}
          />
        </label>

        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-7 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-brand/25 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a clean"}
        </button>

        <p className="mt-4 text-xs text-ink/50">
          No payment now. We confirm the price before anyone sets off.
        </p>
      </form>
    </Panel>
  );
}
