import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from './types'
import { LanguageContext } from './languageContext'
import { LOCALE_STORAGE_KEY, translations } from './translations'

function readStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (raw === 'en' || raw === 'it') return raw
  } catch {
    /* ignore */
  }
  return 'it'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
