import { useLanguage } from '../i18n/useLanguage'
import { siteContent } from '../siteContent'
import { useReveal } from '../hooks/useReveal'

export function VisitCard() {
  const { visit, contact, closing } = siteContent
  const { t } = useLanguage()
  const phoneIsPlaceholder = contact.phone.trim().startsWith('[')
  const telHref = `tel:${contact.phone.replace(/[^\d+]/g, '')}`
  const revealRef = useReveal<HTMLDivElement>(true)

  return (
    <div ref={revealRef} className="visit-stack reveal">
      <div className="card card--lift" id="visit">
        <h2 className="card__title">
          <span aria-hidden>{visit.emoji}</span> {t.visitTitle}
        </h2>
        <p className="prose">{t.visitIntro}</p>
        <ul className="contact-list">
          <li>
            <span aria-hidden>📍</span>
            {contact.mapsUrl ? (
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contactAddress}
                <span className="sr-only"> {t.mapsSr}</span>
              </a>
            ) : (
              <span>{t.contactAddress}</span>
            )}
          </li>
          <li>
            <span aria-hidden>📞</span>
            {phoneIsPlaceholder ? (
              <span>{contact.phone}</span>
            ) : (
              <a href={telHref}>{contact.phone}</a>
            )}
          </li>
          <li>
            <span aria-hidden>💬</span>
            {contact.whatsappUrl ? (
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {contact.whatsapp}
                <span className="sr-only"> {t.whatsappSr}</span>
              </a>
            ) : (
              <span>{contact.whatsapp}</span>
            )}
          </li>
          <li>
            <span aria-hidden>👉</span>
            <span>{t.contactHours}</span>
          </li>
        </ul>
      </div>

      <div className="card card--lift card--accent" id="join">
        <h2 className="card__title">
          <span aria-hidden>{closing.emoji}</span> {t.closingTitle}
        </h2>
        <p className="prose prose--accent">{t.closingBody}</p>
      </div>
    </div>
  )
}
