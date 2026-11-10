import Link from "next/link";

const LINKS = [
  { href: "/#capabilities", label: "What I do" },
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#experience", label: "Experience" },
  { href: "/#playground", label: "Playground" },
  { href: "/#contact", label: "Contact" },
];

export default function TopBar() {
  return (
    <header className="topbar">
      <nav aria-label="Main" className="wrap">
        <Link href="/" className="brand">
          nicole creech
        </Link>
        <div className="toplinks">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="toplink">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
