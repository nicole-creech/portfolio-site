import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/app/components/TopBar";
import Wisp from "@/app/components/Wisp";

export const metadata: Metadata = {
  title: "Data poisoning: how attackers corrupt the data your models learn from | Nicole Creech",
  description:
    "Five real cases, from Microsoft Tay to malicious models on Hugging Face, and the controls I'd put in place on a real team.",
};

const CASES = [
  {
    title: "Microsoft Tay (2016): users write the training data",
    body: "Microsoft launched Tay on Twitter on March 23, 2016, as a chatbot that learned from its conversations. Coordinated users flooded it with offensive content, helped by a “repeat after me” feature. Microsoft took Tay offline about 16 hours after launch, by which point it had posted more than 96,000 tweets, and described it as a coordinated attack.",
    lesson: "any system that learns from live user input lets users write its training data. Input needs filtering, rate limits and review before it becomes training signal.",
  },
  {
    title: "Web-scale dataset poisoning (2023): $60 for a foothold",
    body: "In “Poisoning Web-Scale Training Datasets is Practical,” Carlini and colleagues showed two cheap attacks. Split-view poisoning exploits the fact that large image datasets are distributed as lists of URLs, and the content behind a URL can change after curators review it. By buying expired domains, they showed they could have poisoned 0.01% of LAION-400M or COYO-700M for about $60. Frontrunning poisoning targets datasets that snapshot crowd-sourced sites like Wikipedia: an attacker only needs a malicious edit to be live at the moment the snapshot is taken.",
    lesson: "a dataset is only as trustworthy as everything it points to. Publish cryptographic hashes with the dataset and verify them on download.",
  },
  {
    title: "Nightshade and Glaze (2023–2024): poisoning as protest",
    body: "Ben Zhao’s team at the University of Chicago built Glaze to mask an artist’s style from AI mimicry, then Nightshade to fight back. Nightshade makes pixel changes people can’t see but that teach image models the wrong concept, such as learning dogs as cats. The researchers reported prompt-specific effects with fewer than 100 poisoned samples, and the damage spreads to related concepts.",
    lesson: "poisoning isn’t only a criminal technique. Anyone scraping content without consent should assume some of it was made to be adversarial on purpose.",
  },
  {
    title: "PoisonGPT (2023): the model that passed its benchmarks",
    body: "Mithril Security took the open-source model GPT-J-6B and used the ROME editing technique to change specific facts, while it kept performing normally elsewhere. They uploaded it to Hugging Face under “EleuterAI,” one letter off from the real publisher, EleutherAI. It was downloaded more than 40 times before Hugging Face disabled it.",
    lesson: "standard benchmarks won’t catch a targeted change. Provenance does: who published this model, and does it match what they actually released?",
  },
  {
    title: "Malicious models on Hugging Face (2024): loading is executing",
    body: "JFrog’s security researchers found about 100 models on Hugging Face carrying real malicious payloads, including one that opened a reverse shell. Most were PyTorch files in Python’s pickle format, which can run arbitrary code the moment a model is loaded. Hugging Face scans for this and labels such files unsafe, but doesn’t block downloads.",
    lesson: "pulling a model from a public hub can mean running a stranger’s code. Prefer safe formats like safetensors and load anything untrusted in a sandbox.",
  },
];

const DEFENSES = [
  ["Provenance", "track the source of every dataset and model, allowlist trusted publishers, and watch for look-alike names."],
  ["Integrity", "pin datasets and models by cryptographic hash and verify them on every download."],
  ["Safe loading", "use safetensors, refuse pickle files from untrusted sources, and isolate anything you must load."],
  ["Data validation", "deduplicate, flag outliers and label inconsistencies, and quarantine new data before it reaches training."],
  ["Behavioral testing", "probe for targeted changes and known trigger patterns, and compare each new model against the last approved one."],
  ["Monitoring and rollback", "log inputs and outputs in production, alert on drift, and keep a known-good version ready to restore."],
];

const SOURCES = [
  ["TechCrunch: Microsoft silences its new AI bot Tay", "https://techcrunch.com/2016/03/24/microsoft-silences-its-new-a-i-bot-tay-after-twitter-users-teach-it-racism"],
  ["Carlini et al.: Poisoning Web-Scale Training Datasets is Practical", "https://arxiv.org/abs/2302.10149"],
  ["MIT Technology Review: Nightshade lets artists fight back", "https://www.technologyreview.com/2023/10/23/1082189/data-poisoning-artists-fight-generative-ai/"],
  ["Tom’s Hardware: Nightshade data poisoning tool", "https://www.tomshardware.com/news/nightshade-data-poisoning-tool-could-help-artists-fight-ai"],
  ["Mithril Security: PoisonGPT", "https://blog.mithrilsecurity.io/poisongpt-how-we-hid-a-lobotomized-llm-on-hugging-face-to-spread-fake-news/"],
  ["JFrog: Malicious Hugging Face models with silent backdoor", "https://jfrog.com/blog/data-scientists-targeted-by-malicious-hugging-face-ml-models-with-silent-backdoor/"],
];

export default function DataPoisoningEssay() {
  return (
    <>
      <TopBar />
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "center" }}>
        <article className="essay" style={{ flex: "1 1 560px", maxWidth: 720, minWidth: 0, padding: "88px 0 120px" }}>
          <p className="eyebrow rise">AI SECURITY · NOV 2026 · 9 MIN READ</p>
          <h1
            className="rise"
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            Data poisoning: how attackers corrupt the data your models learn from
          </h1>
          <p style={{ margin: "28px 0 0", fontSize: 21, lineHeight: 1.6, color: "var(--body)" }}>
            A model trusts its training data completely. If an attacker can shape part of what a model learns from, or
            swap the model file itself, they can control its behavior without touching a line of your code. Five real
            cases show how that attack surface keeps moving.
          </p>

          <aside className="card" style={{ margin: "48px 0", padding: "28px 32px" }}>
            <p className="eyebrow" style={{ color: "var(--blush)" }}>
              TL;DR
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 17, color: "#d8d3e3" }}>
              <li>Poisoning works anywhere a model learns from data someone else can influence: user conversations, scraped web pages, or a shared model file.</li>
              <li>It&apos;s hard to catch because a poisoned model usually passes normal tests. The bad behavior only shows up on the inputs the attacker chose.</li>
              <li>The strongest defenses are supply chain basics: know where data and models come from, pin them by hash, and test behavior before anything ships.</li>
            </ul>
          </aside>

          <h2>What data poisoning is</h2>
          <p>
            Data poisoning attacks a model through its training data rather than its code. The attacker adds or alters
            examples so the model learns something they chose. Usually that is one of three things: worse performance
            overall, a wrong answer on specific topics, or a hidden backdoor that only activates on a trigger.
          </p>
          <p>
            A close cousin is tampering with a published model&apos;s weights or files directly. Strictly speaking that is
            model tampering, not data poisoning. But for the team that downloads the model the result is the same, and so
            are most of the defenses, so I cover both below.
          </p>

          <h2>Five case studies</h2>
          {CASES.map((c, i) => (
            <section key={c.title} className="case-study">
              <h3>
                <span style={{ color: "var(--lavender)" }}>{String(i + 1).padStart(2, "0")}</span> {c.title}
              </h3>
              <p>{c.body}</p>
              <p className="lesson">
                <strong style={{ color: "var(--blush)" }}>Lesson:</strong> {c.lesson}
              </p>
            </section>
          ))}

          <h2>Why it&apos;s hard to detect</h2>
          <p>
            Poisoned examples are a tiny share of huge datasets, so manual review can&apos;t find them. A poisoned model
            behaves normally on almost everything, which means it passes the tests teams already run. And unlike source
            code, there is no readable diff for model weights, so tampering leaves nothing obvious to review.
          </p>

          <h2>How to defend against it</h2>
          <ul style={{ margin: "0 0 20px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {DEFENSES.map(([term, text]) => (
              <li key={term}>
                <strong>{term}:</strong> {text}
              </li>
            ))}
          </ul>

          <h2>What I&apos;d do on a real team</h2>
          <p>
            I&apos;d start by treating models and datasets like any other dependency. The same controls teams already use
            for packages apply: an inventory, approved sources, hash pinning and automated scanning in CI.
          </p>
          <p>
            Next, I&apos;d gate promotion. No model reaches production without a behavioral test suite that includes
            poisoning probes and a comparison against the previous approved version.
          </p>
          <p>
            Finally, I&apos;d make it auditable. Every prediction should trace back to the model version and data that
            produced it, so a bad behavior can be investigated and rolled back quickly. It&apos;s the same audit-trail
            thinking behind my <Link href="/#work">Secure Audit Explorer</Link> project.
          </p>

          <section style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <h2 style={{ margin: "0 0 16px", fontSize: 22 }}>Sources</h2>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 15 }}>
              {SOURCES.map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div
            className="card"
            style={{ marginTop: 64, padding: 32, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}
          >
            <p style={{ margin: 0, fontSize: 16, color: "var(--body)" }}>Nicole Creech · Full stack engineer, M.S. Cybersecurity</p>
            <Link className="btn btn-primary" href="/#contact" style={{ textDecoration: "none", color: "var(--bg)" }}>
              Get in touch
            </Link>
          </div>
        </article>

        <aside aria-hidden="true" style={{ flex: "0 1 200px" }}>
          <div style={{ position: "sticky", top: 40, paddingTop: 140 }}>
            <span className="bob" style={{ display: "block", width: 96, filter: "drop-shadow(0 0 16px rgba(185,166,255,.55))" }}>
              <Wisp size={96} lookX={-0.6} lookY={0.3} />
            </span>
          </div>
        </aside>
      </div>
    </>
  );
}
