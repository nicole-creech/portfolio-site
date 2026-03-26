export default function PortfolioHomepage() {
  const projects = [
    {
      title: "Secure API Observability Platform",
      blurb:
        "Built a dashboard and telemetry pipeline for tracking API health, latency, and failure trends across internal services.",
      impact: [
        "Reduced incident triage time by 40%",
        "Surfaced high-latency endpoints before customer impact",
        "Designed for secure access and scalable ingestion",
      ],
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Azure"],
    },
    {
      title: "Identity & Access Review Automation",
      blurb:
        "Created a workflow tool that streamlined access reviews and reduced manual audit preparation for internal teams.",
      impact: [
        "Cut manual review effort by 60%",
        "Improved traceability for security and compliance teams",
        "Standardized approval flows across multiple applications",
      ],
      stack: ["Java", "React", "REST APIs", "SQL"],
    },
    {
      title: "High-Performance Internal API",
      blurb:
        "Engineered a resilient internal API for high-volume transaction workflows with strong validation, monitoring, and reliability patterns.",
      impact: [
        "Handled high request throughput with stable performance",
        "Improved maintainability with typed contracts and reusable patterns",
        "Enabled faster feature delivery across dependent teams",
      ],
      stack: ["Java", "Spring Boot", "TypeScript", "AWS/Azure"],
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
              className="rounded-2xl bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] shadow-sm transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              Resume
            </a>
            <a
              href="https://github.com/nicole-creech"
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
            Selected Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Work that shows depth, ownership, and engineering judgment.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            This portfolio is built around projects with clear technical scope,
            measurable outcomes, and thoughtful tradeoffs—not vague feature
            lists.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {project.blurb}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Impact
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
            Let’s keep it simple.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            The best portfolios are clear and easy to navigate. Recruiters and
            hiring managers should understand your value in under a minute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/nicole-creech"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-creech-15563a160/"
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