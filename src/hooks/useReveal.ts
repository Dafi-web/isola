import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/useLanguage'

/** Adds `reveal--visible` when the element enters the viewport (once). */
export function useReveal<T extends HTMLElement>(enabled = true) {
  const { locale } = useLanguage()
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      el.classList.add('reveal--visible')
      return
    }

    const reveal = () => {
      el.classList.add('reveal--visible')
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    )

    const id = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const inView = r.top < vh * 0.94 && r.bottom > vh * 0.06
      if (inView) {
        reveal()
        io.disconnect()
        return
      }
      io.observe(el)
    })

    return () => {
      cancelAnimationFrame(id)
      io.disconnect()
    }
  }, [enabled, locale])

  return ref
}
