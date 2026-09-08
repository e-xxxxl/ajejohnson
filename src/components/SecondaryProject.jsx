import Reveal from './Reveal'

function domain(href) {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export default function SecondaryProject({ project, n }) {
  return (
    <Reveal
      as="article"
      id={project.id}
      className="group scroll-mt-28 border-t border-line pt-8"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="grid gap-6 sm:grid-cols-[9rem_1fr] sm:gap-8 lg:grid-cols-[13rem_1fr]"
      >
        <div className="overflow-hidden border border-line bg-paper-deep">
          <img
            src={project.imageSmall}
            width="900"
            height="630"
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[1600/1120] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-ink-faint">
              {String(n).padStart(2, '0')}
            </span>
            <span className="eyebrow !tracking-[0.14em]">{project.type}</span>
          </div>
          <h3 className="mt-3 text-2xl text-ink sm:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-ink-faint">
            <span className="font-mono">{project.role}</span>
            <span className="font-mono">{project.stack.join(' · ')}</span>
            <span className="inline-flex items-center gap-1.5 text-ink">
              <span className="link-underline">{domain(project.href)}</span>
              <span aria-hidden="true" className="text-accent">
                &#8599;
              </span>
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}
