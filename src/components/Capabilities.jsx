import Reveal from './Reveal'

const CAPABILITIES = [
  {
    title: 'Full-stack development',
    body: 'One person across the whole build — interface, API, database and deployment — so the parts fit together.',
  },
  {
    title: 'Frontend development',
    body: 'Accessible, responsive React interfaces that stay fast on real devices and ordinary connections.',
  },
  {
    title: 'Backend & API development',
    body: 'REST APIs, data models, authentication and the server-side logic a product runs on.',
  },
  {
    title: 'Product development',
    body: 'Turning a rough brief into scope, then building and shipping it in working versions.',
  },
  {
    title: 'CMS & admin systems',
    body: 'The internal tools a team needs to manage content, orders and users once a product is live.',
  },
  {
    title: 'Third-party integrations',
    body: 'Payments, maps, messaging and auth providers wired in cleanly and handled for failure.',
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
      className="scroll-mt-24 border-t border-line py-24 sm:py-32"
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-accent">04</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Capabilities</span>
          </div>
          <h2 className="mt-6 text-[clamp(1.9rem,5vw,3.5rem)] text-ink">
            What I actually do, day to day.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-x-14 gap-y-px sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              key={cap.title}
              as="li"
              delay={(i % 2) * 60}
              className="border-t border-line py-7"
            >
              <div className="flex gap-5">
                <span className="font-mono text-sm text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{cap.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                    {cap.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 border-t border-line pt-8">
          <p className="eyebrow mb-4">Tools I reach for</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {TECH.map((t) => (
              <li key={t} className="font-mono">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
