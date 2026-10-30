import { clientFeatured, clientSecondary, personalProjects } from '../data/projects'
import Reveal from './Reveal'
import { ArrowUpRight, Spark } from './Icons'

/* One flat marker colour per folder. Text colours are chosen for contrast. */
const THEMES = {
  ekounited: { bg: 'bg-cobalt', fg: 'text-paper', soft: 'text-paper/80', rule: 'border-paper/30' },
  linky: { bg: 'bg-ink', fg: 'text-paper', soft: 'text-paper/75', rule: 'border-paper/25' },
  ajcourier: { bg: 'bg-ember', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
  tradies: { bg: 'bg-leaf', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
  talknaija: { bg: 'bg-sun', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
  genpay: { bg: 'bg-bubble', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
  quickship: { bg: 'bg-leaf', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
  affectionate: { bg: 'bg-cobalt', fg: 'text-paper', soft: 'text-paper/80', rule: 'border-paper/30' },
  fembos: { bg: 'bg-sun', fg: 'text-ink', soft: 'text-ink/80', rule: 'border-ink/25' },
}

const pad = (n) => String(n).padStart(2, '0')
const domain = (href) => href.replace(/^https?:\/\//, '').replace(/\/$/, '')

function Tab({ n, theme }) {
  return (
    <div
      className="ml-[calc(0.75rem+var(--i)*2.5rem)] sm:ml-[calc(0.75rem+var(--i)*9rem)]"
      style={{ '--i': (n - 1) % 3 }}
    >
      <span className={`folder-tab ${theme.bg} ${theme.fg}`}>
        <Spark />
        Project {pad(n)}
      </span>
    </div>
  )
}

function Screenshot({ project, priority = false, sizes, tilt = 'rotate-[1deg]', small = false }) {
  const portrait = project.portrait
  const useSrcSet = !small && !portrait
  return (
    <div
      className={`relative mx-auto w-full ${
        portrait ? 'max-w-[17rem] sm:max-w-[19rem]' : 'max-w-xl'
      }`}
    >
      <span aria-hidden="true" className="tape -left-4 -top-2 -rotate-[28deg]" />
      <span aria-hidden="true" className="tape -right-4 -top-2 rotate-[28deg]" />
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} in a new tab`}
        className={`block border-[3px] border-paper bg-paper transition-transform duration-500 ease-out hover:rotate-0 motion-reduce:transition-none ${tilt}`}
      >
        <img
          src={small ? project.imageSmall : project.image}
          srcSet={
            useSrcSet
              ? `${project.imageSmall} 900w, ${project.image} 1600w`
              : undefined
          }
          sizes={sizes}
          width={portrait ? '750' : '1600'}
          height={portrait ? '1000' : '1120'}
          alt={project.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className={`w-full object-cover object-top ${
            portrait ? 'aspect-[3/4]' : 'aspect-[1600/1120]'
          }`}
        />
      </a>
    </div>
  )
}

function Details({ project, theme }) {
  return (
    <dl className={`mt-6 space-y-3 border-t-2 ${theme.rule} pt-5 text-sm`}>
      <div className="flex gap-4">
        <dt className="w-14 shrink-0 pt-0.5 font-mono text-[0.68rem] uppercase tracking-wider opacity-70">
          Role
        </dt>
        <dd>{project.role}</dd>
      </div>
      <div className="flex gap-4">
        <dt className="w-14 shrink-0 pt-1 font-mono text-[0.68rem] uppercase tracking-wider opacity-70">
          Stack
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li
                key={s}
                className="border border-current/50 px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide"
              >
                {s}
              </li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="flex gap-4">
        <dt className="w-14 shrink-0 pt-0.5 font-mono text-[0.68rem] uppercase tracking-wider opacity-70">
          Built
        </dt>
        <dd>
          <ul className="space-y-1">
            {project.contributions.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-current" />
                {c}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  )
}

function ViewLink({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} (${domain(project.href)}) in a new tab`}
      className="mt-7 inline-flex min-h-11 items-center gap-2 border-2 border-current px-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
    >
      View project
      <ArrowUpRight />
    </a>
  )
}

function FeaturedFolder({ project, n, last, priority = false }) {
  const theme = THEMES[project.id]
  const flip = n % 2 === 0
  return (
    <Reveal
      as="article"
      id={project.id}
      className={`relative scroll-mt-24 ${n > 1 ? '-mt-10' : ''}`}
      style={{ zIndex: n }}
    >
      <Tab n={n} theme={theme} />
      <div
        className={`${theme.bg} ${theme.fg} px-5 pt-9 sm:px-10 sm:pt-12 lg:px-14 ${
          last ? 'pb-10 sm:pb-14' : 'pb-24 sm:pb-28'
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-2">
          <div className={flip ? 'lg:order-last' : ''}>
            <p className="eyebrow flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 bg-current" />
              {project.type}
            </p>
            <h3 className="mt-4 text-[clamp(2.3rem,5.4vw,4.1rem)] font-extrabold leading-[0.95] tracking-tight">
              {project.name}
            </h3>
            <p className={`mt-5 max-w-md text-[0.95rem] leading-relaxed ${theme.soft}`}>
              {project.description}
            </p>
            <Details project={project} theme={theme} />
            <ViewLink project={project} />
          </div>

          <Screenshot
            project={project}
            priority={priority}
            sizes="(min-width: 1024px) 36rem, 90vw"
            tilt={flip ? '-rotate-[1deg]' : 'rotate-[1deg]'}
          />
        </div>
      </div>
    </Reveal>
  )
}

function CompactFolder({ project, n }) {
  const theme = THEMES[project.id]
  return (
    <Reveal as="article" id={project.id} className="flex scroll-mt-24 flex-col">
      <Tab n={n} theme={theme} />
      <div className={`${theme.bg} ${theme.fg} flex flex-1 flex-col px-5 pb-8 pt-9 sm:px-8`}>
        <Screenshot
          project={project}
          small
          sizes="(min-width: 1024px) 26rem, 90vw"
          tilt={n % 2 ? 'rotate-[1deg]' : '-rotate-[1deg]'}
        />
        <p className="eyebrow mt-9 flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-2 bg-current" />
          {project.type}
        </p>
        <h3 className="mt-3 text-[clamp(1.8rem,3.6vw,2.5rem)] font-extrabold leading-none tracking-tight">
          {project.name}
        </h3>
        <p className={`mt-4 text-sm leading-relaxed ${theme.soft}`}>{project.description}</p>
        <dl className={`mt-5 space-y-1.5 border-t-2 ${theme.rule} pt-4 font-mono text-[0.72rem] uppercase tracking-wide`}>
          <div className="flex gap-3">
            <dt className="w-12 shrink-0 opacity-70">Role</dt>
            <dd className="normal-case tracking-normal">{project.role}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-12 shrink-0 opacity-70">Stack</dt>
            <dd>{project.stack.join(' / ')}</dd>
          </div>
        </dl>
        <div className="mt-auto">
          <ViewLink project={project} />
        </div>
      </div>
    </Reveal>
  )
}

function GroupHeading({ title, lead, id }) {
  return (
    <Reveal className="text-center">
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-[2px] flex-1 bg-ink" />
        <h3
          id={id}
          className="font-pixel text-[clamp(1.6rem,4.6vw,2.6rem)] font-bold uppercase leading-none tracking-[0.04em]"
        >
          {title}
        </h3>
        <span aria-hidden="true" className="h-[2px] flex-1 bg-ink" />
      </div>
      <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-ink-soft">
        {lead}
      </p>
    </Reveal>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24">
      <div className="shell">
        <Reveal className="text-center">
          <h2 className="label-box">selected work</h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
            A short list on purpose, chosen for range rather than count:
            commerce, publishing, logistics, healthcare and more, split into
            what I built for clients and what I built for myself.
          </p>
        </Reveal>

        {/* Client work */}
        <div className="mt-14 sm:mt-20">
          <GroupHeading
            id="client-work"
            title="Client work"
            lead="Sites and platforms built for businesses and organisations."
          />

          <div className="mt-12">
            {clientFeatured.map((project, i) => (
              <FeaturedFolder
                key={project.id}
                project={project}
                n={i + 1}
                priority={i === 0}
                last={i === clientFeatured.length - 1}
              />
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 lg:grid-cols-3">
            {clientSecondary.map((project, i) => (
              <CompactFolder
                key={project.id}
                project={project}
                n={clientFeatured.length + i + 1}
              />
            ))}
          </div>
        </div>

        {/* Personal work */}
        <div className="mt-24 sm:mt-32">
          <GroupHeading
            id="personal-work"
            title="My own work"
            lead="Products I designed and built myself."
          />

          <div className="mt-12">
            {personalProjects.map((project, i) => (
              <FeaturedFolder
                key={project.id}
                project={project}
                n={i + 1}
                last={i === personalProjects.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
