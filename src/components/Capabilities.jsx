import Reveal from './Reveal'

const CAPABILITIES = [
  {
    title: 'Full-stack development',
    body: 'One person across the whole build: interface, API, database and deployment, so the parts fit together.',
    tone: 'bg-sun',
  },
  {
    title: 'Frontend development',
    body: 'Accessible, responsive React interfaces that stay fast on real devices and ordinary connections.',
    tone: 'bg-leaf',
  },
  {
    title: 'Backend & API development',
    body: 'REST APIs, data models, authentication and the server-side logic a product runs on.',
    tone: 'bg-bubble',
  },
  {
    title: 'Product development',
    body: 'Turning a rough brief into scope, then building and shipping it in working versions.',
    tone: 'bg-cobalt text-paper',
  },
  {
    title: 'CMS & admin systems',
    body: 'The internal tools a team needs to manage content, orders and users once a product is live.',
    tone: 'bg-ember',
  },
  {
    title: 'Third-party integrations',
    body: 'Payments, maps, messaging and auth providers wired in cleanly and handled for failure.',
    tone: 'bg-tape',
  },
]

const TECH = [
  'React',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Vite',
  'Git',
  'Vercel',
]

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24"
    >
      <div className="shell">
        <Reveal className="text-center">
          <h2 className="label-box">what I actually do</h2>
          <p className="mx-auto mt-6 max-w-md font-hand text-[clamp(1.4rem,3.2vw,1.8rem)] leading-snug">
            Day to day, this is the work.
          </p>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              key={cap.title}
              as="li"
              delay={(i % 3) * 60}
              className="flex flex-col border-2 border-ink bg-paper"
            >
              <div className={`flex items-center justify-between border-b-2 border-ink px-4 py-2 ${cap.tone}`}>
                <span className="font-mono text-xs font-semibold tracking-[0.14em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 px-4 pb-5 pt-4">
                <h3 className="text-xl font-bold leading-tight tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {cap.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 text-center">
          <p className="font-hand text-2xl leading-none">tools I reach for</p>
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
            {TECH.map((t) => (
              <li
                key={t}
                className="border-2 border-ink bg-paper px-3 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-wide"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
