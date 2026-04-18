import { useCallback, useEffect, useId, useState } from 'react'
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

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  const { t } = useLanguage()
  const nav = [
    { label: t.nav.food, href: '#food' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.visit, href: '#visit' },
  ] as const

  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.href}>
          <a className="site-header__link" href={item.href} onClick={onNavigate}>
            <span className="site-header__link-text">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const { brand } = siteContent
  const { t } = useLanguage()
  const menuId = useId()
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <header className={open ? 'site-header site-header--open' : 'site-header'}>
      <div className="site-header__bar">
        <a href="#top" className="site-header__brand" onClick={close}>
          <LogoWordmark name={brand.name} />
          <span className="site-header__script" lang="am">
            {brand.nameScript}
          </span>
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label={t.navAria}>
          <NavLinks className="site-header__nav-list" />
        </nav>

        <div className="site-header__tools">
          <div className="site-header__lang site-header__lang--desktop">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            className="site-header__burger"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t.navMenuClose : t.navMenuOpen}</span>
            <span className="site-header__burger-icon" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id={menuId} className="site-header__drawer" aria-hidden={!open}>
        <nav className="site-header__drawer-nav" aria-label={t.navAria}>
          <NavLinks className="site-header__drawer-list" onNavigate={close} />
        </nav>
        <div className="site-header__drawer-lang">
          <LanguageSwitcher />
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="site-header__scrim"
          aria-label={t.navMenuClose}
          onClick={close}
        />
      ) : null}
    </header>
  )
}
