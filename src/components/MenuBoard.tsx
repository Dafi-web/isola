import { menuDesserts, menuPanels, menuPromo } from '../menuContent'
import type { Messages } from '../i18n/types'
import { useLanguage } from '../i18n/useLanguage'

function panelTitle(id: string, fallback: string, t: Messages) {
  switch (id) {
    case 'vegetarian':
      return t.menuPanelVegetarian
    case 'meat':
      return t.menuPanelMeat
    case 'rice-pasta':
      return t.menuPanelRicePasta
    default:
      return fallback
  }
}

export function MenuBoard() {
  const { t } = useLanguage()

  return (
    <div className="menu-board">
      <div className="menu-board__frame">
        {menuPanels.map((panel) => (
          <section
            key={panel.id}
            className="menu-panel"
            id={`menu-${panel.id}`}
            aria-labelledby={`menu-${panel.id}-title`}
          >
            <h3 className="menu-panel__title" id={`menu-${panel.id}-title`}>
              {panelTitle(panel.id, panel.title, t)}
            </h3>
            <ul className="menu-panel__list">
              {panel.dishes.map((dish) => (
                <li key={dish.name} className="menu-panel__row">
                  <div className="menu-panel__main">
                    <span className="menu-panel__name">{dish.name}</span>
                    {dish.description ? (
                      <p className="menu-panel__desc">{dish.description}</p>
                    ) : null}
                  </div>
                  {dish.price ? (
                    <span className="menu-panel__price">{dish.price}</span>
                  ) : (
                    <span className="menu-panel__price menu-panel__price--muted">
                      —
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section
          className="menu-panel menu-panel--dessert"
          id="menu-desserts"
          aria-labelledby="menu-desserts-title"
        >
          <h3 className="menu-panel__title" id="menu-desserts-title">
            {t.menuDessertsTitle}
          </h3>
          <ul className="menu-panel__list">
            {menuDesserts.map((dish) => (
              <li key={dish.name} className="menu-panel__row">
                <div className="menu-panel__main">
                  <span className="menu-panel__name">{dish.name}</span>
                  {dish.description ? (
                    <p className="menu-panel__desc">{dish.description}</p>
                  ) : null}
                </div>
                <span className="menu-panel__price menu-panel__price--muted">
                  —
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="menu-promo" role="note">
          <span className="menu-promo__icon" aria-hidden>
            💧
          </span>
          <p className="menu-promo__it">{t.menuPromoPrimary}</p>
          <p className="menu-promo__ti" lang="am">
            {menuPromo.ti}
          </p>
        </div>
      </div>
    </div>
  )
}
