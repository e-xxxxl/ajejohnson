import { useEffect, useState } from 'react'
import { site } from '../data/site'
import {
  DiamondIcon,
  GridIcon,
  HeartIcon,
  PersonIcon,
  StarIcon,
} from './Icons'
import { SOCIAL } from './social'

const LINKS = [
  { label: 'Home', href: '#top', id: 'top', Icon: StarIcon },
  { label: 'Work', href: '#work', id: 'work', Icon: GridIcon },
  { label: 'About', href: '#about', id: 'about', Icon: PersonIcon },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities', Icon: DiamondIcon },
]

function useActiveSection() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const ids = ['top', 'work', 'about', 'beyond', 'capabilities', 'contact']
    const onScroll = () => {
      let current = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      // "Beyond the code" belongs to About; Contact has no tab of its own.
      if (current === 'beyond') current = 'about'
      if (current === 'contact') current = 'capabilities'
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

function SocialDots({ size = 'h-8 w-8' }) {
  return (
    <ul className="flex items-center gap-2">
      {site.socials.map((s) => {
        const meta = SOCIAL[s.label]
        if (!meta) return null
        const { Icon, bg } = meta
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className={`flex ${size} items-center justify-center rounded-full border-2 border-ink ${bg} text-ink transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none`}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  // Close on Escape and when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="flex h-14 items-stretch justify-between pl-3 pr-3 md:pl-4 md:pr-4">
        <div className="flex items-stretch gap-1 md:gap-3">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label={`${site.name}, back to top`}
            className="flex items-center pr-2 md:pr-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-bubble font-pixel text-sm leading-none">
              A
            </span>
          </a>

          <nav className="hidden items-stretch md:flex" aria-label="Primary">
            {LINKS.map((link) => {
              const { label, href, id } = link
              const LinkIcon = link.Icon
              const on = active === id
              return (
                <a
                  key={id}
                  href={href}
                  aria-current={on ? 'true' : undefined}
                  className={`flex items-center gap-2 border-x border-transparent px-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    on ? 'bg-sun' : 'hover:bg-paper-dim'
                  }`}
                >
                  <LinkIcon className="h-3 w-3" />
                  {label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <SocialDots />
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-9 items-center gap-2 border-2 border-ink bg-paper px-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-sun"
          >
            <HeartIcon />
            Contact
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[2px] w-5 bg-ink transition-all duration-200 ${
                  open ? 'top-[6px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-5 bg-ink transition-opacity duration-150 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-5 bg-ink transition-all duration-200 ${
                  open ? 'top-[6px] -rotate-45' : 'top-[12px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu: a normal absolutely positioned panel under the bar.
          No fixed positioning, so it never depends on an ancestor's
          containing block. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-2 border-ink bg-paper md:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {LINKS.map((link) => {
            const { label, href, id } = link
            const LinkIcon = link.Icon
            return (
            <a
              key={id}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active === id ? 'true' : undefined}
              className={`flex items-center gap-3 border-t border-ink/20 px-5 py-4 font-mono text-sm font-semibold uppercase tracking-[0.12em] ${
                active === id ? 'bg-sun' : ''
              }`}
            >
              <LinkIcon className="h-3.5 w-3.5" />
              {label}
            </a>
            )
          })}
        </nav>
        <div className="flex items-center justify-between border-t border-ink/20 px-5 py-4">
          <span className="font-hand text-xl">find me elsewhere</span>
          <SocialDots size="h-9 w-9" />
        </div>
      </div>
    </header>
  )
}
