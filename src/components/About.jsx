import Reveal from './Reveal'
import portrait from '../assets/images/portrait.webp'
import portraitSm from '../assets/images/portrait-sm.webp'
import genpaySm from '../assets/images/work/opt/genpay-sm.webp'
import { site } from '../data/site'

const SKILLS = [
  { label: 'Full-stack development', tone: 'bg-sun text-ink', tilt: '-rotate-2' },
  { label: 'Frontend', tone: 'bg-leaf text-ink', tilt: 'rotate-1' },
  { label: 'Backend & APIs', tone: 'bg-bubble text-ink', tilt: '-rotate-1' },
  { label: 'Product thinking', tone: 'bg-cobalt text-paper', tilt: 'rotate-2' },
  { label: 'Complete products', tone: 'bg-ember text-ink', tilt: '-rotate-2' },
  { label: 'Ideas into software', tone: 'bg-tape text-ink', tilt: 'rotate-1' },
]

function Polaroid({ caption, tilt, tapeTilt, children, className = '' }) {
  return (
    <figure
      className={`relative w-36 shrink-0 border-2 border-ink bg-paper p-2 pb-1 sm:w-44 xl:w-52 ${tilt} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`tape -top-3 left-1/2 -translate-x-1/2 ${tapeTilt}`}
      />
      <div className="aspect-[4/5] overflow-hidden border border-ink/30 bg-paper-dim">
        {children}
      </div>
      <figcaption className="py-1.5 text-center font-hand text-lg leading-none">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24">
      <div className="shell">
        <Reveal className="font-hand text-xl leading-none text-ink-soft">
          about me!
        </Reveal>

        <div className="mt-6 grid grid-cols-1 items-start gap-x-8 gap-y-10 xl:grid-cols-[1fr_minmax(0,38rem)_1fr]">
          {/* Polaroids: a pair above the text on small screens, flanking it on large */}
          <Reveal className="order-2 flex justify-center gap-5 xl:order-none xl:col-start-1 xl:row-start-1 xl:justify-start xl:pt-16">
            <Polaroid caption="emmanuel" tilt="-rotate-[4deg]" tapeTilt="-rotate-6">
              <img
                src={portraitSm}
                srcSet={`${portraitSm} 520w, ${portrait} 900w`}
                sizes="(min-width: 1024px) 13rem, 11rem"
                width="520"
                height="780"
                alt={`Illustrated figure of ${site.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </Polaroid>
            <Polaroid
              caption="a recent build"
              tilt="rotate-[3deg] xl:hidden"
              tapeTilt="rotate-3"
            >
              <img
                src={genpaySm}
                width="900"
                height="630"
                alt="GenPay, an events and ticketing platform"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-left-top"
              />
            </Polaroid>
          </Reveal>

          <Reveal
            delay={80}
            className="order-1 text-center xl:order-none xl:col-start-2 xl:row-start-1"
          >
            <h2 className="label-box">what&rsquo;s up</h2>

            <p className="mt-8 font-hand text-[clamp(1.45rem,3.6vw,1.95rem)] leading-[1.25]">
              I&rsquo;m a full-stack developer who likes owning the whole
              build: the interface people use, the APIs and data behind it, and
              the payments, logins and admin tools that turn a demo into
              something a business can run on.
            </p>
            <p className="mt-5 font-hand text-[clamp(1.45rem,3.6vw,1.95rem)] leading-[1.25]">
              Most of my work is with founders and small teams. I take a rough
              idea, work out what it actually needs to do, and ship a version
              that holds up. I sweat the things people feel, like how fast a
              page loads and what happens when something goes wrong.
            </p>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
              {SKILLS.map((s) => (
                <li key={s.label}>
                  <span className={`tag-torn ${s.tone} ${s.tilt}`}>{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={160}
            className="order-3 hidden justify-end xl:col-start-3 xl:row-start-1 xl:flex xl:pt-4"
          >
            <Polaroid caption="a recent build" tilt="rotate-[3deg]" tapeTilt="rotate-3">
              <img
                src={genpaySm}
                width="900"
                height="630"
                alt="GenPay, an events and ticketing platform"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-left-top"
              />
            </Polaroid>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
