/** Edit this file to customize the site for each client sale. */
export const siteContent = {
  brand: {
    name: 'Isola Verde',
    nameScript: 'ሓምላይ ደሴት',
    tagline: 'Authentic Ethiopian & Eritrean Cuisine in Milan 🇪🇹',
    gastronomy: 'Gastronomia',
    gastronomyScript: 'ቤት ቁርሲ',
  },
  contact: {
    address: 'Milan, Italy',
    mapsUrl: 'https://maps.app.goo.gl/pQ965aWbWTiccJrH7?g_st=am',
    phone: '+39 351 936 2880',
    whatsapp: 'WhatsApp',
    whatsappUrl: 'https://wa.me/393519362880',
    hours: 'Open daily for lunch & dinner',
  },
  hero: {
    /** Full URL or path under `/public` for the home hero background photo. */
    imageSrc:
      'https://raw.githubusercontent.com/Dafi-web/menu-photos/main/WhatsApp%20Image%202026-04-17%20at%2015.24.31%20(2).jpeg',
    lead:
      'Experience the true taste of Habesha culture in the heart of Milan.',
    body:
      'At Isola Verde ሓምላይ ደሴት, we serve freshly prepared injera, rich traditional stews, and vibrant dishes made with passion, tradition, and hospitality.',
  },
  food: {
    title: 'Our Food',
    emoji: '🍽️',
    intro:
      'Enjoy a unique dining experience built around sharing. Our dishes are served on traditional injera, perfect for enjoying together with friends and family.',
    highlights: [
      'Vegetarian and vegan specialties 🌱',
      'Traditional meat dishes 🍖',
      'Fresh, homemade recipes every day',
    ],
  },
  story: {
    title: 'Our Story',
    emoji: '🌍',
    body:
      'Isola Verde ሓምላይ ደሴት was created to bring the authentic flavors of Ethiopia and Eritrea to Milan. In our culture, food is more than a meal — it is a way to connect, share, and celebrate together.',
  },
  visit: {
    title: 'Visit Us',
    emoji: '📍',
    intro:
      'Come and enjoy a warm and welcoming atmosphere where everyone feels at home.',
  },
  closing: {
    title: 'Join Us Today',
    emoji: '⭐',
    body:
      'Taste something different. Share something special. We look forward to welcoming you!',
  },
  menuPage: {
    title: 'Il menu',
    emoji: '📜',
    lead: 'Piatti della tradizione, preparati ogni giorno. Prezzi come in sala.',
    pdfUrl:
      'https://github.com/Dafi-web/isola/raw/f4f293ec8cadbf63850dd4e66a7884629aacd33b/Menu_isol_260429_192031.pdf',
  },
  gallery: {
    emoji: '📸',
  },
  actions: {
    menu: { label: 'Discover our menu', href: '#menu' },
    book: { label: 'Book your table', href: '#visit' },
  },
} as const
