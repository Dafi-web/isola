/**
 * Ambient light: soft shine from all corners toward the center (desktop + mobile).
 * Decorative only; pointer-events none.
 */
export function PromoEnergy() {
  return (
    <div className="app__light-rays" aria-hidden>
      <div className="app__light-rays__glow" />
      <div className="app__light-rays__pulse" />
      <div className="app__light-rays__sweep" />
    </div>
  )
}
