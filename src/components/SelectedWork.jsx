import { featuredProjects, secondaryProjects } from '../data/projects'
import SectionHeader from './SectionHeader'
import FeaturedProject from './FeaturedProject'
import SecondaryProject from './SecondaryProject'
import Reveal from './Reveal'

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="01"
          id="Selected work"
          title="The projects that best show what I can build."
          lead="A short list on purpose. Six products and sites, chosen for range rather than count — commerce, publishing, logistics, healthcare and more, each taken from brief to live."
        />

        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-32">
          {featuredProjects.map((project, i) => (
            <FeaturedProject
              key={project.id}
              project={project}
              n={i + 1}
              layout={i === 0 ? 'wide' : 'split'}
              flip={i % 2 === 0}
            />
          ))}
        </div>

        <Reveal className="mt-24 sm:mt-32">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Also built</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Two more sites where the work was mostly design and front-end &mdash;
            still shipped, still in use.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {secondaryProjects.map((project, i) => (
            <SecondaryProject
              key={project.id}
              project={project}
              n={featuredProjects.length + i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
