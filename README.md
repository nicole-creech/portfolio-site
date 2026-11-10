# Nicole Creech — Portfolio Site

Portfolio for a security-minded full stack engineer: case studies, writing on AI security, work history, and a few side projects. Wisp, the ghost from [Pocket Ghost](https://github.com/nicole-creech/pocket-ghost), keeps an eye on things.

**Live site:** https://portfolio-site-neon-ten.vercel.app/

## What's on the site

- **Case files:** Secure Audit Explorer and PulseOps, each with the problem, the key decision and the stack
- **Writing:** an essay on data poisoning and AI supply chain attacks (`/writing/data-poisoning`)
- **Experience:** JPMorgan Chase, Kroger and Procter & Gamble (via Adecco)
- **Playground:** Pocket Ghost and independent game development
- **PulseOps system design:** architecture diagram and engineering decisions (`/projects/pulseops`)

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4 plus a small hand-written stylesheet
- Self-hosted variable fonts via Fontsource (Bricolage Grotesque, Inter, JetBrains Mono)
- Deployed on Vercel

## Security

- **Strict Content Security Policy:** a fresh nonce per request in `proxy.ts`, with `'strict-dynamic'`, no third-party script or font hosts, `object-src 'none'` and `frame-ancestors 'none'`
- **Security headers** in `next.config.ts`: HSTS, `nosniff`, frame denial, referrer policy, permissions policy, COOP, and no `X-Powered-By`
- **Dependency hygiene:** Dependabot updates, plus a CI workflow that runs `npm audit`, lint and build on every push, pull request and weekly
- **Disclosure:** `/.well-known/security.txt`

## Accessibility and motion

- All animation turns off for visitors with "reduce motion" enabled
- Every interactive element is reachable by keyboard and has a visible focus ring
- Layouts collapse to a single column on phones, with no horizontal scrolling

## Project structure

```
app/
  page.tsx                     Home page sections
  components/
    Hero.tsx                   Intro, section menu and interactive Wisp
    Wisp.tsx                   Wisp art with animated eyes, plus sleeping z's
    Motes.tsx                  Ambient background specks
    TopBar.tsx                 Site navigation
  writing/data-poisoning/      Essay page
  projects/pulseops/           PulseOps system design page
  assets/wisp.png              Wisp art from Pocket Ghost
proxy.ts                       Per-request CSP nonce
next.config.ts                 Security headers and redirects
```

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Run `npm run build` and `npm run lint` before opening a pull request.

## Contact

- GitHub: https://github.com/nicole-creech
- LinkedIn: https://www.linkedin.com/in/nicole-creech-15563a160/
