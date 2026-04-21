"use client"

import * as React from "react"
import * as RootAvatar from "@radix-ui/react-avatar"
import { cva } from "class-variance-authority"
import { cn } from "@repo/utils"


const avatarStyles = cva(
  "relative flex shrink-0 overflow-hidden rounded-full select-none",
  {
    variants: {
      size: {
        sm: "size-6",
        default: "size-8",
        lg: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)


const Avatar = React.forwardRef(({ className, size = "default", ...props }, ref) => (
  <RootAvatar.Root
    ref={ref}
    data-size={size}
    className={cn(avatarStyles({ size }), "group/avatar", className)}
    {...props}
  />
))
Avatar.displayName = "Avatar"


const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <RootAvatar.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"


const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <RootAvatar.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      "group-data-[size=sm]/avatar:text-xs text-sm font-medium",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"


const AvatarBadge = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "absolute bottom-0 right-0 z-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background",
      "group-data-[size=sm]/avatar:size-2",
      "group-data-[size=default]/avatar:size-2.5",
      "group-data-[size=lg]/avatar:size-3",
      className
    )}
    {...props}
  />
))
AvatarBadge.displayName = "AvatarBadge"


const AvatarGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center -space-x-3",
      "[&_span]:ring-2 [&_span]:ring-background",
      className
    )}
    {...props}
  />
))
AvatarGroup.displayName = "AvatarGroup"


const AvatarGroupCount = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold ring-2 ring-background size-8",
      className
    )}
    {...props}
  />
))
AvatarGroupCount.displayName = "AvatarGroupCount"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}