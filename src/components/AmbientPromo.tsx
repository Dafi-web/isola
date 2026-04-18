import { useLanguage } from '../i18n/useLanguage'

/** Subtle ambient light + bottom phrase ticker (respects prefers-reduced-motion in CSS). */
export function AmbientPromo() {
  const { t } = useLanguage()
  const loop = [...t.promoPhrases, ...t.promoPhrases]

  return (
    <>
      <div className="app__shine" aria-hidden>
        <div className="app__shine__layer app__shine__layer--corners" />
        <div className="app__shine__layer app__shine__layer--breathe" />
      </div>

      <div className="promo-ticker" role="presentation" aria-hidden>
        <div className="promo-ticker__inner">
          {loop.map((line, i) => (
            <span key={`${line}-${i}`} className="promo-ticker__item">
              <span className="promo-ticker__star" aria-hidden>
                ✦
              </span>
              {line}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
