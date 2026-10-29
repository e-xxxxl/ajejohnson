import portrait from '../assets/images/portrait.webp'
import portraitSm from '../assets/images/portrait-sm.webp'
import { site } from '../data/site'
import { FlowerSticker, TargetSticker } from './Icons'

function Avatar({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden h-20 w-20 overflow-hidden rounded-full border-[3px] border-ember bg-paper-dim xl:block ${className}`}
    >
      <img
        src={portraitSm}
        srcSet={`${portraitSm} 520w, ${portrait} 900w`}
        sizes="80px"
        alt=""
        width="80"
        height="80"
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-[50%_8%]"
      />
    </div>
  )
}

function NameTag({ children, className = '', tone }) {
  return (
    <span
      className={`tag-torn !h-8 !px-3.5 font-mono !text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink ${tone} ${className}`}
    >
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-24">
      <Avatar className="left-[6%] top-[56%] -rotate-6" />
      <Avatar className="right-[6%] top-[46%] rotate-6" />

      <div className="shell flex flex-col items-center text-center">
        <p className="font-hand text-xl leading-none text-ink-soft">my name is</p>
        <svg
          aria-hidden="true"
          viewBox="0 0 120 10"
          className="mt-1 h-2.5 w-24 text-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M2 3c20 4 36-3 58 1s40 2 58-1M10 8c24-3 44 1 100-2" />
        </svg>

        {/* The container is exactly as wide as the framed name, so the
            annotation tags anchor to the frame corners at any width. */}
        <div className="relative mx-auto mt-5 w-fit max-w-full">
          <div className="relative mx-auto w-fit px-5 py-3 sm:px-10 sm:py-5">
            <span
              aria-hidden="true"
              className="absolute inset-0 -rotate-[0.6deg] border-2 border-ember"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rotate-[0.4deg] border-2 border-ember opacity-60"
            />
            <h1 className="relative whitespace-nowrap font-pixel text-[clamp(2.4rem,11vw,6.75rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-ink">
              <span className="sr-only">{site.name.split(' ')[0]} </span>
              Emmanuel
              <span className="sr-only">, full-stack developer and digital product builder</span>
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-0 md:block">
            <NameTag tone="bg-leaf/70" className="md:absolute md:-top-6 md:-left-6 md:-rotate-2">
              Frontend
            </NameTag>
            <NameTag tone="bg-tape" className="md:absolute md:-top-5 md:-right-6 md:rotate-2">
              Backend &amp; APIs
            </NameTag>
            <NameTag tone="bg-sun" className="md:absolute md:-bottom-11 md:-left-8 md:-rotate-1">
              Full-stack developer
            </NameTag>
            <NameTag tone="bg-leaf/70" className="md:absolute md:-bottom-11 md:-right-10 md:rotate-1">
              Digital product builder
            </NameTag>
          </div>
        </div>

        <p className="mt-10 max-w-[20ch] text-balance text-[clamp(1.65rem,5vw,2.75rem)] font-bold leading-[1.1] tracking-tight sm:mt-20">
          I design and build web products, front to back.
          <span className="ml-2 inline-flex translate-y-[0.12em] gap-1.5 align-baseline">
            <TargetSticker />
            <FlowerSticker />
          </span>
        </p>

        <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.7] text-ink-soft sm:mt-6 sm:text-lg">
          I work across the whole stack: the interface people use, the APIs and
          data behind it, and the parts that keep it running once it&rsquo;s
          live. I build with businesses, founders and teams who need something
          real shipped.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 border-2 border-ink bg-ink py-2 pl-2 pr-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-cobalt"
          >
            <span className="flex h-7 w-7 items-center justify-center bg-cobalt text-paper transition-colors group-hover:bg-ink">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" aria-hidden="true">
                <path d="M5 19 19 5M8 5h11v11" />
              </svg>
            </span>
            Contact me
          </a>
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center border-2 border-ink bg-paper px-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-sun"
          >
            Selected work &darr;
          </a>
        </div>
      </div>

      {/* Curved page-break line, like a loose sheet */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-ink/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M0 34C300 6 900 6 1200 34" />
      </svg>
    </section>
  )
}
