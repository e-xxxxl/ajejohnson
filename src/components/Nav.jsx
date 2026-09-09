import { useEffect, useState } from 'react'
import { site } from '../data/site'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the menu on Escape and when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  const barBase =
    'absolute left-0 h-[2px] w-6 bg-ink transition-all duration-300 ease-out'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? 'border-b border-line bg-paper/90 backdrop-blur-sm'
            : 'border-b border-transparent'
        }`}
      >
        <div className="shell flex h-20 items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-display text-lg tracking-tight text-ink"
            aria-label={`${site.name}, back to top`}
          >
            Ajejohnson<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-sm font-medium text-ink"
            >
              {site.email}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`${barBase} ${open ? 'top-[7px] rotate-45' : 'top-[2px]'}`}
              />
              <span
                className={`${barBase} top-[7px] ${open ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`${barBase} ${open ? 'top-[7px] -rotate-45' : 'top-[12px]'}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu: sibling of <header> so the blurred header never becomes
          its containing block and collapses it to the bar height. */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav
          className="shell flex h-full flex-col justify-center gap-1 pb-16"
          aria-label="Mobile"
        >
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl leading-tight text-ink"
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="mt-8 font-mono text-sm text-ink-soft"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </>
  )
}
