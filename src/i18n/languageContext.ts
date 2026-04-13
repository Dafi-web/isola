import { createContext } from 'react'
import type { Locale } from './types'
import type { Messages } from './types'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
