import Reveal from './Reveal'

const NOTES = [
  {
    label: 'Arsenal',
    body: 'Through the good seasons and the other kind. It is the one commitment I do not try to rationalise.',
    tone: 'bg-sun',
    tilt: '-rotate-1',
    tape: '-rotate-6',
  },
  {
    label: 'Chess',
    body: 'Mostly online, mostly quick games. A steady reminder that a plan only holds until the position changes.',
    tone: 'bg-leaf',
    tilt: 'rotate-[0.5deg]',
    tape: 'rotate-3',
  },
  {
    label: 'Hard problems',
    body: 'I tend to pick the version of a task I am not yet sure I can finish. That is usually where the work gets interesting.',
    tone: 'bg-bubble',
    tilt: '-rotate-1',
    tape: '-rotate-3',
  },
]

export default function BeyondTheCode() {
  return (
    <section id="beyond" className="scroll-mt-20 border-t-2 border-ink bg-paper-dim py-16 sm:py-24">
      <div className="shell">
        <Reveal className="text-center">
          <h2 className="label-box">beyond the code</h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
            Away from the screen, I follow Arsenal, play a fair amount of
            chess, and go looking for problems that seem a little out of
            reach.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal key={note.label} as="li" delay={i * 80}>
              <div
                className={`relative border-2 border-ink px-5 pb-6 pt-8 ${note.tone} ${note.tilt}`}
              >
                <span
                  aria-hidden="true"
                  className={`tape -top-3 left-1/2 -translate-x-1/2 ${note.tape}`}
                />
                <h3 className="font-hand text-[2rem] font-bold leading-none">
                  {note.label}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed">
                  {note.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
