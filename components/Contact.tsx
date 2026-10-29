"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
      // Honeypot: real users never fill this hidden field.
      company: String(data.get("company") || ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ kind: "error", message: "Please fill in your name, email and message." });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        setStatus({ kind: "success" });
        form.reset();
        return;
      }

      // Email isn't set up on the server yet — fall back to the visitor's
      // own email app with everything pre-filled, so no enquiry is lost.
      if (result.reason === "not_configured") {
        const subject = encodeURIComponent(`Ecoweave enquiry from ${payload.name}`);
        const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name}\n${payload.email}`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setStatus({ kind: "success" });
        form.reset();
        return;
      }

      setStatus({
        kind: "error",
        message: result.error || "Something went wrong. Please try again, or email us directly.",
      });
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again, or email us directly." });
    }
  }

  const submitting = status.kind === "submitting";

  return (
    <section className="section contact" id="contact">
      <div className="contact-inner">
        <div className="eyebrow">Let&rsquo;s find your favorite</div>
        <h2>See a bag you love?</h2>
        <p>
          Send a message to ask about availability, pricing, more photos, or
          delivery options. We&rsquo;d be happy to help!
        </p>

        {status.kind === "success" ? (
          <div className="form-status success">
            Thank you! Your message is on its way — we&rsquo;ll be in touch soon. ✿
          </div>
        ) : (
          <form className="enquiry" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="enquiry-name">Your name</label>
              <input id="enquiry-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="enquiry-email">Email</label>
              <input id="enquiry-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="enquiry-message">What are you looking for?</label>
              <textarea
                id="enquiry-message"
                name="message"
                placeholder="Tell us which bag you love, or the style you have in mind…"
                required
              />
            </div>
            {/* Honeypot field, hidden from real visitors */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />
            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send enquiry ↗"}
            </button>
            {status.kind === "error" && (
              <div className="form-status error">{status.message}</div>
            )}
            <p className="form-note">
              Prefer email? Write to{" "}
              <a href={`mailto:${site.email}`} style={{ color: "var(--navy)", fontWeight: 700 }}>
                {site.email}
              </a>
            </p>
          </form>
        )}

        {(site.facebookUrl || site.whatsapp) && (
          <p className="contact-alt">
            Or reach us on{" "}
            {site.facebookUrl && (
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
            {site.facebookUrl && site.whatsapp && " · "}
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
