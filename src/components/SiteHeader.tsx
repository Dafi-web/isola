import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../i18n/useLanguage'
import { siteContent } from '../siteContent'

function LogoWordmark({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    const first = parts[0]
    const rest = parts.slice(1).join(' ')
    return (
      <span className="site-header__logo">
        <span className="site-header__logo-part site-header__logo-part--1">{first}</span>
        <span className="site-header__logo-part site-header__logo-part--2"> {rest}</span>
      </span>
    )
  }
  return (
    <span className="site-header__logo">
      <span className="site-header__logo-part site-header__logo-part--1">{name}</span>
    </span>
  )
}

export function SiteHeader() {
  const { brand } = siteContent
  const { t } = useLanguage()

  const nav = [
    { label: t.nav.food, href: '#food' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.visit, href: '#visit' },
  ]

  return (
    <header className="site-header">
      <a href="#top" className="site-header__brand">
        <LogoWordmark name={brand.name} />
        <span className="site-header__script" lang="am">
          {brand.nameScript}
        </span>
      </a>
      <div className="site-header__end">
        <nav className="site-header__nav" aria-label={t.navAria}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="site-header__link" href={item.href}>
                  <span className="site-header__link-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
