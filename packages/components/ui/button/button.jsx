import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@repo/utils';
import { buttonVariants } from './button.styles.js';

export const Button = React.forwardRef(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      type = 'button',
      disabled = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(!asChild && {
          type,
          disabled: disabled || isLoading,
        })}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';