import Reveal from './Reveal'

const NOTES = [
  {
    label: 'Arsenal',
    body: 'Through the good seasons and the other kind. It is the one commitment I do not try to rationalise.',
  },
  {
    label: 'Chess',
    body: 'Mostly online, mostly quick games. A steady reminder that a plan only holds until the position changes.',
  },
  {
    label: 'Hard problems',
    body: 'I tend to pick the version of a task I am not yet sure I can finish. That is usually where the work gets interesting.',
  },
]

export default function BeyondTheCode() {
  return (
    <section className="border-t border-line bg-paper-dim py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-accent">03</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Beyond the code</span>
          </div>
          <p className="mt-8 max-w-[24ch] font-display text-[clamp(1.6rem,3.6vw,2.5rem)] leading-[1.15] text-ink">
            Away from the screen, I follow Arsenal, play a fair amount of chess,
            and go looking for problems that seem a little out of reach.
          </p>
        </Reveal>

        <dl className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal key={note.label} delay={i * 70} as="div">
              <dt className="font-display text-xl text-ink">{note.label}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink-soft">
                {note.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
