import Reveal from './Reveal'
import signature from '../assets/images/signature-ink.webp'
import { site } from '../data/site'

const YEAR = new Date().getFullYear()

export default function SignatureFooter() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="shell py-16 text-center sm:py-24">
        <Reveal>
          <p className="font-hand text-[clamp(1.6rem,4vw,2.4rem)] leading-none">
            thanks for looking.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            If any of this is close to what you need, let&rsquo;s talk.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <img
            src={signature}
            width="465"
            height="117"
            alt={`${site.name} signature`}
            className="mx-auto h-auto w-[clamp(240px,52vw,520px)]"
            loading="lazy"
            decoding="async"
          />
          <div className="mx-auto mt-3 h-[2px] w-[clamp(240px,52vw,520px)] bg-ink" />
        </Reveal>

        <div className="mt-8">
          <p className="text-lg font-bold tracking-tight">{site.name}</p>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
            {site.role}
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block py-2 font-mono text-sm"
          >
            {site.email}
          </a>

          <ul className="mt-2 flex items-center justify-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3"
                >
                  <span className="link-underline">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 font-mono text-[0.68rem] text-ink-faint sm:flex-row sm:justify-center sm:gap-4">
          <span>
            &copy; {YEAR} {site.name}
          </span>
          <span className="hidden sm:inline" aria-hidden="true">
            /
          </span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  )
}
