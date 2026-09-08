import Reveal from './Reveal'

export default function SectionHeader({ index, title, lead, id }) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-10 bg-line-strong" />
        <span className="eyebrow">{id}</span>
      </div>
      <h2 className="mt-6 text-[clamp(1.9rem,5vw,3.5rem)] text-ink">{title}</h2>
      {lead && (
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{lead}</p>
      )}
    </Reveal>
  )
}
