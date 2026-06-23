"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { contactPageContent } from "../data/content";

const { form } = contactPageContent;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand-lighter/40 px-6 py-12 text-center">
        <p className="text-base font-medium text-brand-dark">{form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-semibold text-gray-800"
          >
            {form.fields.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand focus:ring-brand/20"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-semibold text-gray-800"
          >
            {form.fields.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-reference"
          className="mb-1.5 block text-sm font-semibold text-gray-800"
        >
          {form.fields.reference}
        </label>
        <input
          id="contact-reference"
          name="reference"
          type="text"
          className="block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand focus:ring-brand/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-gray-800"
        >
          {form.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-brand focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {form.submit}
      </button>
    </form>
  );
}
