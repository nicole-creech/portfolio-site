"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Wisp, { Zs } from "./Wisp";

type Mood = "calm" | "happy" | "curious" | "asleep";

const MENU: { num: string; label: string; tag: string; href: string; mood: Mood }[] = [
  { num: "01", label: "Case files", tag: "2 live", href: "#work", mood: "happy" },
  { num: "02", label: "Writing", tag: "new essay", href: "#writing", mood: "curious" },
  { num: "03", label: "Experience", tag: "8+ yrs", href: "#experience", mood: "calm" },
  { num: "04", label: "Playground", tag: "where wisp lives", href: "#playground", mood: "happy" },
  { num: "05", label: "Say hello", tag: "email", href: "#contact", mood: "curious" },
];

const MOOD_STYLE: Record<Mood, { transform: string; opacity: number; glow: number }> = {
  calm: { transform: "none", opacity: 1, glow: 14 },
  happy: { transform: "translateY(-10px) scale(1.06)", opacity: 1, glow: 26 },
  curious: { transform: "rotate(10deg)", opacity: 1, glow: 14 },
  asleep: { transform: "translateY(6px) scale(.95) rotate(-6deg)", opacity: 0.75, glow: 6 },
};

const IDLE_MS = 8000;

export default function Hero() {
  const [mood, setMood] = useState<Mood>("calm");
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [boing, setBoing] = useState(false);
  const lastActive = useRef(0);
  const wispRef = useRef<HTMLButtonElement>(null);
  const boingTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const wake = useCallback((next?: Mood) => {
    lastActive.current = Date.now();
    setMood((prev) => next ?? (prev === "asleep" ? "calm" : prev));
  }, []);

  useEffect(() => {
    lastActive.current = Date.now();
    const idle = setInterval(() => {
      if (Date.now() - lastActive.current > IDLE_MS) setMood("asleep");
    }, 1000);

    // On touch screens there is no cursor to follow, so Wisp glances down while you scroll.
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      wake();
      setLook((l) => ({ x: l.x, y: 1 }));
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setLook((l) => ({ x: l.x, y: 0 })), 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const boingRef = boingTimer;
    return () => {
      clearInterval(idle);
      clearTimeout(scrollTimer);
      clearTimeout(boingRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [wake]);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = wispRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height * 0.3);
    const len = Math.max(1, Math.hypot(dx, dy));
    const k = Math.min(1, len / 120);
    setLook({ x: (dx / len) * k, y: (dy / len) * k });
    wake();
  };

  const poke = () => {
    setBoing(true);
    wake("happy");
    clearTimeout(boingTimer.current);
    boingTimer.current = setTimeout(() => {
      setBoing(false);
      setMood("calm");
    }, 900);
  };

  const m = MOOD_STYLE[mood];

  return (
    <section
      id="top"
      className="wrap"
      onPointerMove={onPointerMove}
      style={{
        paddingTop: 88,
        paddingBottom: 120,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
        gap: 64,
        alignItems: "center",
      }}
    >
      <div className="rise">
        <p
          style={{
            margin: "0 0 20px",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--muted)",
          }}
        >
          <span className="status-dot" />
          security &amp; platform engineering · columbus, oh
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px 28px" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(56px, 7vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
            }}
          >
            Nicole Creech
          </h1>
          <button
            ref={wispRef}
            type="button"
            className="wisp-button"
            onClick={poke}
            aria-label="Wisp the ghost. Click to say hi."
          >
            <span className="bob" style={{ display: "block" }}>
              <span
                className={`wisp-body${boing ? " boing" : ""}`}
                style={{
                  display: "block",
                  transform: m.transform,
                  opacity: m.opacity,
                  filter: `drop-shadow(0 0 ${m.glow}px rgba(185,166,255,.6))`,
                }}
              >
                <Wisp size={120} lookX={look.x} lookY={look.y} lid={mood === "asleep" ? 0.15 : 1} preload />
              </span>
            </span>
            {mood === "asleep" && <Zs fontSize={15} style={{ right: 4, top: -4 }} />}
          </button>
        </div>

        <p style={{ margin: "24px 0 0", maxWidth: 460, fontSize: 19, color: "var(--body)" }}>
          I build the access controls, audit trails and failure handling that keep systems trustworthy. 8+ years
          at JPMorgan Chase and Kroger, M.S. in Cybersecurity.
        </p>
        <p style={{ margin: "18px 0 0", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>
          secure systems · reliable backends · AI-assisted engineering
        </p>
      </div>

      <nav aria-label="Sections" style={{ display: "flex", flexDirection: "column" }}>
        {MENU.map((item, i) => (
          <a
            key={item.href}
            className="menu-item"
            href={item.href}
            style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            onPointerEnter={() => wake(item.mood)}
            onPointerLeave={() => wake("calm")}
            onFocus={() => wake(item.mood)}
            onBlur={() => wake("calm")}
          >
            <span className="num">{item.num}</span>
            <span className="label">{item.label}</span>
            <span className="tag">{item.tag}</span>
            <span className="bar" />
          </a>
        ))}
      </nav>
    </section>
  );
}
