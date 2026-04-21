"use client"

import * as React from "react"
import { Select as BaseSelect } from "@base-ui/react/select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "@repo/utils"


const Select = BaseSelect.Root


const SelectGroup = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.Group
    ref={ref}
    data-ui-part="group"
    className={cn("scroll-my-1 p-1", className)}
    {...props}
  />
))
SelectGroup.displayName = "SelectGroup"

const SelectValue = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.Value
    ref={ref}
    data-ui-part="value"
    className={cn("flex flex-1 text-left", className)}
    {...props}
  />
))
SelectValue.displayName = "SelectValue"


const SelectTrigger = React.forwardRef(({ className, size = "default", children, ...props }, ref) => (
  <BaseSelect.Trigger
    ref={ref}
    data-ui-part="trigger"
    data-size={size}
    className={cn(
      "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "data-placeholder:text-muted-foreground",
      "data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)]",
      "*:data-[ui-part=value]:line-clamp-1 *:data-[ui-part=value]:flex *:data-[ui-part=value]:items-center *:data-[ui-part=value]:gap-1.5",
      "dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    {children}
    <BaseSelect.Icon
      render={<ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />}
    />
  </BaseSelect.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef(({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}, ref) => (
  <BaseSelect.Portal>
    <BaseSelect.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      alignItemWithTrigger={alignItemWithTrigger}
      className="isolate z-50"
    >
      <BaseSelect.Popup
        ref={ref}
        data-ui-part="content"
        data-align-trigger={alignItemWithTrigger}
        className={cn(
          "relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100",
          "data-[align-trigger=true]:animate-none",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
          "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <BaseSelect.List>{children}</BaseSelect.List>
        <SelectScrollDownButton />
      </BaseSelect.Popup>
    </BaseSelect.Positioner>
  </BaseSelect.Portal>
))
SelectContent.displayName = "SelectContent"


const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.GroupLabel
    ref={ref}
    data-ui-part="label"
    className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
    {...props}
  />
))
SelectLabel.displayName = "SelectLabel"


const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <BaseSelect.Item
    ref={ref}
    data-ui-part="item"
    className={cn(
      "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none",
      "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      className
    )}
    {...props}
  >
    <BaseSelect.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
      {children}
    </BaseSelect.ItemText>
    <BaseSelect.ItemIndicator 
      render={
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
          <CheckIcon className="pointer-events-none" />
        </span>
      } 
    />
  </BaseSelect.Item>
))
SelectItem.displayName = "SelectItem"

/**
 * Visual separator
 */
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.Separator
    ref={ref}
    data-ui-part="separator"
    className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
SelectSeparator.displayName = "SelectSeparator"


const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.ScrollUpArrow
    ref={ref}
    data-ui-part="scroll-up"
    className={cn(
      "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </BaseSelect.ScrollUpArrow>
))
SelectScrollUpButton.displayName = "SelectScrollUpButton"

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <BaseSelect.ScrollDownArrow
    ref={ref}
    data-ui-part="scroll-down"
    className={cn(
      "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </BaseSelect.ScrollDownArrow>
))
SelectScrollDownButton.displayName = "SelectScrollDownButton"

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}