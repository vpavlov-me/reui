/**
 * Utility types for components
 */

import * as React from "react"

/**
 * Extract variant prop from component props
 */
export type ComponentVariant<T> = T extends { variant?: infer V } ? V : never

/**
 * Extract size prop from component props
 */
export type ComponentSize<T> = T extends { size?: infer S } ? S : never

/**
 * Flexible className type
 */
export type ClassName = string | string[] | Record<string, boolean> | undefined

/**
 * Props for polymorphic components (as prop pattern)
 */
export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props> & {
    as?: T
  }

/**
 * Ref for polymorphic components
 */
export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"]

/**
 * Combined props and ref for polymorphic components
 */
export type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<T, Props> & { ref?: PolymorphicRef<T> }

/**
 * Common accessibility props
 */
export interface AccessibilityProps {
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
  "aria-live"?: "polite" | "assertive" | "off"
  "aria-atomic"?: boolean
  "aria-relevant"?:
    | "additions"
    | "removals"
    | "text"
    | "all"
    | "additions text"
  role?: string
}

/**
 * Common variant values
 */
export type Variant =
  | "default"
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link"

/**
 * Common size values
 */
export type Size = "sm" | "md" | "lg" | "default" | "icon"

/**
 * Common color values
 */
export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "destructive"
