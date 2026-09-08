import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import About from './components/About'
import BeyondTheCode from './components/BeyondTheCode'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import SignatureFooter from './components/SignatureFooter'

/**
 * Deep links (e.g. /#contact) need re-aligning as late-loading fonts and
 * images reflow the page under the anchor. Re-run the jump a few times over
 * the first second, and once more when fonts settle — but never after the
 * visitor has started scrolling themselves.
 */
function useHashAlign() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return

    let cancelled = false
    const align = () => {
      if (cancelled) return
      document.getElementById(id)?.scrollIntoView()
    }
    const stop = () => {
      cancelled = true
    }

    window.addEventListener('wheel', stop, { once: true, passive: true })
    window.addEventListener('touchstart', stop, { once: true, passive: true })
    window.addEventListener('keydown', stop, { once: true })

    const timers = [0, 120, 350, 700, 1100].map((ms) => setTimeout(align, ms))
    document.fonts?.ready.then(align).catch(() => {})

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchstart', stop)
      window.removeEventListener('keydown', stop)
    }
  }, [])
}

export default function App() {
  useHashAlign()

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <BeyondTheCode />
        <Capabilities />
        <Contact />
      </main>
      <SignatureFooter />
    </>
  )
}
