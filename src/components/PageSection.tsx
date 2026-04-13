import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type PageSectionProps = {
  id: string
  emoji: string
  title: string
  children: ReactNode
}

export function PageSection({ id, emoji, title, children }: PageSectionProps) {
  const headingId = `${id}-heading`
  const revealRef = useReveal<HTMLElement>(true)

  return (
    <section
      ref={revealRef}
      className="page-section reveal"
      id={id}
      aria-labelledby={headingId}
    >
      <h2 className="page-section__title" id={headingId}>
        <span className="page-section__emoji" aria-hidden>
          {emoji}
        </span>{' '}
        {title}
      </h2>
      <div className="page-section__body">{children}</div>
    </section>
  )
}
