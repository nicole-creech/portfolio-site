import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Motes from "./components/Motes";
import TopBar from "./components/TopBar";
import Wisp, { Zs } from "./components/Wisp";

const icon = (paths: React.ReactNode) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--lavender)"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths}
  </svg>
);

const CAPABILITIES = [
  {
    title: "Secure systems",
    body: "Access control, audit trails, signature verification and idempotent APIs. Backed by an M.S. in Cybersecurity.",
    icon: icon(
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>,
    ),
  },
  {
    title: "Reliable backends",
    body: "REST APIs and microservices for high-volume financial systems, plus the observability that cut MTTR 30%.",
    icon: icon(
      <>
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
        <path d="M8 7h.01M8 17h.01" />
      </>,
    ),
  },
  {
    title: "AI-assisted engineering",
    body: "Two years shipping production code with GitHub Copilot and Claude Code, plus agent workflows I set up myself with MCP tools and project context files.",
    icon: icon(
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
        <circle cx="12" cy="12" r="3" />
      </>,
    ),
  },
  {
    title: "AI security",
    body: "How AI systems get attacked, from poisoned training data to malicious model files, and how to defend them.",
    link: { href: "/writing/data-poisoning", label: "Read the essay →" },
    icon: icon(
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </>,
    ),
  },
];

const AUDIT_FEATURES = [
  "Role-aware access: admin, analyst, viewer",
  "Session expiry and inactivity logout",
  "Audit event search and filtering",
  "Detection rules and alert cases",
  "Investigation notes and event tagging",
  "Passwords hashed with bcrypt",
];

const EXPERIENCE = [
  {
    org: "JPMorgan Chase & Co.",
    dates: "SEP 2022 – PRESENT",
    role: "Senior Associate Software Engineer, Full Stack",
    body: "Lead enterprise REST APIs for high-volume financial systems. Cut MTTR 30% through observability work, and ship with security and product teams through CI/CD.",
  },
  {
    org: "Kroger",
    dates: "MAR 2019 – SEP 2022",
    role: "Site Reliability Engineer",
    body: "Redesigned deployment and release processes, cutting change failure rate 27%. Strengthened monitoring, automation and incident response.",
  },
  {
    org: "Adecco · Procter & Gamble",
    dates: "DEC 2017 – MAR 2019",
    role: "Computer Programmer",
    body: "Built internal tools in C#, Python and SQL. Automated workflows and reporting that saved about $120K a year.",
  },
];

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Motes />
      <TopBar />

      <main>
        <Hero />

        <section id="capabilities" className="wrap" style={{ paddingBottom: 120 }}>
          <p className="eyebrow">WHAT I DO</p>
          <h2 className="h2" style={{ marginBottom: 40 }}>
            Four things I&apos;m good at
          </h2>
          <div className="grid-fit" style={{ ["--min" as string]: "250px" }}>
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card" style={{ padding: "clamp(22px, 3vw, 28px)" }}>
                {c.icon}
                <h3 className="h3" style={{ marginTop: 16, fontSize: 22 }}>
                  {c.title}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: 15, color: "var(--body)" }}>
                  {c.body}
                  {c.link && (
                    <>
                      {" "}
                      <Link href={c.link.href} style={{ color: "var(--lavender)", whiteSpace: "nowrap" }}>
                        {c.link.label}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="wrap section">
          <p className="eyebrow">01 · CASE FILES</p>
          <h2 className="h2">Selected work</h2>
          <p className="lede">Two systems I designed end to end: the problem, the decision that mattered, and what&apos;s under the hood.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <article className="card case">
              <div className="peek" aria-hidden="true">
                <div className="pk">
                  <Wisp size={72} />
                </div>
              </div>
              <div>
                <p className="eyebrow" style={{ color: "var(--blush)" }}>
                  LIVE · SECURITY TOOLING
                </p>
                <h3 className="h3" style={{ fontSize: 34 }}>
                  Secure Audit Explorer
                </h3>
                <p style={{ margin: "14px 0 0", color: "var(--body)" }}>
                  An investigation workspace for authentication, access and privilege events, modeled on the internal
                  tools security and compliance teams use to trace suspicious activity.
                </p>
                <dl className="facts">
                  <dt>Problem</dt>
                  <dd>Audit events pile up across systems, and analysts need one place to search them, raise alerts and record what they found.</dd>
                  <dt>Key decision</dt>
                  <dd>Lock the investigation tool itself down: role-scoped access, hashed credentials and sessions that expire on inactivity.</dd>
                  <dt>Stack</dt>
                  <dd>Next.js, TypeScript, Prisma, PostgreSQL (Neon), Auth.js, Recharts</dd>
                </dl>
                <div className="btn-row">
                  <a className="btn btn-primary" href="https://secure-audit-explorer.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Live demo
                  </a>
                  <a className="btn btn-ghost" href="https://github.com/nicole-creech/secure-audit-explorer" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
              <div className="panel" style={{ padding: "24px 28px" }}>
                <p className="eyebrow" style={{ color: "var(--muted)" }}>
                  WHAT&apos;S INSIDE
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {AUDIT_FEATURES.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--body)" }}>
                      <span aria-hidden="true" style={{ color: "var(--lavender)", fontFamily: "var(--font-mono)" }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="card case">
              <div>
                <p className="eyebrow" style={{ color: "var(--blush)" }}>
                  SHIPPED · DISTRIBUTED SYSTEMS
                </p>
                <h3 className="h3" style={{ fontSize: 34 }}>
                  PulseOps
                </h3>
                <p style={{ margin: "14px 0 0", color: "var(--body)" }}>
                  A webhook platform modeled on Stripe and PayPal. Every request is signature-verified and idempotent;
                  failures retry with exponential backoff and land in a dead-letter queue instead of disappearing.
                </p>
                <dl className="facts">
                  <dt>Problem</dt>
                  <dd>Forged or replayed webhooks, and events lost when a consumer goes down.</dd>
                  <dt>Key decision</dt>
                  <dd>Retries that raise delivery success without piling duplicate work onto downstream systems.</dd>
                  <dt>Stack</dt>
                  <dd>C#, .NET, Web APIs, background services</dd>
                </dl>
                <div className="btn-row">
                  <Link className="btn btn-primary" href="/projects/pulseops">
                    System design
                  </Link>
                  <a className="btn btn-ghost" href="https://github.com/nicole-creech/pulseops" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
              <Link href="/projects/pulseops#architecture" className="panel" style={{ display: "block", background: "#fff", padding: 12 }}>
                <Image
                  src="/images/pulseops-architecture-diagram-v2.svg"
                  alt="PulseOps architecture: ingestion, signature verification, persistence, retry scheduling and dead-letter handling"
                  width={1700}
                  height={1080}
                  unoptimized
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Link>
            </article>
          </div>
        </section>

        <section id="writing" className="wrap section">
          <p className="eyebrow">02 · WRITING</p>
          <h2 className="h2" style={{ marginBottom: 40 }}>
            Notes from the haunted side of security
          </h2>
          <Link className="card" href="/writing/data-poisoning" style={{ padding: "clamp(28px, 4vw, 44px)" }}>
            <p className="eyebrow" style={{ color: "var(--blush)" }}>
              AI SECURITY · NOV 2026 · 9 MIN READ
            </p>
            <h3 className="h3" style={{ maxWidth: 820, fontSize: "clamp(28px, 3.4vw, 40px)" }}>
              Data poisoning: how attackers corrupt the data your models learn from
            </h3>
            <p style={{ margin: "16px 0 0", maxWidth: 720, color: "var(--body)" }}>
              Five real cases, from Microsoft Tay to malicious models on Hugging Face, and the controls I&apos;d put in
              place on a real team.
            </p>
            <p style={{ margin: "24px 0 0", fontWeight: 600, color: "var(--lavender)" }}>Read the essay →</p>
          </Link>
        </section>

        <section id="experience" className="wrap section">
          <p className="eyebrow">03 · EXPERIENCE</p>
          <h2 className="h2" style={{ marginBottom: 40 }}>
            8+ years, three teams
          </h2>
          <ol className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={job.org}>
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>{job.org}</p>
                  <p style={{ margin: "2px 0 0", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>{job.dates}</p>
                </div>
                <div className="role">
                  <p style={{ margin: 0, fontWeight: 600 }}>{job.role}</p>
                  <p style={{ margin: "6px 0 0", color: "var(--body)" }}>{job.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="playground" className="wrap section">
          <p className="eyebrow">04 · PLAYGROUND</p>
          <h2 className="h2">Things I build for fun</h2>
          <p className="lede">Where I play with interaction design and developer experience. Wisp lives here, mostly.</p>
          <div className="grid-fit" style={{ ["--min" as string]: "340px", gap: 28 }}>
            <article className="card" style={{ padding: "clamp(24px, 4vw, 36px)" }}>
              <div
                className="panel"
                style={{ height: 180, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "center", border: 0 }}
              >
                <span className="bob" style={{ display: "block", filter: "drop-shadow(0 0 20px rgba(185,166,255,.45))" }}>
                  <Wisp size={120} />
                </span>
              </div>
              <p className="eyebrow" style={{ color: "var(--blush)" }}>
                LIVE · VS CODE EXTENSION
              </p>
              <h3 className="h3" style={{ fontSize: 28 }}>
                Pocket Ghost
              </h3>
              <p style={{ margin: "10px 0 0", color: "var(--body)" }}>
                A ghost companion for coding sessions. Wisp follows your cursor, reacts to your work and keeps you
                company in focus mode. Ships as a web app and a VS Code extension.
              </p>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <a className="btn btn-primary" href="https://pocket-ghost.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Meet Wisp
                </a>
                <a className="btn btn-ghost" href="https://github.com/nicole-creech/pocket-ghost" target="_blank" rel="noopener noreferrer">
                  Extension
                </a>
              </div>
            </article>

            <article className="card" style={{ padding: "clamp(24px, 4vw, 36px)" }}>
              <p className="eyebrow" style={{ color: "var(--muted)" }}>
                INDEPENDENT · DETAILS ON REQUEST
              </p>
              <h3 className="h3" style={{ fontSize: 28 }}>
                Solo game development
              </h3>
              <p style={{ margin: "10px 0 0", color: "var(--body)" }}>
                I run a small independent game studio on my own, from design and engineering to tooling and release.
              </p>
              <ul style={{ margin: "16px 0 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, color: "var(--body)", fontSize: 15 }}>
                <li>Unity and C#, end to end</li>
                <li>Agent-driven workflow with Claude Code and MCP tools for repetitive dev work</li>
              </ul>
              <p style={{ margin: "16px 0 0", fontSize: 14, color: "var(--muted)" }}>Studio and titles shared privately in interviews.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="wrap" style={{ paddingTop: 40, paddingBottom: 96 }}>
          <div className="card" style={{ padding: "clamp(28px, 5vw, 56px) clamp(24px, 5vw, 48px)" }}>
            <p className="eyebrow">05 · SAY HELLO</p>
            <h2 className="h2" style={{ maxWidth: 760 }}>
              Building something that has to be trustworthy? Let&apos;s talk.
            </h2>
            <div className="btn-row" style={{ marginTop: 36 }}>
              <a className="btn btn-primary" href="mailto:creech.ns@gmail.com">
                creech.ns@gmail.com
              </a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/nicole-creech-15563a160/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href="https://github.com/nicole-creech" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div style={{ marginTop: 72, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ position: "relative", display: "block", transform: "rotate(-8deg)", opacity: 0.8, filter: "drop-shadow(0 0 8px rgba(185,166,255,.4))" }}>
              <Wisp size={48} lid={0.12} />
              <Zs fontSize={12} style={{ right: -6, top: -8 }} />
            </span>
            <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--faint)" }}>
              © 2026 Nicole Creech · wisp is napping · from pocket ghost
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
