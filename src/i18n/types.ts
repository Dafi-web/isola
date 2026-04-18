export type Locale = 'en' | 'it'

export type Messages = {
  langLabel: string
  navAria: string
  navMenuOpen: string
  navMenuClose: string
  nav: { food: string; story: string; menu: string; gallery: string; visit: string }
  brandTagline: string
  heroEyebrow: string
  heroFigureCap: string
  heroImageAlt: string
  heroLead: string
  heroBody: string
  actionsMenu: string
  actionsBook: string
  foodTitle: string
  foodIntro: string
  foodBullets: [string, string, string]
  storyTitle: string
  storyBody: string
  menuPageTitle: string
  menuPageLead: string
  galleryTitle: string
  galleryLead: string
  galleryImageAlt: string
  galleryCloseAria: string
  galleryPrevAria: string
  galleryNextAria: string
  menuPanelVegetarian: string
  menuPanelMeat: string
  menuPanelRicePasta: string
  menuDessertsTitle: string
  menuPromoPrimary: string
  visitTitle: string
  visitIntro: string
  closingTitle: string
  closingBody: string
  contactAddress: string
  contactHours: string
  mapsSr: string
  whatsappSr: string
  footerBackToTop: string
  footerNavAria: string
  spotlightAria: string
  /** Short lines for the bottom promo ticker (duplicated for seamless scroll). */
  promoPhrases: readonly string[]
}
