"use client";

import { useState } from "react";

const inputClasses =
  "w-full border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white transition-colors placeholder:text-white/30 focus:border-amber-500 focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-t-2 border-amber-500/40 pt-6">
        <h3 className="text-lg font-semibold text-white">Thanks for reaching out!</h3>
        <p className="mt-2 text-sm text-white/60">
          This is a demo site, so nothing was actually sent &mdash; but on a live site
          we&apos;d get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(718) 555-0192"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us what you're looking for..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
