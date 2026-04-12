# Radix UI Colors - Production Color System

## Overview

This component library uses **Radix UI Colors** as its foundational color system, providing a professional, accessible, and scalable approach to color management.

## Architecture

### Color Scales (12-Step System)

Each color has 12 steps designed for specific use cases:

- **Steps 1-2**: Backgrounds, subtle surfaces
- **Steps 3-5**: Component backgrounds, hover states
- **Steps 6-8**: Borders, separators, focus rings
- **Steps 9-10**: Solid backgrounds, primary actions
- **Steps 11-12**: Text, high-contrast elements

### Available Color Scales

#### Gray Scale (Slate)
```css
--gray-1 to --gray-12      /* Solid colors */
--gray-a1 to --gray-a12    /* Alpha/transparent variants */
```

#### Accent Scale (Indigo)
```css
--accent-1 to --accent-12    /* Solid colors */
--accent-a1 to --accent-a12  /* Alpha/transparent variants */
```

#### Error Scale (Red)
```css
--error-1 to --error-12    /* Solid colors */
--error-a1 to --error-a12  /* Alpha/transparent variants */
```

#### Success Scale (Green)
```css
--success-1 to --success-12    /* Solid colors */
--success-a1 to --success-a12  /* Alpha/transparent variants */
```

#### Warning Scale (Amber)
```css
--warning-1 to --warning-12    /* Solid colors */
--warning-a1 to --warning-a12  /* Alpha/transparent variants */
```

## Semantic Tokens

**Always use semantic tokens in components**, not raw color scales.

### Base Colors
```css
--background          /* Page background (gray-1) */
--foreground          /* Primary text (gray-12) */
--overlay             /* Modal overlays (gray-a8) */
```

### Primary/Accent
```css
--primary             /* Primary buttons (accent-9) */
--primary-hover       /* Hover state (accent-10) */
--primary-active      /* Active state (accent-11) */
--primary-foreground  /* Text on primary (white) */
```

### Secondary
```css
--secondary           /* Secondary buttons (gray-3) */
--secondary-hover     /* Hover state (gray-4) */
--secondary-foreground /* Text on secondary (gray-12) */
```

### Muted
```css
--muted               /* Muted backgrounds (gray-3) */
--muted-hover         /* Hover state (gray-4) */
--muted-foreground    /* Muted text (gray-11) */
```

### Accent (Hover States)
```css
--accent              /* Subtle accent bg (accent-3) */
--accent-hover        /* Hover state (accent-4) */
--accent-foreground   /* Text on accent (accent-11) */
```

### Destructive
```css
--destructive         /* Destructive actions (error-9) */
--destructive-hover   /* Hover state (error-10) */
--destructive-foreground /* Text on destructive (white) */
```

### Borders & Inputs
```css
--border              /* Default borders (gray-6) */
--border-hover        /* Hover state (gray-7) */
--input               /* Input borders (gray-7) */
--input-hover         /* Input hover (gray-8) */
--ring                /* Focus rings (accent-8) */
```

### Surfaces
```css
--card                /* Card backgrounds (gray-1) */
--card-foreground     /* Text on cards (gray-12) */
--popover             /* Popover backgrounds (gray-1) */
--popover-foreground  /* Text on popovers (gray-12) */
```

## Usage in Components

### ✅ Correct - Use Semantic Tokens

```jsx
// Button component
<button className="bg-primary hover:bg-primary-hover text-primary-foreground">
  Click me
</button>

// Card component
<div className="bg-card text-card-foreground border border-border">
  Content
</div>

// Overlay
<div className="bg-overlay backdrop-blur-sm">
  Modal content
</div>
```

### ❌ Incorrect - Don't Use Raw Scales

```jsx
// DON'T DO THIS
<button className="bg-accent-9 hover:bg-accent-10">
  Click me
</button>
```

### When to Use Raw Scales

Only use raw color scales for:
- Custom components with specific color needs
- Advanced theming scenarios
- One-off design requirements

```jsx
// Acceptable for custom gradient
<div className="bg-gradient-to-r from-accent-scale-9 to-accent-scale-11">
  Special element
</div>
```

## Tailwind Integration

All semantic tokens are available in Tailwind:

```jsx
// Background colors
bg-primary
bg-secondary
bg-destructive
bg-muted
bg-accent

// Hover states
hover:bg-primary-hover
hover:bg-secondary-hover
hover:bg-destructive-hover

// Text colors
text-foreground
text-muted-foreground
text-primary-foreground

// Borders
border-border
hover:border-border-hover
```

## Dark Mode

Dark mode is handled automatically by Radix Colors:

```jsx
// Add dark mode class to root element
<html className="dark">
  {/* All colors automatically switch to dark variants */}
</html>
```

No need to manually define dark mode colors - Radix handles it!

## Changing Accent Color

To change the accent color from Indigo to another color:

1. Update `packages/config/tokens.css`:

```css
/* Change imports */
@import "@radix-ui/colors/blue.css";
@import "@radix-ui/colors/blue-alpha.css";
@import "@radix-ui/colors/blue-dark.css";
@import "@radix-ui/colors/blue-dark-alpha.css";

/* Update mappings */
--accent-1: var(--blue-1);
--accent-2: var(--blue-2);
/* ... etc */
```

2. That's it! All components automatically use the new accent color.

## Available Radix Colors

You can use any of these as your accent:
- `indigo` (current)
- `blue`
- `violet`
- `purple`
- `pink`
- `crimson`
- `red`
- `orange`
- `amber`
- `yellow`
- `lime`
- `green`
- `teal`
- `cyan`
- `sky`

## Alpha Variants

Alpha variants are semi-transparent versions that blend with backgrounds:

```jsx
// Use for overlays
<div className="bg-gray-a8">
  Translucent overlay
</div>

// Use for hover effects
<button className="hover:bg-accent-a3">
  Subtle hover
</button>
```

## Accessibility

Radix Colors are designed for accessibility:

- Steps 9-10 meet WCAG AA contrast requirements for text
- Step 11 meets WCAG AAA for body text
- Step 12 is maximum contrast

Always use:
- `--primary` (step 9) with `--primary-foreground` (white)
- `--foreground` (step 12) on `--background` (step 1)
- `--muted-foreground` (step 11) for secondary text

## Best Practices

1. **Use semantic tokens** - Don't reference raw scales in components
2. **Leverage hover states** - Use `-hover` variants instead of opacity
3. **Use alpha for overlays** - Better visual blending
4. **Test in dark mode** - Ensure colors work in both themes
5. **Keep it simple** - Don't create too many custom tokens
6. **Document custom colors** - If you add new semantic tokens, document them

## Migration from Old System

Old system used HSL values directly:
```css
--primary: 222.2 47.4% 11.2%;  /* Old */
```

New system uses Radix scales:
```css
--primary: var(--accent-9);     /* New */
```

Benefits:
- ✅ Automatic dark mode
- ✅ Consistent color relationships
- ✅ Built-in hover/active states
- ✅ Alpha variants for overlays
- ✅ Accessible by default
- ✅ Easy to change accent colors

## Resources

- [Radix Colors Documentation](https://www.radix-ui.com/colors)
- [Color Scale Anatomy](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)
- [Accessibility Guidelines](https://www.radix-ui.com/colors/docs/palette-composition/accessibility)
