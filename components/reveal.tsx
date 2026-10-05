"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "motion/react"

import { revealVariants, staggerParent, viewportOnce } from "@/lib/motion"

type RevealTag =
  | "div"
  | "span"
  | "p"
  | "ul"
  | "ol"
  | "li"
  | "dl"
  | "blockquote"
  | "h2"

type RevealProps = HTMLMotionProps<"div"> & {
  /** Underlying motion element. Defaults to `div`. */
  as?: RevealTag
}

/**
 * Scroll-triggered stagger parent. Wraps the standard
 * `variants={staggerParent} initial="hidden" whileInView="show" viewport`
 * incantation so sibling reveals cascade as the group scrolls into view.
 */
export function RevealGroup({
  as = "div",
  ...props
}: RevealProps): React.ReactElement {
  const Component = motion[as] as typeof motion.div
  return (
    <Component
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      {...props}
    />
  )
}

/**
 * A single staggered child — a soft fade + 8–12px lift. Drop inside a
 * {@link RevealGroup}; the parent drives the timing.
 */
export function Reveal({
  as = "div",
  ...props
}: RevealProps): React.ReactElement {
  const Component = motion[as] as typeof motion.div
  return <Component variants={revealVariants} {...props} />
}
