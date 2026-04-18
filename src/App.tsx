import { Hero } from './components/Hero'
import { MenuBoard } from './components/MenuBoard'
import { MenuPhotoGallery } from './components/MenuPhotoGallery'
import { PageSection } from './components/PageSection'
import { AmbientPromo } from './components/AmbientPromo'
import { SpotlightRail } from './components/SpotlightRail'
import { SiteHeader } from './components/SiteHeader'
import { VisitCard } from './components/VisitCard'
import { useLanguage } from './i18n/useLanguage'
import { siteContent } from './siteContent'
import './App.css'

function App() {
  const { locale, t } = useLanguage()
  const { food, story, menuPage, gallery } = siteContent

  const footerNav = [
    { label: t.nav.food, href: '#food' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.visit, href: '#visit' },
  ]

  return (
    <div className="app">
      <div className="app__ambient" aria-hidden />
      <AmbientPromo />
      <SiteHeader />
      <main key={locale} lang={locale}>
        <Hero />
        <SpotlightRail />

        <PageSection id="food" emoji={food.emoji} title={t.foodTitle}>
          <p className="prose">{t.foodIntro}</p>
          <ul className="bullet-list">
            {t.foodBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>

        <PageSection id="story" emoji={story.emoji} title={t.storyTitle}>
          <p className="prose">{t.storyBody}</p>
        </PageSection>

        <PageSection id="menu" emoji={menuPage.emoji} title={t.menuPageTitle}>
          <p className="prose menu-lead">{t.menuPageLead}</p>
          <MenuBoard />
        </PageSection>

        <PageSection id="gallery" emoji={gallery.emoji} title={t.galleryTitle}>
          <MenuPhotoGallery />
        </PageSection>

        <VisitCard />
      </main>
      <footer className="site-footer">
        <div className="site-footer__accent" aria-hidden />
        <div className="site-footer__inner">
          <nav className="site-footer__nav" aria-label={t.footerNavAria}>
            <ul className="site-footer__list">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a className="site-footer__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="site-footer__top" href="#top">
            {t.footerBackToTop}
          </a>
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {siteContent.brand.name}{' '}
            <span lang="am">{siteContent.brand.nameScript}</span> · Milan
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
