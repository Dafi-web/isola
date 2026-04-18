import { HeroAdRotator } from './HeroAdRotator'
import { useLanguage } from '../i18n/useLanguage'
import { siteContent } from '../siteContent'

export function Hero() {
  const { brand, actions } = siteContent
  const { t } = useLanguage()

  return (
    <section className="hero hero--motion" id="top" aria-labelledby="hero-heading">
      <div className="hero__aurora" aria-hidden />
      <div className="hero__inner">
        <figure className="hero__figure hero__figure--media">
          <div className="hero__media">
            <img
              className="hero__storefront"
              src="/storefront.jpg"
              width={966}
              height={974}
              alt=""
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero__media-scrim" aria-hidden />
            <div className="hero__overlay">
              <div className="hero__intro">
                <p className="hero__eyebrow">{t.heroEyebrow}</p>
                <p className="hero__gastronomy">
                  <span>{brand.gastronomy}</span>
                  <span className="hero__gastronomy-dot" aria-hidden>
                    {' '}
                    ·{' '}
                  </span>
                  <span lang="am">{brand.gastronomyScript}</span>
                </p>
              </div>

              <HeroAdRotator />

              <h1 className="hero__title" id="hero-heading">
                <span className="hero__title-line">{brand.name}</span>
                <span className="hero__title-script" lang="am">
                  {brand.nameScript}
                </span>
              </h1>
              <p className="hero__tagline">{t.brandTagline}</p>
            </div>
          </div>
          <figcaption className="hero__figure-cap">{t.heroFigureCap}</figcaption>
        </figure>

        <p className="sr-only">{t.heroImageAlt}</p>

        <div className="hero__copy">
          <p>{t.heroLead}</p>
          <p>{t.heroBody}</p>
        </div>
        <div className="hero__actions">
          <a className="button button--primary" href={actions.menu.href}>
            {t.actionsMenu}
          </a>
          <a className="button button--ghost" href={actions.book.href}>
            {t.actionsBook}
          </a>
        </div>
      </div>
    </section>
  )
}
