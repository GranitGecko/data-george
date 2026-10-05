import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Cloud, Code2, CreditCard, Database } from "lucide-react";

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

type Lang = "en" | "sv";

const t = {
  en: {
    navWork: "Work",
    navAbout: "About",
    talk: "Let's talk",
    available: "AVAILABLE FROM SEPTEMBER 2027",
    heroA: "Need a",
    heroB: "Developer?",
    intro:
      "Hi, I'm George, and I work as a web developer. I enjoy working with data, technical infrastructure, statistics, and mathematics.\n\nI also enjoy the human experience, especially the social and client-facing side.",
    documentsLabel: "Documents",
    selectedWork: "Portfolio",
    skillsKicker: "SKILLS",
    skillsTitle: "Egenskaper / Kunskaper",
    skillsIntro: "\n",
    open: "Open",
    aboutLabel: "ABOUT",
    portraitAlt: "Mara Voss at her desk",
    practice: "PRACTICAL",
    aboutTitle:
      "I build and maintain websystems",
    aboutBody:
      "For four years I've worked at the seam between design and engineering, shipping design systems, data-heavy tools, and mobile products for teams that care about craft. My work lives in the details: spacing, motion, and the honest handling of every edge case.",
    stats: ["Years shipping", "Products launched", "Design systems"],
    msgLabel: "WRITE A MESSAGE",
    msgTitle: "Lets reach out",
    msgBody: "Tell me what's up, let me know your thoughts or if I can help you with anything.",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    message: "Message",
    messagePh: "What are you working on?",
    formNote: "Opens your email app with the message ready to send",
    send: "Send message",
    subject: "Project inquiry from",
    contactLabel: "CONTACT",
    contactA: "Have a project in mind?",
    contactB: "",
    footer: "GEORGE SCHEDVIN — UTVECKLARE",
    projects: [
      { title: "Lumen Design System", meta: "Design tooling · 2024", tag: "Figma plugin" },
      { title: "Field — Data Platform", meta: "Product interface · 2023", tag: "Web app" },
      { title: "Tessera Mobile", meta: "Mobile product · 2023", tag: "iOS + Android" },
      { title: "Cadence Analytics", meta: "Internal tooling · 2022", tag: "Analytics" },
    ],
  },
  sv: {
    navWork: "Arbeten",
    navAbout: "Om mig",
    talk: "Hör av dig",
    available: "TILLGÄNGLIG FRÅN SEPTEMBER 2027",
    heroA: "Behöver ni en",
    heroB: "Utvecklare?",
    intro:
      "Hej, jag heter George och jag jobbar som en webbutvecklare. Jag uppskattar att jobba med data, teknisk infrastruktur, statistik och matematik. Jag uppskattar också den mänskliga sidan, speciellt det sociala när man kan jobba med klienter.",
    documentsLabel: "Dokument",
    selectedWork: "Portfölj",
    skillsKicker: "KOMPETENS",
    skillsTitle: "Egenskaper / Kunskaper",
    skillsIntro: "\n",
    open: "Öppna",
    aboutLabel: "OM MIG",
    portraitAlt: "Mara Voss vid sitt skrivbord",
    practice: "PRAKTISKT",
    aboutTitle: "Jag bygger och underhåller webblösningar",
    aboutBody:
      "I fyra år har jag jobbat och hoppat mellan design och utveckling, och levererat designsystem, datatunga verktyg och mobilprodukter för team som bryr sig om hantverket. Mitt arbete finns i detaljerna: avstånd, rörelse och en ärlig hantering av varje specialfall.",
    stats: ["ÅRS ERFARENHET", "Lanserade produkter", "SYSTEM"],
    msgLabel: "SKICKA ETT MEDDELANDE",
    msgTitle: "Hör av dig",
    msgBody: "Vad är det som händer? Dela med dig vad du tänker eller säg till om jag kan hjälpa till med något.",
    name: "Namn",
    namePh: "Ditt namn",
    email: "E-post",
    message: "Meddelande",
    messagePh: "Vad arbetar du med?",
    formNote: "Öppnar din e-postapp med meddelandet redo att skickas",
    send: "Skicka meddelande",
    subject: "Projektförfrågan från",
    contactLabel: "(d) Kontakt",
    contactA: "Har du ett projekt på gång?",
    contactB: "Låt oss bygga det.",
    footer: "GEORGE SCHEDVIN — UTVECKLARE",
    projects: [
      { title: "Lumen Design System", meta: "Designverktyg · 2024", tag: "Figma-plugin" },
      { title: "Field — Dataplattform", meta: "Produktgränssnitt · 2023", tag: "Webbapp" },
      { title: "Tessera Mobile", meta: "Mobilprodukt · 2023", tag: "iOS + Android" },
      { title: "Cadence Analytics", meta: "Internt verktyg · 2022", tag: "Analys" },
    ],
  },
};

const statValues = ["4+", "82+", "6"];

const documents = [
  { href: "/files/cv.pdf", en: "CV — Mara Voss", sv: "CV — Mara Voss" },
  {
    href: "/files/reference-letters.pdf",
    en: "Reference letters",
    sv: "Rekommendationsbrev",
  },
  {
    href: "/files/grades.pdf",
    en: "Grades & transcript",
    sv: "Betyg och studieförteckning",
  },
];

const skills = [
  {
    icon: Code2,
    chips: { en: ["React", "TypeScript", "JavaScript"], sv: ["React", "TypeScript", "JavaScript"] },
    en: { title: "The interface", line: "Where the click begins." },
    sv: { title: "Gränssnittet", line: "Där klicket börjar." },
  },
  {
    icon: Database,
    chips: { en: ["SQL", "Data modelling"], sv: ["SQL", "Datamodellering"] },
    en: { title: "The data", line: "Where the answers live." },
    sv: { title: "Datat", line: "Där svaren finns." },
  },
  {
    icon: Cloud,
    chips: { en: ["AWS", "Lambda", "S3"], sv: ["AWS", "Lambda", "S3"] },
    en: { title: "The infrastructure", line: "Where it keeps running." },
    sv: { title: "Infrastrukturen", line: "Där det hålls igång." },
  },
  {
    icon: CreditCard,
    chips: { en: ["Stripe", "Webhooks", "Payments"], sv: ["Stripe", "Betalväxlar", "Webhooks"] },
    en: { title: "Integration & payment", line: "Where money and data move." },
    sv: { title: "Integration & betalning", line: "Där pengar och data rör sig." },
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const c = t[lang];

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "sv" || saved === "en") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("sv")) setLang("sv");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${c.subject} ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:hello@maravoss.dev?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "border-b border-line bg-transparent py-2 text-lg outline-none transition-colors placeholder:text-ink/30 focus:border-brand";
  const labelCls = "font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50";

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-brand selection:text-soft">
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between border-b border-line px-5 sm:px-6 lg:px-12">
          <a href="/" className="shrink-0 whitespace-nowrap font-display text-sm font-extrabold tracking-tight sm:text-base lg:text-lg">
            George Schedvin<span className="text-brand">.</span>
          </a>
          <nav className="flex items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] sm:gap-8 sm:text-xs sm:tracking-[0.14em]">
            <a href="#work" className="transition-colors hover:text-brand">
              {c.navWork}
            </a>
            <a href="#about" className="transition-colors hover:text-brand">
              {c.navAbout}
            </a>
            <a href="#contact" className="transition-colors hover:text-brand">
              {c.talk}
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div
              role="group"
              aria-label="Language"
              className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em]"
            >
              {(["en", "sv"] as Lang[]).map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="text-ink/30">/</span>}
                  <button
                    type="button"
                    onClick={() => switchLang(l)}
                    aria-pressed={lang === l}
                    className={`transition-colors hover:text-brand ${lang === l ? "text-brand" : "text-ink/50"}`}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-2 lg:px-12 lg:pt-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 animate-[rise_0.5s_var(--ease-rise)_both]">
          <span className="size-2 rounded-full bg-brand"></span> {c.available}
        </div>
        <h1 className="mt-6 animate-[rise_0.7s_var(--ease-rise)_both] font-display text-[clamp(3.4rem,12vw,10rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-balance [animation-delay:80ms]">
          {c.heroA} <span className="text-brand">{c.heroB}</span>
        </h1>
        <div className="mt-10 grid animate-[rise_0.7s_var(--ease-rise)_both] grid-cols-1 items-end gap-6 [animation-delay:160ms] md:grid-cols-12">
          <p className="max-w-[46ch] text-lg text-ink/70 text-pretty md:col-span-7 md:text-xl">
            {c.intro}
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">{c.selectedWork}</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            2022 — 2027
          </span>
        </div>
        <ul className="mt-4">
          {c.projects.map((p, i) => (
            <li
              key={i}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 sm:gap-8"
            >
              <span className="font-mono text-xs text-ink/40 transition-colors group-hover:text-brand">
                {String(i + 1).padStart(2, "0")}
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
                  aria-label={`${c.open} ${p.title}`}
                  className="grid size-9 place-items-center rounded-full border border-ink/20 text-sm transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-soft"
                >
                  →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            {c.skillsTitle}
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            {c.skillsKicker}
          </span>
        </div>
        <p className="mt-4 max-w-[56ch] text-ink/70 text-pretty">{c.skillsIntro}</p>
        <div className="relative mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
          <span
            aria-hidden="true"
            className="absolute top-[22px] hidden h-px bg-brand/25 lg:left-[calc((100%-4.5rem)/8)] lg:right-[calc((100%-4.5rem)/8)] lg:block"
          />
          {skills.map((s, i) => {
            const Icon = s.icon;
            const last = i === skills.length - 1;
            return (
              <div
                key={s.en.title}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 grid size-11 place-items-center rounded-full border border-brand/30 bg-soft text-brand">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-8 left-1/2 h-8 w-px -translate-x-1/2 bg-brand/25 md:hidden"
                  />
                )}
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight md:text-xl">
                  {lang === "en" ? s.en.title : s.sv.title}
                </h3>
                <p className="mt-1 max-w-[26ch] text-sm text-ink/60 text-pretty">
                  {lang === "en" ? s.en.line : s.sv.line}
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {s.chips[lang].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              {c.aboutLabel}
            </span>
            <img
              src={portrait}
              alt={c.portraitAlt}
              width={1024}
              height={1280}
              loading="lazy"
              className="mt-4 aspect-[4/5] w-full rounded-[min(1vw,12px)] bg-soft object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              {c.practice}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl">
              {c.aboutTitle}
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg text-ink/70 text-pretty">{c.aboutBody}</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {c.stats.map((label, i) => (
                <div key={label}>
                  <div className="font-display text-3xl font-extrabold">{statValues[i]}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                    {label}
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
              {c.msgLabel}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-4xl">
              {c.msgTitle}
            </h2>
            <p className="mt-4 max-w-[40ch] text-ink/70 text-pretty">{c.msgBody}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={labelCls}>{c.name}</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={c.namePh}
                  className={inputCls}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelCls}>{c.email}</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className={inputCls}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className={labelCls}>{c.message}</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={c.messagePh}
                className={`resize-none ${inputCls}`}
              />
            </label>
            <div className="flex items-center justify-between gap-4">
              <span className="max-w-[32ch] font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40">
                {c.formNote}
              </span>
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-soft transition-colors hover:bg-brand-deep"
              >
                {c.send}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
            {c.contactLabel}
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-balance">
            {c.contactA} <span className="text-brand">{c.contactB}</span>
          </h2>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@maravoss.dev"
              className="rounded-full bg-brand px-7 py-4 font-mono text-sm text-soft transition-colors hover:bg-brand-deep sm:text-base"
            >
              hello@maravoss.dev
            </a>
            <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.14em] text-paper/70">
              <a href="#" className="transition-colors hover:text-brand">GitHub</a>
              <a href="#" className="transition-colors hover:text-brand">LinkedIn</a>
              <a href="#" className="transition-colors hover:text-brand">Read.cv</a>
            </div>
          </div>
          <div className="mt-14 border-t border-paper/15 pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40">
              {c.documentsLabel}
            </span>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              {documents.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-brand"
                >
                  <span aria-hidden="true" className="text-paper/40 group-hover:text-brand">
                    ↓
                  </span>
                  {lang === "en" ? d.en : d.sv}
                  <span aria-hidden="true" className="text-[10px] text-paper/35">
                    PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-paper/15 bg-ink text-paper">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50 lg:px-12">
          <span>{c.footer}</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
