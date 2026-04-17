import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { MENU_PHOTO_SRCS } from '../menuPhotos'

export function MenuPhotoGallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState<number | null>(null)
  const total = MENU_PHOTO_SRCS.length

  const close = useCallback(() => setActive(null), [])
  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? null : i === 0 ? total - 1 : i - 1))
  }, [total])
  const showNext = useCallback(() => {
    setActive((i) => (i === null ? null : i === total - 1 ? 0 : i + 1))
  }, [total])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active, close, showPrev, showNext])

  return (
    <div className="menu-gallery">
      <p className="prose menu-lead">{t.galleryLead}</p>
      <ul className="menu-gallery__grid">
        {MENU_PHOTO_SRCS.map((src, index) => (
          <li key={src} className="menu-gallery__cell">
            <button
              type="button"
              className="menu-gallery__thumb"
              onClick={() => setActive(index)}
              aria-label={`${t.galleryImageAlt} ${index + 1} / ${total}`}
            >
              <img
                src={src}
                alt=""
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding="async"
                sizes="(max-width: 520px) 50vw, (max-width: 900px) 33vw, 280px"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          className="menu-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.galleryImageAlt} ${active + 1} / ${total}`}
        >
          <div className="menu-gallery__backdrop" onClick={close} role="presentation" />
          <div className="menu-gallery__dialog">
            <button
              type="button"
              className="menu-gallery__icon menu-gallery__icon--close"
              onClick={close}
              aria-label={t.galleryCloseAria}
            >
              ×
            </button>
            <button
              type="button"
              className="menu-gallery__icon menu-gallery__icon--prev"
              onClick={showPrev}
              aria-label={t.galleryPrevAria}
            >
              ‹
            </button>
            <button
              type="button"
              className="menu-gallery__icon menu-gallery__icon--next"
              onClick={showNext}
              aria-label={t.galleryNextAria}
            >
              ›
            </button>
            <div className="menu-gallery__frame">
              <img
                src={MENU_PHOTO_SRCS[active]}
                alt={`${t.galleryImageAlt} ${active + 1} / ${total}`}
                className="menu-gallery__full"
              />
            </div>
            <p className="menu-gallery__counter">
              {active + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
