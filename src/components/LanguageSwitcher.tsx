import { localeOptions } from '../i18n/translations'
import type { Locale } from '../i18n/types'
import { useLanguage } from '../i18n/useLanguage'

function parseLocale(value: string): Locale {
  return value === 'en' ? 'en' : 'it'
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className="lang-switch">
      <label className="lang-switch__label" htmlFor="site-lang">
        <span className="lang-switch__icon" aria-hidden>
          🌐
        </span>
        <span className="sr-only">{t.langLabel}</span>
      </label>
      <select
        id="site-lang"
        className="lang-switch__select"
        value={locale}
        onChange={(e) => setLocale(parseLocale(e.target.value))}
      >
        {localeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
