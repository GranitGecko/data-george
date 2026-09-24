import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Voss — Software Developer & Interface Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mara Voss, a product & interface engineer building calm, considered software.",
      },
      { property: "og:title", content: "Mara Voss — Software Developer" },
      { property: "og:description", content: "Software, made with intention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    num: "01",
    title: "Lumen Design System",
    meta: "Design tooling · 2024",
    tag: "Figma plugin",
  },
  {
    num: "02",
    title: "Field — Data Platform",
    meta: "Product interface · 2023",
    tag: "Web app",
  },
  {
    num: "03",
    title: "Tessera Mobile",
    meta: "Mobile product · 2023",
    tag: "iOS + Android",
  },
  {
    num: "04",
    title: "Cadence Analytics",
    meta: "Internal tooling · 2022",
    tag: "Analytics",
  },
];

const stats = [
  { value: "8+", label: "Years shipping" },
  { value: "40+", label: "Products launched" },
  { value: "6", label: "Design systems" },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:hello@maravoss.dev?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-brand selection:text-soft">
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between border-b border-line px-6 lg:px-12">
          <a href="/" className="font-display text-lg font-extrabold tracking-tight">
            Mara Voss<span className="text-brand">.</span>
          </a>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.14em] sm:flex">
            <a href="#work" className="transition-colors hover:text-brand">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-brand">
              About
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-brand hover:text-soft"
          >
            Let's talk
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 lg:px-12 lg:pt-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 animate-[rise_0.5s_var(--ease-rise)_both]">
          <span className="size-2 rounded-full bg-brand"></span> Available for
          select projects — 2025
        </div>
        <h1 className="mt-6 animate-[rise_0.7s_var(--ease-rise)_both] font-display text-[clamp(3.4rem,12vw,10rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-balance [animation-delay:80ms]">
          Software, made with <span className="text-brand">intention.</span>
        </h1>
        <div className="mt-10 grid animate-[rise_0.7s_var(--ease-rise)_both] grid-cols-1 items-end gap-6 [animation-delay:160ms] md:grid-cols-12">
          <p className="max-w-[46ch] text-lg text-ink/70 text-pretty md:col-span-7 md:text-xl">
            I'm Mara — a product &amp; interface engineer who turns complex
            systems into interfaces that feel inevitable, considered, and
            quietly engineered to the last detail.
          </p>
          <div className="flex gap-3 md:col-span-5 md:justify-end">
            <a
              href="#work"
              className="rounded-full bg-brand px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-soft transition-colors hover:bg-brand-deep"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-paper"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Selected work
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            2022 — 2025
          </span>
        </div>
        <ul className="mt-4">
          {projects.map((p) => (
            <li
              key={p.num}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 sm:gap-8"
            >
              <span className="font-mono text-xs text-ink/40 transition-colors group-hover:text-brand">
                {p.num}
              </span>
              <div className="flex flex-col">
                <a
                  href="#work"
                  className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand md:text-4xl"
                >
                  {p.title}
                </a>
                <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  {p.meta}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40 md:inline">
                  {p.tag}
                </span>
                <a
                  href="#work"
                  aria-label={`Open ${p.title}`}
                  className="grid size-9 place-items-center rounded-full border border-ink/20 text-sm transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-soft"
                >
                  →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              (a) About
            </span>
            <img
              src={portrait}
              alt="Mara Voss at her desk"
              width={1024}
              height={1280}
              loading="lazy"
              className="mt-4 aspect-[4/5] w-full rounded-[min(1vw,12px)] bg-soft object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              (b) The practice
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl">
              I build the quiet parts of software — the interfaces that make
              products feel considered.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg text-ink/70 text-pretty">
              For eight years I've worked at the seam between design and
              engineering, shipping design systems, data-heavy tools, and
              mobile products for teams that care about craft. My work lives in
              the details: spacing, motion, and the honest handling of every
              edge case.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold">{s.value}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="message" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              (c) Write a message
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-4xl">
              Tell me what you're building.
            </h2>
            <p className="mt-4 max-w-[40ch] text-ink/70 text-pretty">
              A few lines about your project is plenty — I'll get back to you
              within a couple of days.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Name
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="border-b border-line bg-transparent py-2 text-lg outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="border-b border-line bg-transparent py-2 text-lg outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you working on?"
                className="resize-none border-b border-line bg-transparent py-2 text-lg outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
              />
            </label>
            <div className="flex items-center justify-between gap-4">
              <span className="max-w-[32ch] font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40">
                Opens your email app with the message ready to send
              </span>
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-soft transition-colors hover:bg-brand-deep"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
            (d) Contact
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-balance">
            Have a project in mind? <span className="text-brand">Let's build it.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@maravoss.dev"
              className="rounded-full bg-brand px-7 py-4 font-mono text-sm text-soft transition-colors hover:bg-brand-deep sm:text-base"
            >
              hello@maravoss.dev
            </a>
            <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.14em] text-paper/70">
              <a href="#" className="transition-colors hover:text-brand">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-brand">
                Read.cv
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-paper/15 bg-ink text-paper">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50 lg:px-12">
          <span>Mara Voss — Interface Engineer</span>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
}
