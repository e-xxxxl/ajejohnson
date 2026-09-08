/**
 * Shared project screenshot treatment: a thin frame on a warm mat,
 * a restrained hover scale, and the whole thing linking to the live site.
 */
export default function ProjectImage({ project, priority = false, sizes }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/img block overflow-hidden border border-line bg-paper-deep"
      aria-label={`Open ${project.name} in a new tab`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          srcSet={`${project.imageSmall} 900w, ${project.image} 1600w`}
          sizes={sizes || '(min-width: 1024px) 60vw, 100vw'}
          width="1600"
          height="1120"
          alt={project.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="aspect-[1600/1120] w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover/img:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
        />
      </div>
    </a>
  )
}
