"use client"

import { motion, useReducedMotion } from "motion/react"

/**
 * Minimal line-only icons for the Capabilities cards.
 * Single `currentColor` stroke, `fill="none"`, geometric — built in the
 * same dialect as the reference mark: thin, quiet, nested primitives.
 * Each animates on a slow, infinite loop with a reduced-motion fallback.
 */

const EASE = [0.42, 0, 0.58, 1] as const

const svgProps = {
  className: "h-full w-full",
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

// Diamond path centred on `cy` — pure geometry, no per-render allocation.
const plane = (cy: number) => `M20 ${cy - 7} L34 ${cy} L20 ${cy + 7} L6 ${cy} Z`

// 01 — Stacked planes. Isometric layers that drift apart and re-settle.
export function LayersIcon(): React.ReactElement {
  const reduced = useReducedMotion()

  const loop = (offset: number) =>
    reduced
      ? undefined
      : {
          y: [0, offset, 0],
          transition: { duration: 3.6, ease: EASE, repeat: Infinity },
        }

  return (
    <svg {...svgProps} aria-hidden>
      <motion.path d={plane(13)} animate={loop(-2)} />
      <motion.path d={plane(20)} opacity={0.85} />
      <motion.path d={plane(27)} animate={loop(2)} />
    </svg>
  )
}

// Three sonar rings, staggered by index — stable, so module scope.
const PULSE_RINGS = [0, 1, 2]

// 02 — Pulse rings. Concentric rings emanating outward, sonar-style.
export function PulseIcon(): React.ReactElement {
  const reduced = useReducedMotion()

  return (
    <svg {...svgProps} aria-hidden>
      <circle cx={20} cy={20} r={2} fill="currentColor" stroke="none" />
      {PULSE_RINGS.map((ring) => (
        <motion.circle
          key={ring}
          cx={20}
          cy={20}
          r={6}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={
            reduced ? { scale: 1.6, opacity: 0.4 } : { scale: 0.4, opacity: 0 }
          }
          animate={
            reduced
              ? undefined
              : {
                  scale: [0.4, 2.6],
                  opacity: [0.7, 0],
                  transition: {
                    duration: 3.6,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: ring * 1.2,
                  },
                }
          }
        />
      ))}
    </svg>
  )
}

// 03 — Nested frames. Concentric rounded rects with inner frames breathing.
export function FramesIcon(): React.ReactElement {
  const reduced = useReducedMotion()

  const breathe = (delay: number) =>
    reduced
      ? undefined
      : {
          scale: [1, 0.9, 1],
          opacity: [0.9, 0.55, 0.9],
          transition: { duration: 4, ease: EASE, repeat: Infinity, delay },
        }

  return (
    <svg {...svgProps} aria-hidden>
      <rect x={4} y={4} width={32} height={32} rx={8} />
      <motion.rect
        x={10}
        y={10}
        width={20}
        height={20}
        rx={5.5}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={breathe(0)}
      />
      <motion.rect
        x={15.5}
        y={15.5}
        width={9}
        height={9}
        rx={3}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={breathe(0.4)}
      />
    </svg>
  )
}

export const CAPABILITY_ICONS = [LayersIcon, PulseIcon, FramesIcon] as const
