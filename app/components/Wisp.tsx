import Image from "next/image";
import wispArt from "@/app/assets/wisp.png";

type WispProps = {
  /** Rendered width in px. Eyes scale with it, so every Wisp looks the same. */
  size: number;
  /** Gaze direction, -1..1 on each axis. */
  lookX?: number;
  lookY?: number;
  /** 1 = eyes open, ~0.12 = closed. */
  lid?: number;
  preload?: boolean;
};

const EYE_LEFTS = ["46.5%", "70.5%"];

/** Wisp from Pocket Ghost, with eyes drawn over the art so they can move and blink. */
export default function Wisp({ size, lookX = 0, lookY = 0, lid = 1, preload = false }: WispProps) {
  const travel = size * 0.018;
  const dx = (lookX * travel).toFixed(2);
  const dy = (lookY * travel * 0.9).toFixed(2);

  return (
    <span className="wisp" style={{ width: size }} aria-hidden="true">
      <Image src={wispArt} alt="" sizes={`${size}px`} preload={preload} />
      {EYE_LEFTS.map((left) => (
        <span
          key={left}
          className="wisp-eye"
          style={{ left, transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px)` }}
        >
          <span className="wisp-lid" style={{ transform: `scaleY(${lid})` }}>
            <span className="wisp-pupil">
              <span className="wisp-shine" />
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}

/** Three staggered z's for a sleeping Wisp. */
export function Zs({ fontSize, style }: { fontSize: number; style: React.CSSProperties }) {
  return (
    <>
      {[0, 1.2, 2.4].map((delay, i) => (
        <span
          key={delay}
          className="zz"
          aria-hidden="true"
          style={{
            ...style,
            fontSize: Math.round(fontSize * [0.8, 1, 1.25][i]),
            marginLeft: i * 3,
            animationDelay: `${delay}s`,
          }}
        >
          z
        </span>
      ))}
    </>
  );
}
