function domain(href) {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

const ROWS = [
  { key: 'role', label: 'Role' },
  { key: 'stack', label: 'Stack' },
  { key: 'contributions', label: 'Built' },
]

export default function ProjectMeta({ project, showDescription = true }) {
  return (
    <>
      {showDescription && (
        <p className="text-base leading-relaxed text-ink-soft">
          {project.description}
        </p>
      )}

      <dl
        className={`space-y-3 border-t border-line pt-6 text-sm ${
          showDescription ? 'mt-8' : ''
        }`}
      >
        {ROWS.map(({ key, label }) => (
          <div key={key} className="flex gap-4">
            <dt className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-ink-faint">
              {label}
            </dt>
            <dd className="text-ink">
              {key === 'role' && project.role}
              {key === 'stack' && project.stack.join(' · ')}
              {key === 'contributions' && (
                <ul className="space-y-1">
                  {project.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
      >
        <span className="link-underline">{domain(project.href)}</span>
        <span aria-hidden="true" className="text-accent">
          &#8599;
        </span>
      </a>
    </>
  )
}
