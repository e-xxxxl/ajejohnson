import Reveal from './Reveal'
import signature from '../assets/images/signature-paper.webp'
import { site } from '../data/site'

const YEAR = new Date().getFullYear()

export default function SignatureFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <p className="max-w-[22ch] font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-[1.15] text-paper/85">
            Thanks for looking. If any of this is close to what you need,
            let&rsquo;s talk.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <img
            src={signature}
            width="465"
            height="117"
            alt={`${site.name} — signature`}
            className="h-auto w-[clamp(220px,42vw,440px)]"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 border-t border-paper/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg text-paper">{site.name}</p>
            <p className="mt-1 text-sm text-paper/55">{site.role}</p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-sm text-paper"
            >
              {site.email}
            </a>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-paper/55">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1 text-xs text-paper/40 sm:flex-row sm:justify-between">
          <span>
            &copy; {YEAR} {site.name}
          </span>
          <span>Designed and built by me &middot; {site.domain}</span>
        </div>
      </div>
    </footer>
  )
}
