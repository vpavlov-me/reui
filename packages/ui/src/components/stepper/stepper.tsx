"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Check } from "lucide-react"

export interface StepperStep {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  optional?: boolean
}

export interface StepperProps {
  steps: StepperStep[]
  currentStep: number
  orientation?: "horizontal" | "vertical"
  onStepClick?: (stepIndex: number) => void
  className?: string
  "aria-label"?: string
}

export interface StepperContentProps {
  children: React.ReactNode
  className?: string
}

export interface StepperActionsProps {
  children: React.ReactNode
  className?: string
}

const StepperContext = React.createContext<{
  steps: StepperStep[]
  currentStep: number
  orientation: "horizontal" | "vertical"
  onStepClick?: (stepIndex: number) => void
} | null>(null)

function useStepperContext() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error("Stepper components must be used within a Stepper")
  }
  return context
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      currentStep,
      orientation = "horizontal",
      onStepClick,
      className,
      "aria-label": ariaLabel = "Progress steps",
    },
    ref
  ) => {
    return (
      <StepperContext.Provider
        value={{ steps, currentStep, orientation, onStepClick }}
      >
        <nav
          ref={ref}
          aria-label={ariaLabel}
          className={cn(
            "flex",
            orientation === "horizontal"
              ? "flex-row items-start"
              : "flex-col",
            className
          )}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepItem step={step} index={index} />
              {index < steps.length - 1 && <StepConnector index={index} />}
            </React.Fragment>
          ))}
        </nav>
      </StepperContext.Provider>
    )
  }
)
Stepper.displayName = "Stepper"

interface StepItemProps {
  step: StepperStep
  index: number
}

function StepItem({ step, index }: StepItemProps) {
  const { currentStep, orientation, onStepClick } = useStepperContext()

  const isCompleted = index < currentStep
  const isCurrent = index === currentStep
  const isClickable = onStepClick && (isCompleted || isCurrent)

  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal"
          ? "flex-col items-center"
          : "flex-row items-start gap-4",
        isClickable && "cursor-pointer"
      )}
      onClick={() => isClickable && onStepClick(index)}
      aria-current={isCurrent ? "step" : undefined}
    >
      {/* Step indicator */}
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          isCompleted
            ? "border-primary bg-primary text-primary-foreground"
            : isCurrent
            ? "border-primary text-primary"
            : "border-muted-foreground/25 text-muted-foreground"
        )}
      >
        {step.icon ? (
          step.icon
        ) : isCompleted ? (
          <Check className="h-5 w-5" />
        ) : (
          <span className="text-sm font-medium">{index + 1}</span>
        )}
      </div>

      {/* Step content */}
      <div
        className={cn(
          orientation === "horizontal" ? "mt-2 text-center" : "pt-1"
        )}
      >
        <p
          className={cn(
            "text-sm font-medium",
            isCurrent
              ? "text-foreground"
              : isCompleted
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {step.title}
          {step.optional && (
            <span className="ml-1 text-xs text-muted-foreground">(Optional)</span>
          )}
        </p>
        {step.description && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {step.description}
          </p>
        )}
      </div>
    </div>
  )
}

interface StepConnectorProps {
  index: number
}

function StepConnector({ index }: StepConnectorProps) {
  const { currentStep, orientation } = useStepperContext()
  const isCompleted = index < currentStep

  if (orientation === "horizontal") {
    return (
      <div className="flex-1 mx-4 mt-5">
        <div
          className={cn(
            "h-0.5 transition-colors",
            isCompleted ? "bg-primary" : "bg-muted-foreground/25"
          )}
        />
      </div>
    )
  }

  return (
    <div className="ml-5 flex h-8 w-0.5">
      <div
        className={cn(
          "w-full transition-colors",
          isCompleted ? "bg-primary" : "bg-muted-foreground/25"
        )}
      />
    </div>
  )
}

const StepperContent = React.forwardRef<HTMLDivElement, StepperContentProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("mt-4", className)}>
        {children}
      </div>
    )
  }
)
StepperContent.displayName = "StepperContent"

const StepperActions = React.forwardRef<HTMLDivElement, StepperActionsProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-6 flex items-center justify-between", className)}
      >
        {children}
      </div>
    )
  }
)
StepperActions.displayName = "StepperActions"

export { Stepper, StepperContent, StepperActions }
