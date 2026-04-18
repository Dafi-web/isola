import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

const INTERVAL_MS = 3800

export function HeroAdRotator() {
  const { t } = useLanguage()
  const lines = t.heroAdLines
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (lines.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % lines.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [lines.length])

  return (
    <div className="hero__ad-board" role="status" aria-live="polite">
      <p className="hero__ad-text" key={index}>
        {lines[index]}
      </p>
    </div>
  )
}
