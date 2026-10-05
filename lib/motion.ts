import type { Variants } from "motion/react"

export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: REVEAL_EASE } },
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export const viewportOnce = { once: true, margin: "-80px" } as const
