export default function PortfolioHomepage() {
  const secureAuditLiveUrl = "https://secure-audit-explorer.vercel.app/";

  const projects = [
    {
      title: "Secure Audit Explorer",
      blurb:
        "Full-stack security investigation workspace for analyzing authentication, access, and privilege events. Built with Next.js, TypeScript, Prisma, SQLite, Tailwind, and Recharts, with investigation workflows, alert cases, notes, RBAC, and production-style authentication. Includes a live demo environment for exploring the product experience.",
      impact: [
        "Investigation workflow with notes, alert cases, and analyst-friendly triage",
        "Production-style authentication and role-based access control patterns",
        "Full-stack architecture with Prisma data modeling and analytics visualizations",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "SQLite",
        "Tailwind",
        "Recharts",
      ],
      github: "https://github.com/nicole-creech/secure-audit-explorer",
      live: secureAuditLiveUrl,
      status: "Live",
    },
    {
      title: "Scalable API Platform",
      blurb:
        "A production-style full-stack application focused on scalability, API design, and real-world engineering patterns.",
      impact: [
        "Built to showcase backend depth and system design thinking",
        "Will emphasize performance, maintainability, and clean architecture",
        "Planned as a polished portfolio piece with strong engineering tradeoffs",
      ],
      stack: ["In Progress"],
      github: "",
      live: "",
      status: "Coming Soon",
    },
    {
      title: "AI-First Engineering Tool",
      blurb:
        "A modern engineering project showcasing automation, practical AI-assisted workflows, and polished user experience.",
      impact: [
        "Designed to highlight practical AI-assisted engineering workflows",
        "Will focus on thoughtful UX and clear user value",
        "Planned as a modern, high-signal project for recruiters and hiring managers",
      ],
      stack: ["Coming Soon"],
      github: "",
      live: "",
      status: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-[var(--fg)]">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-sm font-semibold tracking-tight">
            Nicole Creech
          </div>

          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#projects" className="transition hover:text-[var(--fg)]">
              Projects
            </a>
            <a href="#about" className="transition hover:text-[var(--fg)]">
              About
            </a>
            <a href="#contact" className="transition hover:text-[var(--fg)]">
              Links
            </a>
            <a
              href="/playground"
              className="transition hover:text-[var(--fg)]"
            >
              Playground
            </a>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Full Stack Engineer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Full stack engineer specializing in secure, scalable systems and
            high-performance APIs.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            I build software that balances reliability, speed, and
            maintainability across backend services and modern web applications.
            My focus is building systems that are secure, resilient, and
            practical in real production environments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/playground"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              Creative Playground
            </a>

            <a
              href="/resume.pdf"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              Resume
            </a>

            <a
              href="https://github.com/nicole-creech"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Production-minded engineering focused on security, scale, and clean
            execution.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            This portfolio highlights projects with real technical depth,
            thoughtful implementation, and strong engineering signals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {project.blurb}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--fg)]">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
                  >
                    View Code
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[var(--border)] bg-[var(--card-2)]"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Engineer first. Security-minded by default.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--fg)]">
            <p>
              I’m a full stack engineer with experience building enterprise
              software in high-accountability environments. My background spans
              backend APIs, front-end application development, internal tools,
              and systems that need to be both reliable and secure.
            </p>
            <p>
              I care about clean architecture, thoughtful developer experience,
              and shipping solutions that solve real business problems. I’m
              especially interested in projects that sit at the intersection of
              software engineering, security, and scale.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[var(--border)] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Links
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Want to work together or just say hi? Find me on GitHub and LinkedIn.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            I’m focused on building secure, scalable software and thoughtful
            developer experiences across modern web applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/nicole-creech"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-creech-15563a160/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}