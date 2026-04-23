"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva } from "class-variance-authority"

import { cn } from "@repo/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2 min-w-8",
        lg: "h-10 px-3 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, icon, activeIcon, children, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  >
    {icon && activeIcon ? (
      <>
        <span className="flex group-data-[state=on]/toggle:hidden">{icon}</span>
        <span className="hidden group-data-[state=on]/toggle:flex">{activeIcon}</span>
      </>
    ) : (
      icon && <span className="flex">{icon}</span>
    )}
    
    {children}
  </TogglePrimitive.Root>
))
Toggle.displayName = TogglePrimitive.Root.displayName

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, icon, activeIcon, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {icon && activeIcon ? (
        <>
          <span className="flex group-data-[state=on]/toggle:hidden">{icon}</span>
          <span className="hidden group-data-[state=on]/toggle:flex">{activeIcon}</span>
        </>
      ) : (
        icon && <span className="flex">{icon}</span>
      )}
      
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { Toggle, ToggleGroup, ToggleGroupItem, toggleVariants }