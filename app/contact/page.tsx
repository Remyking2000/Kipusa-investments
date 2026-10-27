"use client";
import { useState } from "react";

const field = "w-full border-b border-charcoal/30 bg-transparent py-4 text-[15px] placeholder:text-charcoal/40 transition-colors focus:border-charcoal focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="wrap section grid gap-16 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="eyebrow mb-5 text-olive">Contact</p>
        <h1 className="display h-xl">Reach us</h1>
        <div className="mt-12 space-y-8 text-[15px] leading-relaxed text-charcoal/75">
          <div><p className="eyebrow mb-2 text-charcoal">Studio</p>Nairobi, Kenya<br />Mon – Fri, 9am – 5pm</div>
          <div><p className="eyebrow mb-2 text-charcoal">Email</p>hello@organicsavanna.example</div>
          <div><p className="eyebrow mb-2 text-charcoal">Retail outlets</p>Find us in select boutiques and hotels across Kenya.</div>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        {sent ? <p className="font-serif text-4xl italic">Thank you. We will reply within two working days.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
            <input required placeholder="Name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <textarea required rows={5} placeholder="Message" className={field} />
            <button className="btn btn-dark mt-4">Send message</button>
          </form>
        )}
      </div>
    </section>
  );
}
