import Reveal from './Reveal'
import ProjectImage from './ProjectImage'
import ProjectMeta from './ProjectMeta'

function Heading({ project, n }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-ink-faint">
          {String(n).padStart(2, '0')}
        </span>
        <span className="eyebrow !tracking-[0.14em]">{project.type}</span>
      </div>
      <h3 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
        {project.name}
      </h3>
    </div>
  )
}

/**
 * `wide`  — image spans the column, details sit beneath in two columns.
 * `split` — image and details share a row, alternating side each time.
 */
export default function FeaturedProject({ project, n, layout = 'split', flip = false }) {
  if (layout === 'wide') {
    return (
      <Reveal as="article" id={project.id} className="scroll-mt-28">
        <Heading project={project} n={n} />
        <div className="mt-8">
          <ProjectImage
            project={project}
            priority
            sizes="(min-width: 1400px) 1200px, 92vw"
          />
        </div>
        <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-[0.85fr_1.15fr]">
          <p className="font-display text-xl leading-snug text-ink md:text-2xl">
            {project.description}
          </p>
          <ProjectMeta project={project} showDescription={false} />
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal
      as="article"
      id={project.id}
      className="grid scroll-mt-28 items-center gap-x-14 gap-y-8 lg:grid-cols-2"
    >
      <div className={flip ? 'lg:order-2' : ''}>
        <ProjectImage project={project} />
      </div>
      <div className={flip ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}>
        <Heading project={project} n={n} />
        <div className="mt-6">
          <ProjectMeta project={project} />
        </div>
      </div>
    </Reveal>
  )
}
