import { site } from '../data/site'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center pt-28 pb-20 sm:min-h-screen"
    >
      <div className="shell w-full">
        <p className="eyebrow">Full-stack developer &nbsp;/&nbsp; Digital product builder</p>

        <h1 className="mt-6 max-w-[16ch] text-[clamp(2.6rem,8.5vw,6.75rem)] leading-[1.02] text-ink sm:mt-8">
          I design and build web products, front to back.
        </h1>

        <div className="mt-10 grid gap-x-16 gap-y-8 sm:mt-14 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            I&rsquo;m {site.name} &mdash; a developer who works across the whole
            stack: the interface people use, the APIs and data behind it, and the
            parts that keep it running once it&rsquo;s live. I build with
            businesses, founders and teams who need something real shipped, not
            just designed.
          </p>

          <div className="flex flex-col justify-end gap-4">
            <div className="h-px w-full bg-line-strong" />
            <div className="flex items-baseline justify-between text-sm text-ink-faint">
              <span className="font-mono">{site.location}</span>
              <a
                href="#work"
                className="link-underline font-mono text-ink transition-colors"
              >
                Selected work &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
