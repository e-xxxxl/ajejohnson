import Reveal from './Reveal'
import portrait from '../assets/images/portrait.webp'
import portraitSm from '../assets/images/portrait-sm.webp'
import linkySm from '../assets/images/work/opt/linky-sm.webp'
import { site } from '../data/site'

const SKILLS = [
  { label: 'Full-stack development', tone: 'bg-sun text-ink', tilt: '-rotate-1' },
  { label: 'Frontend', tone: 'bg-leaf text-ink', tilt: 'rotate-1' },
  { label: 'Backend & APIs', tone: 'bg-bubble text-ink', tilt: '-rotate-1' },
  { label: 'Product thinking', tone: 'bg-cobalt text-paper', tilt: 'rotate-1' },
  { label: 'Complete products', tone: 'bg-ember text-ink', tilt: '-rotate-1' },
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

function LinkyShot() {
  return (
    <img
      src={linkySm}
      width="750"
      height="1000"
      alt="Linky, a link safety scanner"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-top"
    />
  )
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24">
      <div className="shell">
        <Reveal className="font-hand text-xl leading-none text-ink-soft">
          about me!
        </Reveal>

        <div className="mt-6 grid grid-cols-1 items-start gap-x-10 gap-y-10 xl:grid-cols-[1fr_minmax(0,38rem)_1fr]">
          {/* Polaroids: a pair above the text on small screens, flanking it on wide ones */}
          <Reveal className="order-2 flex justify-center gap-5 xl:order-none xl:col-start-1 xl:row-start-1 xl:justify-start xl:pt-16">
            <Polaroid caption="emmanuel" tilt="-rotate-[3deg]" tapeTilt="-rotate-6">
              <img
                src={portraitSm}
                srcSet={`${portraitSm} 520w, ${portrait} 900w`}
                sizes="(min-width: 1280px) 13rem, 11rem"
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
              tilt="rotate-[2deg] xl:hidden"
              tapeTilt="rotate-3"
            >
              <LinkyShot />
            </Polaroid>
          </Reveal>

          <Reveal
            delay={80}
            className="order-1 text-left md:text-center xl:order-none xl:col-start-2 xl:row-start-1"
          >
            <h2 className="label-box">what&rsquo;s up</h2>

            <div className="mt-7 space-y-4 text-[1.05rem] leading-[1.75] text-ink-soft sm:text-lg">
              <p>
                I&rsquo;m a full-stack developer who likes owning the whole
                build: the interface people use, the APIs and data behind it,
                and the payments, logins and admin tools that turn a demo into
                something a business can run on.
              </p>
              <p>
                Most of my work is with founders and small teams. I take a
                rough idea, work out what it actually needs to do, and ship a
                version that holds up. I sweat the things people feel, like how
                fast a page loads and what happens when something goes wrong.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-start gap-x-2 gap-y-4 md:justify-center">
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
            <Polaroid caption="a recent build" tilt="rotate-[2deg]" tapeTilt="rotate-3">
              <LinkyShot />
            </Polaroid>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
