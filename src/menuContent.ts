/** Full menu from Isola Verde menus (Italian). */
export type MenuDish = {
  name: string
  /** Omit or leave empty when the menu has no ingredient line. */
  description?: string
  price?: string
}

export type MenuPanel = {
  id: string
  title: string
  dishes: MenuDish[]
}

export const menuPanels: MenuPanel[] = [
  {
    id: 'vegetarian',
    title: 'Menu vegetariano',
    dishes: [
      {
        name: 'Alicia',
        description:
          'Carote, patate, peperoni, cavolo misto (cotti).',
        price: '€ 8,00',
      },
      {
        name: 'Shiro',
        description: 'Purè di ceci.',
        price: '€ 8,00',
      },
      {
        name: 'Tumtumo lenticchia',
        description:
          'Lenticchie, cipolla, salse (berbere piccante o curcuma).',
        price: '€ 8,00',
      },
      {
        name: 'Erbette (spinaci)',
        description:
          'Cotte al vapore con carote, patate, peperoni.',
        price: '€ 8,00',
      },
      {
        name: 'Spris vegetariana (vegana)',
        description:
          'Misto verdure, lenticchie, ceci, insalata.',
        price: '€ 10,00',
      },
      {
        name: 'Insalata mista',
        price: '€ 8,00',
      },
    ],
  },
  {
    id: 'meat',
    title: 'Menu piatti tipici',
    dishes: [
      {
        name: 'Zighini di manzo',
        description: 'Carne di manzo, salsa berbere piccante.',
        price: '€ 12,00',
      },
      {
        name: 'Spris kilwa',
        description:
          'Rosso piccante o bianco non piccante. Carne di manzo, cipolla, pomodoro fresco.',
        price: '€ 12,00',
      },
      {
        name: 'Kitfo',
        description:
          'Carne di manzo trita, mitmita piccante, burro eritreo.',
        price: '€ 14,00',
      },
      {
        name: 'Zil-zil tibs',
        description:
          'Carne di manzo tagliata a strisce, grigliata con spezie.',
        price: '€ 14,00',
      },
      {
        name: 'Gored-gored',
        description:
          'Carne di manzo piccante (berbere, mitmita) e burro eritreo.',
        price: '€ 14,00',
      },
      {
        name: 'Zighini di agnello',
        description: 'Carne di agnello, salsa berbere piccante.',
        price: '€ 12,00',
      },
      {
        name: 'Zighini di pollo',
        description: 'Pollo, cipolla, piccante, uova.',
        price: '€ 12,00',
      },
      {
        name: 'Misto carne — vegetariano',
        description:
          'Misto vegetariano con carne (piccante o non piccante).',
        price: '€ 14,00',
      },
    ],
  },
  {
    id: 'rice-pasta',
    title: 'Riso & pasta',
    dishes: [
      {
        name: 'Riso con carne',
        price: '€ 10,00',
      },
      {
        name: 'Riso con misto vegetariano',
        price: '€ 8,00',
      },
      {
        name: 'Spaghetti con pomodoro',
        price: '€ 8,00',
      },
      {
        name: 'Spaghetti con carne',
        price: '€ 10,00',
      },
    ],
  },
]

export const menuDesserts: MenuDish[] = [
  { name: 'Torte fatte in casa' },
  { name: 'Torta di nonna' },
  { name: 'Mix di biscotti' },
]

export const menuPromo = {
  it: 'Con tutti i menu elencati: acqua gratis.',
  ti: 'ምስ ኩሉ መግቢ ማይ ብነጻ',
}
