/**
 * Menu board photos hosted on GitHub (public raw URLs).
 * To add images: push new files to https://github.com/Dafi-web/menu-photos
 * and append the filename here (no need for full URLs).
 */
const OWNER = 'Dafi-web'
const REPO = 'menu-photos'
const BRANCH = 'main'

/** Filenames as they appear on the default branch (sorted by capture time). */
export const MENU_PHOTO_FILENAMES = [
  'WhatsApp Image 2026-04-17 at 15.24.31.jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.31 (1).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.31 (2).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.31 (3).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.31 (4).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.32.jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.32 (1).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.33.jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.33 (1).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.33 (2).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.33 (3).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.34.jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.34 (1).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.35 (1).jpeg',
  'WhatsApp Image 2026-04-17 at 15.24.35 (2).jpeg',
] as const

export function menuPhotoSrc(filename: string): string {
  const encoded = encodeURIComponent(filename)
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${encoded}`
}

export const MENU_PHOTO_SRCS: readonly string[] = MENU_PHOTO_FILENAMES.map(menuPhotoSrc)
