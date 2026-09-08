import { useEffect, useRef } from 'react'

/**
 * Fades content in the first time it enters the viewport.
 *
 * Safe by default: the hidden starting state is CSS-gated behind the
 * `reveal-ready` class (set in index.html only when IntersectionObserver is
 * available and motion is allowed). A watchdog also force-reveals after a
 * short delay so a throttled observer can never leave content blank.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = as
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('is-visible')
    }

    if (!('IntersectionObserver' in window)) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    const watchdog = setTimeout(() => {
      show()
      observer.disconnect()
    }, 1600)

    return () => {
      observer.disconnect()
      clearTimeout(watchdog)
    }
  }, [delay])

  return (
    <Tag ref={ref} data-reveal className={className} {...rest}>
      {children}
    </Tag>
  )
}
