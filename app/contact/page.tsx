"use client";
import Link from "next/link";
import { useState } from "react";
import { Info, CheckCircle2 } from "lucide-react";

const field =
  "w-full rounded-lg border border-sand bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/45 transition-colors focus:border-forest focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [division, setDivision] = useState("Kipusa Prints");

  return (
    <section className="wrap section">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3 text-olive">Kipusa Limited</p>
          <h1 className="display h-xl text-charcoal">
            Service Inquiries &amp; Custom Requests
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75 sm:text-base">
            Reach out to <strong>Kipusa Prints</strong> for scanning &amp;
            printing rates, photocopy, lamination &amp; binding, graphic design,
            personalized gifts, E-Citizen services, or DHL package delivery—or
            inquire about products from <strong>Kipusa Beauty</strong> and{" "}
            <strong>Kipusa Home</strong>.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-sand bg-beige/60 p-6 text-xs text-charcoal/75">
            <p className="eyebrow text-[10px] text-forest">
              Kipusa Limited Divisions
            </p>
            <ul className="space-y-2.5">
              <li>
                <strong className="text-charcoal">Kipusa Prints:</strong>{" "}
                Scanning &amp; printing, photocopy, lamination &amp; binding,
                graphic design, custom gifts &amp; apparel, E-Citizen services,
                and authorized DHL shipping.
              </li>
              <li>
                <strong className="text-charcoal">Kipusa Beauty:</strong> Oils,
                scrubs, body butters &amp; skincare catalogue inquiries.
              </li>
              <li>
                <strong className="text-charcoal">Kipusa Home:</strong> Scented
                candles, room mists, artisan soaps &amp; home essentials.
              </li>
            </ul>
            <div className="flex items-start gap-2 border-t border-sand pt-3 text-[11px] text-charcoal/65">
              <Info size={14} className="mt-0.5 shrink-0 text-olive" />
              <span>
                Official company contact details and backend form submission
                routing will be connected in Phase 2/3.
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-2xl border border-sand bg-white p-6 shadow-xs sm:p-8">
            {sent ? (
              <div className="py-8 text-center">
                <CheckCircle2
                  size={36}
                  className="mx-auto mb-3 text-forest"
                />
                <h2 className="font-serif text-3xl text-charcoal">
                  Inquiry Preview Recorded
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">
                  Thank you! Your inquiry for <strong>{division}</strong> has
                  been validated in the Phase 1 frontend interface. Backend
                  email/database dispatch is scheduled for Phase 2/3.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn btn-line-dark"
                  >
                    Send Another Inquiry
                  </button>
                  <Link href="/collections/kipusa-prints" className="btn btn-dark">
                    Back to Kipusa Prints
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/80">
                    Select Division or Service
                  </label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className={field}
                  >
                    <option value="Kipusa Prints — Scanning, Printing, Photocopy & Binding">
                      Kipusa Prints — Scanning, Printing, Photocopy &amp; Binding
                    </option>
                    <option value="Kipusa Prints — Graphic Design & Custom Gifts/Apparel">
                      Kipusa Prints — Graphic Design, Custom Gifts &amp; Apparel
                    </option>
                    <option value="Kipusa Prints — E-Citizen Services">
                      Kipusa Prints — E-Citizen Services
                    </option>
                    <option value="Kipusa Prints — DHL Authorized Agent">
                      Kipusa Prints — DHL Authorized Agent Shipping
                    </option>
                    <option value="Kipusa Beauty">
                      Kipusa Beauty — Skincare &amp; Personal Care Inquiry
                    </option>
                    <option value="Kipusa Home">
                      Kipusa Home — Home &amp; Lifestyle Inquiry
                    </option>
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/80">
                      Your Name
                    </label>
                    <input
                      required
                      placeholder="Full name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/80">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@example.com"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/80">
                    Subject / Service Needed
                  </label>
                  <input
                    required
                    placeholder="e.g., Document Printing & Binding, Custom Mugs/T-Shirts, or DHL Dispatch"
                    className={field}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/80">
                    How can we help you?
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your printing needs, custom gift idea, design brief, or inquiry..."
                    className={field}
                  />
                </div>

                <button type="submit" className="btn btn-dark w-full sm:w-auto">
                  Submit Service Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
