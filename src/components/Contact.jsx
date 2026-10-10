import Reveal from './Reveal'
import { site } from '../data/site'
import { ArrowUpRight } from './Icons'
import { SOCIAL } from './social'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24">
      <div className="shell">
        <Reveal className="relative mx-auto max-w-3xl border-2 border-ink bg-sun px-6 py-12 text-center sm:px-12 sm:py-16">
          <span aria-hidden="true" className="tape -left-5 -top-2 -rotate-[28deg]" />
          <span aria-hidden="true" className="tape -right-5 -top-2 rotate-[28deg]" />

          <h2 className="label-box">say hello</h2>
          <p className="mx-auto mt-8 max-w-[18ch] text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1] tracking-tight">
            Have something you need built?
          </p>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/80">
            If you are working on a product or a site and need someone who can
            take it from idea to live, I would like to hear about it. Email is
            the surest way to reach me.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex max-w-full items-center gap-3 border-2 border-ink bg-ink py-2 pl-2 pr-5 font-mono text-xs font-semibold tracking-[0.06em] text-paper transition-colors hover:bg-cobalt sm:text-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-cobalt transition-colors group-hover:bg-ink">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <span className="min-w-0 break-all">{site.email}</span>
          </a>

          <ul className="mt-8 flex items-center justify-center gap-3">
            {site.socials.map((s) => {
              const meta = SOCIAL[s.label]
              if (!meta) return null
              const { Icon } = meta
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-paper transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-8 font-hand text-xl leading-none">
            Available for new work and select freelance projects.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
