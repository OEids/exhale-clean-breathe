/**
 * Server-only: turn a saved enquiry into an email in the team's inbox.
 *
 * Delivery goes through the connected Gmail account, so the app never stores
 * Google credentials of its own — the connector gateway handles auth. When no
 * connection is linked yet the call is simply reported as not sent; the enquiry
 * itself is already safely in the database by the time this runs.
 */

const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

export type EnquiryValues = {
  name: string;
  contact: string;
  postcode?: string | undefined;
  service: string;
  notes?: string | undefined;
};

export type DeliveryResult = { sent: boolean; reason?: string };

const b64 = (input: string) =>
  btoa(Array.from(new TextEncoder().encode(input), (b) => String.fromCharCode(b)).join(""));

/** Non-ASCII headers need RFC 2047 encoding; a UTF-8 body does not cover them. */
const header = (value: string) =>
  /^[\x00-\x7F]*$/.test(value) ? value : `=?UTF-8?B?${b64(value)}?=`;

function createRawEmail(to: string, subject: string, body: string): string {
  const email = [
    `To: ${to}`,
    `Subject: ${header(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    body,
  ].join("\r\n");

  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function describe(values: EnquiryValues): string {
  return [
    "New booking enquiry from the exhale cleaning service website.",
    "",
    `Name:     ${values.name}`,
    `Contact:  ${values.contact}`,
    `Postcode: ${values.postcode ?? "not given"}`,
    `Clean:    ${values.service}`,
    "",
    "Notes from the client:",
    values.notes?.trim() ? values.notes.trim() : "(none)",
    "",
    "Reply straight to this email to answer them.",
  ].join("\r\n");
}

export async function notifyTeamOfEnquiry(values: EnquiryValues): Promise<DeliveryResult> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  const mailKey = process.env["GOOGLE_MAIL_API_KEY"];
  const to = process.env["BOOKING_TO_EMAIL"];

  if (!apiKey || !mailKey) return { sent: false, reason: "gmail_not_connected" };
  if (!to) return { sent: false, reason: "inbox_not_configured" };

  try {
    const response = await fetch(`${GMAIL_GATEWAY}/users/me/messages/send`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "x-connection-api-key": mailKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        raw: createRawEmail(to, `New enquiry — ${values.name} · ${values.service}`, describe(values)),
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error(`[enquiry] gateway send failed [${response.status}]: ${await response.text()}`);
      return { sent: false, reason: `gateway_${response.status}` };
    }

    return { sent: true };
  } catch (error) {
    console.error("[enquiry] gateway send error:", error);
    return { sent: false, reason: "send_failed" };
  }
}
