import Reveal from './Reveal'
import portrait from '../assets/images/portrait.webp'
import portraitSm from '../assets/images/portrait-sm.webp'
import { site } from '../data/site'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-accent">02</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">About</span>
            </div>
            <div className="mt-8 max-w-xs overflow-hidden border border-line bg-paper-deep">
              <img
                src={portrait}
                srcSet={`${portraitSm} 520w, ${portrait} 900w`}
                sizes="(min-width: 1024px) 20rem, 60vw"
                width="900"
                height="1350"
                alt={`Illustrated figure of ${site.name}`}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.5vw,3.25rem)] text-ink">
              I build complete products, not just the parts that show.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                I&rsquo;m a full-stack developer. In practice that means I&rsquo;m
                comfortable anywhere in a project &mdash; building interfaces in
                React, writing the APIs and data models behind them in Node, and
                setting up the payments, authentication and admin tools that turn
                a demo into something a business can run on.
              </p>
              <p>
                Most of my work is building products with founders and small
                teams: taking a rough idea, working out what it actually needs to
                do, and shipping a version that holds up. I pay attention to the
                things people feel &mdash; how quickly a page loads, whether a
                form makes sense, what happens when something goes wrong.
              </p>
              <p>
                I like working directly with the people whose business depends on
                what I&rsquo;m building. It keeps the decisions honest and the
                scope real.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
