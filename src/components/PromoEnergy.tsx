import { useLanguage } from '../i18n/useLanguage'

/**
 * Energetic promo motion: fast marquee + corner accents.
 * Uses shimmer/glow (not harsh luminance strobing) for visibility & accessibility.
 */
export function PromoEnergy() {
  const { t } = useLanguage()
  const phrases = [...t.promoPhrases, ...t.promoPhrases]

  return (
    <>
      <div className="energy-corners" aria-hidden>
        <span className="energy-corners__spark energy-corners__spark--tl" />
        <span className="energy-corners__spark energy-corners__spark--tr" />
        <span className="energy-corners__spark energy-corners__spark--bl" />
        <span className="energy-corners__spark energy-corners__spark--br" />
      </div>

      <div className="promo-ticker" role="presentation">
        <div className="promo-ticker__fade promo-ticker__fade--left" aria-hidden />
        <div className="promo-ticker__fade promo-ticker__fade--right" aria-hidden />
        <div className="promo-ticker__track">
          {phrases.map((text, i) => (
            <span key={`${text}-${i}`} className="promo-ticker__chunk">
              <span className="promo-ticker__dot" aria-hidden>
                ✦
              </span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
