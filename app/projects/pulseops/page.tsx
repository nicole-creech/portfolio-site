// src/app/projects/pulseops/page.tsx
import Link from "next/link";
export default function PulseOpsPage() {
  const githubUrl = "https://github.com/nicole-creech/pulseops";
  const diagramUrl = "/images/pulseops-architecture-diagram-v2.svg";

  const systemConcepts = [
    {
      title: "Webhook Signature Verification",
      description:
        "Incoming webhook requests are validated before processing to protect the platform from forged or tampered events.",
    },
    {
      title: "Idempotent Processing",
      description:
        "Duplicate deliveries are handled safely so the same event does not trigger unintended repeated work.",
    },
    {
      title: "Retry with Exponential Backoff",
      description:
        "Transient delivery failures are retried on a schedule that reduces pressure on downstream systems while improving delivery success.",
    },
    {
      title: "Dead-Letter Handling",
      description:
        "Events that cannot be delivered successfully after retry attempts are isolated for investigation and recovery.",
    },
    {
      title: "Event Processing Pipeline",
      description:
        "The platform is structured around ingestion, validation, persistence, scheduling, and delivery concerns to reflect real production system boundaries.",
    },
  ];

  const engineeringDecisions = [
    "Designed retry behavior to improve delivery reliability without creating unnecessary duplicate processing pressure.",
    "Modeled the system around production-grade webhook patterns such as idempotency, event durability, and failure isolation.",
    "Structured responsibilities into clear backend flows so the platform is easier to reason about, extend, and operate.",
  ];

  const stack = [
    "C#",
    ".NET",
    "Web APIs",
    "Background Services",
    "Webhook Processing",
    "Distributed Systems",
  ];

  return (
    <main className="min-h-screen bg-transparent text-[var(--fg)]">
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition hover:opacity-70"
        >
          ← Home
        </Link>

        <Link
          href="/#projects"
          className="text-sm text-[var(--muted)] transition hover:text-[var(--fg)]"
        >
          Back to Projects
        </Link>
      </div>
    </section>
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            System Design Case Study
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            PulseOps
          </h1>

          <p className="mt-4 text-lg leading-8 text-[var(--muted)] md:text-xl">
            Production-grade webhook processing platform
          </p>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--fg)] md:text-lg">
            PulseOps is a backend API platform designed for secure, high-volume
            webhook ingestion and delivery. It models real-world payment
            infrastructure patterns like signature verification, idempotency,
            retry pipelines, and dead-letter handling.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              View GitHub
            </a>

            <a
              href="#architecture"
              className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
            >
              View Architecture
            </a>
          </div>
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Architecture Diagram
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            System overview
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm md:p-8">
          <img
            src={diagramUrl}
            alt="PulseOps architecture diagram"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Core Concepts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Reliability-focused backend patterns
            </h2>

            <div className="mt-8 grid gap-4">
              {systemConcepts.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Engineering Decisions
              </p>

              <ul className="mt-4 space-y-3 text-sm text-[var(--fg)]">
                {engineeringDecisions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Tech Stack
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Project Links
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--fg)] transition hover:-translate-y-0.5"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}