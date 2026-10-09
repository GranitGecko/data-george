import { useEffect, useState, type MouseEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Button } from "@/components/ui/button";
import { CodeText, DesignSwitcher, designs } from "@/components/design-switcher";
import { Cloud, Code2, CreditCard, Database, Moon, Sun } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "George S — Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of George S, a web developer working with React, AWS, SQL and Stripe integrations.",
      },
      { property: "og:title", content: "George S — Web Developer" },
      { property: "og:description", content: "Need a developer? Portfolio of George S." },
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
    available: "AVAILABLE FOR WORK",
    heroA: "Need a",
    heroB: "Developer?",
    intro:
      "Hi, I'm George, and I work as a web developer. I enjoy working with data, technical infrastructure, statistics, and mathematics.\n\nI also enjoy the human experience, especially the social and client-facing side.",
    documentsLabel: "Documents",
    selectedWork: "Portfolio",
    skillsKicker: "SKILLS",
    skillsTitle: "Egenskaper",
    skillsIntro: "\n",
    open: "Open",
    aboutLabel: "ABOUT",
    portraitAlt: "Portrait of George S",
    practice: "PRACTICAL",
    aboutTitle:
      "I build and maintain websystems",
    aboutBody:
      "For four years I've worked at the seam between design and engineering, shipping design systems, data-heavy tools, and mobile products for teams that care about craft. My work lives in the details: spacing, motion, and the honest handling of every edge case.",
    stats: ["Years shipping", "Products launched"],
    cta: "Let's talk",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    cookieTitle: "Cookies",
    cookieText: "This site uses anonymous visitor stats, no tracking cookies.",
    cookieOk: "Got it",
    contactLabel: "CONTACT",
    contactA: "Have a project in mind?",
    contactB: "",
    footer: "GEORGE S — UTVECKLARE",
    projects: [
      { title: "Lumen Design System", meta: "Concept project · 2024", tag: "Figma plugin" },
      { title: "Field — Data Platform", meta: "Concept project · 2023", tag: "Web app" },
      { title: "Tessera Mobile", meta: "Concept project · 2023", tag: "iOS + Android" },
      { title: "Design", meta: "2026", tag: "Design" },
    ],
  },
  sv: {
    navWork: "Arbeten",
    navAbout: "Om mig",
    talk: "Hör av dig",
    available: "TILLGÄNGLIG FÖR ARBETE",
    heroA: "Behöver ni en",
    heroB: "Utvecklare?",
    intro:
      "Hej, jag heter George och jag jobbar som en webbutvecklare. Jag uppskattar att jobba med data, teknisk infrastruktur, statistik och matematik. Jag uppskattar också den mänskliga sidan, speciellt det sociala när man kan jobba med klienter.",
    documentsLabel: "Dokument",
    selectedWork: "Portfölj",
    skillsKicker: "KOMPETENS",
    skillsTitle: "Egenskaper",
    skillsIntro: "\n",
    open: "Öppna",
    aboutLabel: "OM MIG",
    portraitAlt: "Porträtt av George S",
    practice: "PRAKTISKT",
    aboutTitle: "Jag bygger och underhåller webblösningar",
    aboutBody:
      "I fyra år har jag jobbat och hoppat mellan design och utveckling, och levererat designsystem, datatunga verktyg och mobilprodukter för team som bryr sig om hantverket. Mitt arbete finns i detaljerna: avstånd, rörelse och en ärlig hantering av varje specialfall.",
    stats: ["ÅRS ERFARENHET", "Lanserade produkter"],
    cta: "Hör av dig",
    darkMode: "Mörkt läge",
    lightMode: "Ljust läge",
    cookieTitle: "Cookies",
    cookieText: "Sidan använder anonym besöksstatistik, inga spårningscookies.",
    cookieOk: "Okej",
    contactLabel: "Kontakt",
    contactA: "Har du ett projekt på gång?",
    contactB: "Låt oss bygga det.",
    footer: "GEORGE S — UTVECKLARE",
    projects: [
      { title: "Lumen Design System", meta: "Stockprojekt · 2024", tag: "Figma-plugin" },
      { title: "Field — Dataplattform", meta: "Stockprojekt · 2023", tag: "Webbapp" },
      { title: "Tessera Mobile", meta: "Stockprojekt · 2023", tag: "iOS + Android" },
      { title: "Design", meta: "2026", tag: "Design" },
    ],
  },
};

const statValues = ["4+", "82+", "6"];

const documents = [
  { href: "/files/cv.pdf", en: "CV — George S", sv: "CV — George S" },
  {
    href: "/files/reference-letters.pdf",
    en: "Reference letters",
    sv: "Rekommendationsbrev",
  },
  {
    href: "/files/grades.pdf",
    en: "Grades",
    sv: "Betyg",
  },
  {
    href: "/files/europass-exam-sv+en.pdf",
    en: "Europass Qualification supplement",
    sv: "Europass Kvalifikationstillägg",
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
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCookies, setShowCookies] = useState(false);
  const [active, setActive] = useState("");
  const [designOpened, setDesignOpened] = useState(false);
  const [design, setDesign] = useState("original");
  const [designUsed, setDesignUsed] = useState(false);
  const codeMode = design === "vscode";
  const c = t[lang];

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "sv" || saved === "en") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("sv")) setLang("sv");
    setDark(document.documentElement.classList.contains("dark"));
    setShowCookies(localStorage.getItem("cookies") !== "ok");
    const savedDesign = localStorage.getItem("portfolio-design");
    if (designs.some((item) => item.id === savedDesign) && savedDesign) {
      setDesign(savedDesign);
      setDesignOpened(savedDesign !== "original");
      setDesignUsed(savedDesign !== "original");
    }
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  // Smooth scroll + short "pulse" on the clicked nav link
  const goTo = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setActive(hash);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", hash);
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const acceptCookies = () => {
    localStorage.setItem("cookies", "ok");
    setShowCookies(false);
  };

  const changeDesign = (next: string) => {
    setDesign(next);
    localStorage.setItem("portfolio-design", next);
  };

  const openDesigns = () => {
    setDesignOpened((previous) => !previous);
    setDesignUsed(true);
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const navLinks = [
    { hash: "#work", label: c.navWork },
    { hash: "#about", label: c.navAbout },
    { hash: "#contact", label: c.talk },
  ];

  return (
    <div data-design={design} className={`portfolio-page ${designOpened ? "designs-open" : ""} min-h-screen bg-paper font-sans text-ink antialiased selection:bg-brand selection:text-soft`}>
      {loading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-paper" aria-label="Loading">
          <span className="size-10 animate-spin rounded-full border-2 border-brand/25 border-t-brand" />
        </div>
      )}

      <header className="portfolio-header sticky top-0 z-40 bg-paper/85 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between border-b border-line px-5 sm:px-6 lg:px-12">
          <a href="/" className="shrink-0 whitespace-nowrap font-display text-sm font-extrabold tracking-tight sm:text-base lg:text-lg">
            George S<span className="text-brand">.</span>
          </a>
          <nav className="flex items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] sm:gap-8 sm:text-xs sm:tracking-[0.14em]">
            {navLinks.map((l) => (
              <a
                key={l.hash + active}
                href={l.hash}
                onClick={(e) => goTo(e, l.hash)}
                className={`nav-link ${active === l.hash ? "is-active" : ""}`}
              >
                <CodeText enabled={codeMode} name="goTo" compact>{l.label}</CodeText>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? c.lightMode : c.darkMode}
              className="grid size-8 place-items-center rounded-full text-ink/60 transition-colors hover:text-brand"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
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
        {designOpened && <DesignSwitcher design={design} onChange={changeDesign} onClose={() => setDesignOpened(false)} lang={lang} />}
        {codeMode && <div className="editor-tab"><Code2 size={14} aria-hidden="true" /> george.portfolio.jsx <span>●</span></div>}
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-2 lg:px-12 lg:pt-24">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 animate-[rise_0.5s_var(--ease-rise)_both]">
          <span className="size-2 rounded-full bg-brand"></span> <CodeText enabled={codeMode} name="status" compact>{c.available}</CodeText>
        </div>
        <h1 className="mt-6 animate-[rise_0.7s_var(--ease-rise)_both] font-display text-[clamp(3.4rem,12vw,10rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-balance [animation-delay:80ms]">
          {codeMode ? <CodeText enabled name="George">{`${c.heroA} ${c.heroB}`}</CodeText> : <>{c.heroA} <span className="text-brand">{c.heroB}</span></>}
        </h1>
        <div className="mt-10 grid animate-[rise_0.7s_var(--ease-rise)_both] grid-cols-1 items-end gap-6 [animation-delay:160ms] md:grid-cols-12">
          <p className="max-w-[46ch] text-lg text-ink/70 text-pretty md:col-span-7 md:text-xl">
            <CodeText enabled={codeMode} name="introduction">{c.intro}</CodeText>
          </p>
        </div>
        <a
          href="#contact"
          onClick={(e) => goTo(e, "#contact")}
          className="mt-8 inline-flex animate-[rise_0.7s_var(--ease-rise)_both] items-center gap-2 rounded-full bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-soft transition-all [animation-delay:240ms] hover:gap-4 hover:bg-brand-deep"
        >
          <CodeText enabled={codeMode} name="contact" compact>{c.cta}</CodeText> <span aria-hidden="true">→</span>
        </a>
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight"><CodeText enabled={codeMode} name="portfolio" compact>{c.selectedWork}</CodeText></h2>
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
                  <CodeText enabled={codeMode} name="project" compact>{i === 3 && designUsed ? "design..." : p.title}</CodeText>
                </a>
                <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  <CodeText enabled={codeMode} compact>{i === 3 && designUsed ? new Date().getFullYear().toString() : p.meta}</CodeText>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40 md:inline">
                  {p.tag}
                </span>
                {i === 3 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={openDesigns}
                    aria-expanded={designOpened}
                    aria-controls="design-switcher"
                    aria-label={`${c.open} ${p.title}`}
                    className="size-9 rounded-full border border-ink/20 text-ink hover:border-brand hover:bg-brand hover:text-soft"
                  >
                    →
                  </Button>
                ) : (
                <a
                  href="#work"
                  aria-label={`${c.open} ${p.title}`}
                  className="grid size-9 place-items-center rounded-full border border-ink/20 text-sm transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-soft"
                >
                  →
                </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
              <CodeText enabled={codeMode} name="skills" compact>{c.skillsTitle}</CodeText>
          </h2>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
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
                  <CodeText enabled={codeMode} name="skill" compact>{lang === "en" ? s.en.title : s.sv.title}</CodeText>
                </h3>
                <p className="mt-1 max-w-[26ch] text-sm text-ink/60 text-pretty">
                  <CodeText enabled={codeMode} compact>{lang === "en" ? s.en.line : s.sv.line}</CodeText>
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {s.chips[lang].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60"
                    >
                      <CodeText enabled={codeMode} compact>{chip}</CodeText>
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
              <CodeText enabled={codeMode} name="section" compact>{c.aboutLabel}</CodeText>
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
              <CodeText enabled={codeMode} compact>{c.practice}</CodeText>
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl">
              <CodeText enabled={codeMode} name="about">{c.aboutTitle}</CodeText>
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg text-ink/70 text-pretty"><CodeText enabled={codeMode} name="experience">{c.aboutBody}</CodeText></p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {c.stats.map((label, i) => (
                <div key={label}>
                  <div className="font-display text-3xl font-extrabold">{statValues[i]}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                    <CodeText enabled={codeMode} compact>{label}</CodeText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 bg-panel text-panel-fg">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-panel-fg/50">
            <CodeText enabled={codeMode} name="section" compact>{c.contactLabel}</CodeText>
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-balance">
            {codeMode ? <CodeText enabled name="contact">{`${c.contactA} ${c.contactB}`.trim()}</CodeText> : <>{c.contactA} <span className="text-brand">{c.contactB}</span></>}
          </h2>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="mailto:george.schedvin@gmail.com"
              className="rounded-full bg-brand px-7 py-4 font-mono text-sm text-soft transition-colors hover:bg-brand-deep sm:text-base"
            >
              <CodeText enabled={codeMode} name="mailto" compact>george.schedvin@gmail.com</CodeText>
            </a>
            <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.14em] text-panel-fg/70">
              <a href="https://github.com/GranitGecko" className="transition-colors hover:text-brand">GitHub</a>
              <a href="https://se.linkedin.com/in/george-s-63b56924a" className="transition-colors hover:text-brand">LinkedIn</a>
              {/* <a href="#" className="transition-colors hover:text-brand">Read.cv</a> */}
            </div>
          </div>
          <div className="mt-14 border-t border-panel-fg/15 pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-panel-fg/40">
              <CodeText enabled={codeMode} name="documents" compact>{c.documentsLabel}</CodeText>
            </span>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              {documents.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-panel-fg/70 transition-colors hover:text-brand"
                >
                  <span aria-hidden="true" className="text-panel-fg/40 group-hover:text-brand">
                    ↓
                  </span>
                  <CodeText enabled={codeMode} name="download" compact>{lang === "en" ? d.en : d.sv}</CodeText>
                  <span aria-hidden="true" className="text-[10px] text-panel-fg/35">
                    PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-panel-fg/15 bg-panel text-panel-fg">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.14em] text-panel-fg/50 lg:px-12">
          <span><CodeText enabled={codeMode} compact>{c.footer}</CodeText></span>
          <span>© 2026</span>
        </div>
      </footer>

      {showCookies && (
        <div
          role="dialog"
          aria-label={c.cookieTitle}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl animate-[rise_0.5s_var(--ease-rise)_both] flex-col gap-3 rounded-2xl border border-line bg-soft p-5 shadow-lg sm:flex-row sm:items-center"
        >
          <p className="flex-1 text-sm text-ink/70"><CodeText enabled={codeMode} compact>{c.cookieText}</CodeText></p>
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-brand px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-soft transition-colors hover:bg-brand-deep"
          >
            {c.cookieOk}
          </button>
        </div>
      )}
    </div>
  );
}
