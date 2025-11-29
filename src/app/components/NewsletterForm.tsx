"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="rounded-2xl bg-white/10 p-5 shadow-[0_18px_38px_rgba(0,0,0,0.25)] backdrop-blur animate-rise"
      style={{ animationDelay: "0.1s" }}
    >
      <p className="text-lg font-semibold text-white">Newsletter</p>
      <p className="mt-1 text-sm text-white/75">Dapatkan update program dan materi baru.</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 flex-1 rounded-lg border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
          placeholder="Email Anda"
          type="email"
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-[#f9a826] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-[1px]"
        >
          Kirim
        </button>
      </form>
      {submitted && (
        <p className="mt-3 text-sm font-semibold text-amber-200" aria-live="polite">
          Terimakasih!
        </p>
      )}
      <p className="mt-2 text-xs text-white/70">Kami menjaga privasi dan tidak mengirim spam.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/80 sm:grid-cols-3">
        <div className="rounded-lg bg-white/10 p-3">
          <p className="font-semibold text-white">24/7</p>
          <p>Respons tim</p>
        </div>
        <div className="rounded-lg bg-white/10 p-3">
          <p className="font-semibold text-white">+9K</p>
          <p>Unduhan materi</p>
        </div>
        <div className="rounded-lg bg-white/10 p-3">
          <p className="font-semibold text-white">38</p>
          <p>Kabupaten dampingan</p>
        </div>
      </div>
    </div>
  );
}
