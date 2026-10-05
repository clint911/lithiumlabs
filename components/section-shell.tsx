import * as React from "react"

import { cn } from "@/lib/utils"

export function SectionShell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}): React.ReactElement {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1240px] px-6 sm:px-10", className)}
    >
      {children}
    </div>
  )
}

type SectionHeadProps = {
  numeral: string
  label: string
  title: React.ReactNode
  aside?: string
  titleId?: string
  hiddenTitle?: boolean
  stacked?: boolean
}

export function SectionHead({
  numeral,
  label,
  title,
  aside,
  titleId,
  hiddenTitle,
  stacked,
}: SectionHeadProps): React.ReactElement {
  if (stacked) {
    return (
      <div className="mb-12">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-muted-ink">{numeral}</span>
            <span className="eyebrow text-ink uppercase">{label}</span>
          </div>
          {aside ? (
            <span className="hidden font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase md:block">
              {aside}
            </span>
          ) : null}
        </div>
        <h2
          id={titleId}
          className={cn(
            "max-w-[20ch] text-[clamp(2rem,4.4vw,2.75rem)] tracking-[-0.025em]",
            hiddenTitle && "sr-only"
          )}
        >
          {title}
        </h2>
      </div>
    )
  }

  return (
    <div className="mb-12 grid grid-cols-12 items-end gap-6">
      <div className="col-span-12 flex items-center gap-3 md:col-span-3">
        <span className="eyebrow text-muted-ink">{numeral}</span>
        <span className="eyebrow text-ink uppercase">{label}</span>
      </div>
      <h2
        id={titleId}
        className={cn(
          "col-span-12 text-[clamp(2rem,4.4vw,3.25rem)] md:col-span-7",
          hiddenTitle && "sr-only"
        )}
      >
        {title}
      </h2>
      {aside ? (
        <div className="hidden text-right font-mono text-[11px] tracking-[0.1em] text-muted-ink uppercase md:col-span-2 md:block">
          {aside}
        </div>
      ) : null}
    </div>
  )
}
