import Reveal from './Reveal'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line py-24 sm:py-32"
    >
      <div className="shell">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-accent">05</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">Contact</span>
            </div>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(2rem,5.5vw,4rem)] text-ink">
              Have something you need built?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              If you are working on a product or a site and need someone who can
              take it from idea to live, I would like to hear about it. Email is
              the surest way to reach me.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex flex-col justify-end gap-8">
            <a
              href={`mailto:${site.email}`}
              className="link-underline font-display text-2xl text-ink sm:text-3xl"
            >
              {site.email}
            </a>

            <div className="border-t border-line pt-6">
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-ink-soft transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-ink-faint">
              Available for new work and select freelance projects.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
