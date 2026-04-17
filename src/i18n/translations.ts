import type { Locale } from './types'
import type { Messages } from './types'

export const LOCALE_STORAGE_KEY = 'isola-verde-locale'

export const localeOptions: { value: Locale; label: string }[] = [
  { value: 'it', label: 'Italiano' },
  { value: 'en', label: 'English' },
]

export const translations: Record<Locale, Messages> = {
  en: {
    langLabel: 'Language',
    navAria: 'Primary navigation',
    nav: {
      food: 'Food',
      story: 'Story',
      menu: 'Menu',
      gallery: 'Photos',
      visit: 'Visit',
    },
    brandTagline: 'Authentic Ethiopian & Eritrean cuisine in Milan 🇪🇹',
    heroEyebrow: 'Milan · Ethiopia & Eritrea',
    heroFigureCap: 'Isola Verde · African cuisine, Eritrean & Italian specialties',
    heroImageAlt:
      'Isola Verde storefront: entrance with sign and dish photos, Milan.',
    heroLead:
      'Experience the true taste of Habesha culture in the heart of Milan.',
    heroBody:
      'At Isola Verde ሓምላይ ደሴት, we serve freshly prepared injera, rich traditional stews, and vibrant dishes made with passion, tradition, and hospitality.',
    actionsMenu: 'Discover our menu',
    actionsBook: 'Book your table',
    foodTitle: 'Our food',
    foodIntro:
      'Enjoy a unique dining experience built around sharing. Our dishes are served on traditional injera — perfect for enjoying together with friends and family.',
    foodBullets: [
      'Vegetarian and vegan specialties 🌱',
      'Traditional meat dishes 🍖',
      'Fresh, homemade recipes every day',
    ],
    storyTitle: 'Our story',
    storyBody:
      'Isola Verde ሓምላይ ደሴት was created to bring the authentic flavours of Ethiopia and Eritrea to Milan. In our culture, food is more than a meal — it is a way to connect, share, and celebrate together.',
    menuPageTitle: 'Menu',
    menuPageLead:
      'Traditional dishes prepared every day. Prices as served in the restaurant.',
    galleryTitle: 'Our dishes in photos',
    galleryLead:
      'Browse the dishes from our menu — tap any image to see it larger.',
    galleryImageAlt: 'Menu photo',
    galleryCloseAria: 'Close',
    galleryPrevAria: 'Previous photo',
    galleryNextAria: 'Next photo',
    menuPanelVegetarian: 'Vegetarian menu',
    menuPanelMeat: 'Typical dishes',
    menuPanelRicePasta: 'Rice & pasta',
    menuDessertsTitle: 'Desserts',
    menuPromoPrimary: 'With every listed menu: free water.',
    visitTitle: 'Visit us',
    visitIntro:
      'Come and enjoy a warm, welcoming atmosphere where everyone feels at home.',
    closingTitle: 'Join us today',
    closingBody:
      'Taste something different. Share something special. We look forward to welcoming you!',
    contactAddress: 'Milan, Italy',
    contactHours: 'Open daily for lunch & dinner',
    mapsSr: 'Opens Google Maps in a new tab.',
    whatsappSr: 'Opens WhatsApp in a new tab.',
    footerBackToTop: 'Back to top',
    footerNavAria: 'Footer quick links',
  },
  it: {
    langLabel: 'Lingua',
    navAria: 'Navigazione principale',
    nav: {
      food: 'Cibo',
      story: 'Storia',
      menu: 'Menu',
      gallery: 'Foto',
      visit: 'Dove siamo',
    },
    brandTagline: 'Cucina etio-eritrea autentica a Milano 🇪🇹',
    heroEyebrow: 'Milano · Etiopia ed Eritrea',
    heroFigureCap:
      'Isola Verde · Cucina africana, specialità eritree e italiane',
    heroImageAlt:
      'Vetrina del ristorante Isola Verde: ingresso, insegna e foto dei piatti, Milano.',
    heroLead:
      'Vivi il vero sapore della cultura habesha nel cuore di Milano.',
    heroBody:
      'Da Isola Verde ሓምላይ ደሴት serviamo injera fresca, ricchi wot tradizionali e piatti colorati preparati con passione, tradizione e ospitalità.',
    actionsMenu: 'Scopri il menu',
    actionsBook: 'Prenota un tavolo',
    foodTitle: 'La nostra cucina',
    foodIntro:
      'Un’esperienza conviviale fatta di condivisione. I piatti sono serviti su injera tradizionale, ideali da gustare in compagnia di amici e famiglia.',
    foodBullets: [
      'Specialità vegetariane e vegane 🌱',
      'Piatti di carne tradizionali 🍖',
      'Ricette fresche e fatte in casa ogni giorno',
    ],
    storyTitle: 'La nostra storia',
    storyBody:
      'Isola Verde ሓምላይ ደሴት nasce per portare a Milano i sapori autentici di Etiopia ed Eritrea. Nella nostra cultura il cibo è molto più di un pasto: è modo di incontrarsi, condividere e festeggiare insieme.',
    menuPageTitle: 'Il menu',
    menuPageLead:
      'Piatti della tradizione, preparati ogni giorno. Prezzi come in sala.',
    galleryTitle: 'Le foto dei nostri piatti',
    galleryLead:
      'Scopri i piatti del nostro menu — tocca un’immagine per ingrandirla.',
    galleryImageAlt: 'Foto menu',
    galleryCloseAria: 'Chiudi',
    galleryPrevAria: 'Foto precedente',
    galleryNextAria: 'Foto successiva',
    menuPanelVegetarian: 'Menu vegetariano',
    menuPanelMeat: 'Menu piatti tipici',
    menuPanelRicePasta: 'Riso & pasta',
    menuDessertsTitle: 'Dolci',
    menuPromoPrimary: 'Con tutti i menu elencati: acqua gratis.',
    visitTitle: 'Vieni a trovarci',
    visitIntro:
      'Un ambiente caldo e accogliente, dove sentirsi a casa.',
    closingTitle: 'Ti aspettiamo',
    closingBody:
      'Assaggia qualcosa di diverso. Condividi qualcosa di speciale. Non vediamo l’ora di darti il benvenuto!',
    contactAddress: 'Milano, Italia',
    contactHours: 'Aperti ogni giorno a pranzo e a cena',
    mapsSr: 'Apre Google Maps in una nuova scheda.',
    whatsappSr: 'Apre WhatsApp in una nuova scheda.',
    footerBackToTop: 'Torna su',
    footerNavAria: 'Collegamenti a piè di pagina',
  },
}
