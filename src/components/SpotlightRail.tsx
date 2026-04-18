import { useLanguage } from '../i18n/useLanguage'

export function SpotlightRail() {
  const { t } = useLanguage()

  const items = [
    { href: '#food', label: t.nav.food, emoji: '🍽' },
    { href: '#story', label: t.nav.story, emoji: '🌍' },
    { href: '#menu', label: t.nav.menu, emoji: '📜' },
    { href: '#gallery', label: t.nav.gallery, emoji: '📸' },
    { href: '#visit', label: t.nav.visit, emoji: '📍' },
  ] as const

  return (
    <nav className="spotlight-rail" aria-label={t.spotlightAria}>
      <div className="spotlight-rail__track">
        {items.map((item) => (
          <a key={item.href} className="spotlight-rail__card" href={item.href}>
            <span className="spotlight-rail__emoji" aria-hidden>
              {item.emoji}
            </span>
            <span className="spotlight-rail__label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
