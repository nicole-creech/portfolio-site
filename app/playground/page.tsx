import Image from "next/image";
import Link from "next/link";

const creativeProjects = [
  {
    title: "Pocket Ghost",
    status: "Live",
    description:
      "A tiny ghost companion for coding sessions, available as both a web experience and a downloadable VS Code extension. Pocket Ghost reacts to your behavior, follows your cursor, and brings a little personality into the developer experience in a way that feels playful, calm, and surprisingly comforting.",
    vibe: [
      "Interactive web app and installable VS Code extension",
      "Cursor-following eyes, ambient behavior, moods, and reactions",
      "Focus mode and playful interactions designed to make coding feel less lonely",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind",
      "VS Code Extension",
      "Extension API",
    ],
    github: "https://github.com/nicole-creech/pocket-ghost",
    live: "https://pocket-ghost.vercel.app/",
  },
  {
    title: "More Tiny Experiments",
    status: "Coming Soon",
    description:
      "This space is for the weird, cozy, experimental things I build for fun — the projects that start with curiosity and end up teaching me something useful.",
    vibe: [
      "Playful interfaces",
      "Small product ideas with personality",
      "Creative engineering experiments",
    ],
    stack: ["Always evolving"],
    github: "",
    live: "",
  },
];

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.08),_transparent_22%),linear-gradient(to_bottom,_rgb(15,23,42),_rgb(9,9,11))] text-zinc-100">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-sm font-semibold tracking-tight text-white">
            Nicole Creech
          </Link>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About this space
            </a>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="absolute right-[12%] top-24 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/80">
              Creative Playground
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A space for the softer, weirder, more playful things I build.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              I love building polished software, but I also love making things
              that feel a little more personal. This space is for creative
              projects, cozy experiments, and ideas that start out fun but still
              turn into real products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Projects
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>

          <div className="relative hidden h-[320px] md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="absolute h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" />
                <div className="absolute h-56 w-56 rounded-full bg-fuchsia-300/20 blur-[80px]" />
                <div className="absolute h-24 w-24 rounded-full border border-white/10 bg-white/10 blur-sm" />

                <div className="relative animate-ghost-float">
                  <Image
                    src="/matcha-ghostie-icon.png"
                    alt="Matcha ghost coding companion"
                    width={170}
                    height={170}
                    priority
                    className="drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-10 top-16 animate-pulse text-fuchsia-200/70">
              ✦
            </div>
            <div className="absolute right-12 top-10 animate-pulse text-violet-200/60 [animation-delay:1200ms]">
              ✦
            </div>
            <div className="absolute bottom-16 right-16 animate-pulse text-white/40 [animation-delay:2200ms]">
              ✦
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/80">
            Current Experiments
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Projects that are a little more personal, playful, and alive.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            These are the kinds of things I build when I’m following curiosity,
            exploring interaction design, or just making something that feels
            fun to use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {creativeProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/20 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  {project.title === "Pocket Ghost" && (
                    <div className="mb-3 inline-flex items-center rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200 shadow-[0_0_20px_rgba(192,132,252,0.12)]">
                      👻 Featured
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-fuchsia-200">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>

              {project.title === "Pocket Ghost" && (
                <p className="mt-3 text-xs italic text-zinc-400">
                  Started as a fun idea, now a real little coding companion I actually use.
                </p>
              )}

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  What makes it fun
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white">
                  {project.vibe.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-zinc-300"
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
                    className={`rounded-2xl px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                      project.title === "Pocket Ghost"
                        ? "border border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100 hover:bg-fuchsia-300/20 hover:shadow-[0_0_24px_rgba(192,132,252,0.14)]"
                        : "border border-white/15 text-white"
                    }`}
                  >
                    {project.title === "Pocket Ghost" ? "👻 Live Demo" : "Live Demo"}
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    {project.title === "Pocket Ghost"
                      ? "Download Extension / View Code"
                      : "View Code"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-fuchsia-300/80">
              About this space
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Still engineering. Just with more personality.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I care a lot about software that feels good to use. Sometimes that
              means security, scale, and clean architecture. Sometimes it means a
              tiny ghost floating around while I work.
            </p>
            <p>
              These projects are more playful, but they’re still real engineering
              work to me. They’re where I experiment with interaction design,
              developer experience, product ideas, and the small details that
              make software feel a little more human.
            </p>
            <p>
              This is the part of my portfolio where I leave room for curiosity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}