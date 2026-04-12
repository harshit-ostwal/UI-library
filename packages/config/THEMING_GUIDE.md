# Complete Theming Guide

## Overview

Your UI library now has a complete theming system matching Radix Themes capabilities:

✅ **Colors** - Accent, gray, and status colors  
✅ **Radius** - 6-step border radius scale  
✅ **Scaling** - Global size multiplier  
✅ **Typography** - 9-step type scale  
✅ **Dark Mode** - Automatic color switching  
✅ **Custom Fonts** - Optional font family override  

## Quick Start

Edit `packages/config/theme.config.js`:

```js
export const themeConfig = {
  accent: 'indigo',    // Primary brand color
  gray: 'slate',       // Neutral colors
  radius: 'medium',    // Border roundness
  scaling: '100%',     // Size multiplier
  // ... more options
};
```

Then run:
```bash
pnpm generate:theme
```

## Theme Options

### 1. Colors

#### Accent Color
Your primary brand color used for buttons, links, focus rings.

```js
accent: 'indigo'
```

**Options:**
- `blue` - Professional, trustworthy
- `violet` - Creative, modern
- `purple` - Elegant, premium
- `pink` - Playful, friendly
- `crimson` - Bold, energetic
- `red` - Urgent, important
- `orange` - Warm, inviting
- `amber` - Optimistic, cheerful
- `yellow` - Bright, attention-grabbing
- `lime` - Fresh, vibrant
- `green` - Success, growth
- `teal` - Calm, balanced
- `cyan` - Cool, tech-forward
- `sky` - Light, airy
- `indigo` - Deep, sophisticated (default)

#### Gray Color
Neutral colors for backgrounds, borders, and text.

```js
gray: 'slate'
```

**Options:**
- `slate` - Cool, neutral (default)
- `gray` - Pure, balanced
- `mauve` - Warm, subtle purple tint
- `sage` - Natural, green tint
- `olive` - Earthy, yellow-green tint
- `sand` - Warm, beige tint

#### Status Colors
Usually keep these as-is for consistency:

```js
error: 'red',
success: 'green',
warning: 'amber',
```

### 2. Radius

Controls border roundness across all components.

```js
radius: 'medium'
```

**Options:**

| Value | Description | Example |
|-------|-------------|---------|
| `none` | No rounding | Sharp corners |
| `small` | Subtle rounding | 2-16px |
| `medium` | Balanced rounding | 4-32px (default) |
| `large` | Pronounced rounding | 6-48px |
| `full` | Maximum rounding | Pill-shaped buttons |

**Visual Examples:**

```jsx
// none
<Button>Sharp</Button>

// small
<Button>Subtle</Button>

// medium (default)
<Button>Balanced</Button>

// large
<Button>Rounded</Button>

// full
<Button>Pill</Button>
```

**Radius Scale:**

Each radius setting provides a 6-step scale:

```css
--radius-1  /* Smallest */
--radius-2
--radius-3
--radius-4
--radius-5
--radius-6  /* Largest */
```

Use in Tailwind:
```jsx
<div className="rounded-1">Smallest</div>
<div className="rounded-3">Medium</div>
<div className="rounded-6">Largest</div>
```

### 3. Scaling

Global size multiplier affecting all typography and spacing.

```js
scaling: '100%'
```

**Options:**
- `90%` - Compact UI (more content visible)
- `95%` - Slightly compact
- `100%` - Default (recommended)
- `105%` - Slightly larger
- `110%` - Large UI (better accessibility)

**Use Cases:**

- **90-95%**: Dense dashboards, data tables
- **100%**: Standard applications (default)
- **105-110%**: Accessibility, senior-friendly UIs

**What It Affects:**
- Font sizes
- Line heights
- Component heights
- Spacing (when using scale-based values)

### 4. Typography

#### Font Families

Override default system fonts:

```js
fontFamily: {
  sans: undefined,  // Use default
  mono: undefined,  // Use default
}
```

**Custom Fonts:**

```js
fontFamily: {
  sans: '"Inter", -apple-system, sans-serif',
  mono: '"Fira Code", monospace',
}
```

**Default Stacks:**

```css
/* Sans (default) */
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
"Helvetica Neue", Arial, sans-serif

/* Mono (default) */
ui-monospace, SFMono-Regular, "SF Mono", Menlo, 
Consolas, "Liberation Mono", monospace
```

#### Type Scale

9-step scale (automatically scaled by `scaling` setting):

```jsx
<p className="text-1">12px - Small text</p>
<p className="text-2">14px - UI text</p>
<p className="text-3">16px - Body text (base)</p>
<p className="text-4">18px - Large body</p>
<p className="text-5">20px - Small heading</p>
<p className="text-6">24px - Heading</p>
<p className="text-7">30px - Large heading</p>
<p className="text-8">36px - Display</p>
<p className="text-9">48px - Hero</p>
```

## Complete Example

### Professional SaaS App

```js
export const themeConfig = {
  accent: 'blue',
  gray: 'slate',
  error: 'red',
  success: 'green',
  warning: 'amber',
  radius: 'medium',
  scaling: '100%',
  fontFamily: {
    sans: '"Inter", -apple-system, sans-serif',
    mono: undefined,
  },
};
```

### Creative Portfolio

```js
export const themeConfig = {
  accent: 'violet',
  gray: 'mauve',
  error: 'red',
  success: 'green',
  warning: 'amber',
  radius: 'large',
  scaling: '105%',
  fontFamily: {
    sans: '"Poppins", sans-serif',
    mono: undefined,
  },
};
```

### E-commerce Store

```js
export const themeConfig = {
  accent: 'green',
  gray: 'sage',
  error: 'red',
  success: 'green',
  warning: 'amber',
  radius: 'small',
  scaling: '100%',
  fontFamily: {
    sans: undefined,
    mono: undefined,
  },
};
```

### Accessibility-First App

```js
export const themeConfig = {
  accent: 'indigo',
  gray: 'gray',
  error: 'red',
  success: 'green',
  warning: 'amber',
  radius: 'medium',
  scaling: '110%',  // Larger for better readability
  fontFamily: {
    sans: undefined,
    mono: undefined,
  },
};
```

## Usage in Components

### Using Radius

```jsx
// Semantic radius
<div className="rounded-sm">Small radius</div>
<div className="rounded-md">Medium radius</div>
<div className="rounded-lg">Large radius</div>

// Scale-based radius
<div className="rounded-1">Step 1</div>
<div className="rounded-3">Step 3</div>
<div className="rounded-6">Step 6</div>

// Full rounded
<div className="rounded-full">Pill shape</div>
```

### Using Typography

```jsx
// Size scale
<h1 className="text-8 font-bold">Hero Heading</h1>
<h2 className="text-6 font-semibold">Section Heading</h2>
<p className="text-3">Body text</p>
<small className="text-2 text-muted-foreground">Caption</small>

// Font families
<p className="font-sans">System font</p>
<code className="font-mono">Monospace code</code>

// Font weights
<p className="font-light">Light</p>
<p className="font-normal">Regular</p>
<p className="font-medium">Medium</p>
<p className="font-semibold">Semibold</p>
<p className="font-bold">Bold</p>
```

### Using Colors

```jsx
// Semantic colors (always use these!)
<button className="bg-primary text-primary-foreground">
  Primary
</button>

<div className="bg-card text-card-foreground border border-border">
  Card content
</div>

// Color scales (advanced)
<div className="bg-gray-2 text-gray-12">
  Subtle background
</div>
```

## Testing Your Theme

### 1. Visual Test

Open `packages/config/color-test.html` in your browser to see:
- All color scales
- Button variants
- Card components
- Typography samples

### 2. Component Test

Run the studio:
```bash
pnpm dev
```

Check:
- Button roundness matches radius setting
- Text sizes feel appropriate for scaling
- Colors look good in light and dark mode

### 3. Accessibility Test

- Text contrast (should be WCAG AA/AAA)
- Font sizes (nothing below 12px)
- Touch targets (buttons at least 44x44px)
- Focus indicators visible

## Tips & Best Practices

### Choosing Colors

1. **Start with accent** - Pick your brand color first
2. **Match gray** - Choose a gray that complements your accent
3. **Test dark mode** - Always check both themes
4. **Consider accessibility** - Ensure good contrast

### Choosing Radius

- **none/small**: Modern, professional, data-heavy
- **medium**: Balanced, friendly, versatile (default)
- **large/full**: Playful, consumer-facing, modern

### Choosing Scaling

- **90-95%**: When you need to fit more content
- **100%**: Default, works for most cases
- **105-110%**: Accessibility, readability focus

### Custom Fonts

1. Load fonts in your app (next/font, Google Fonts, etc.)
2. Update `fontFamily` in theme.config.js
3. Regenerate theme
4. Test across all components

## Troubleshooting

### Changes not visible?

1. Did you run `pnpm generate:theme`?
2. Did you restart dev server?
3. Try hard refresh (Ctrl+Shift+R)

### Fonts not loading?

1. Ensure fonts are loaded in your app
2. Check font family syntax (use quotes for multi-word names)
3. Include fallback fonts

### Radius looks wrong?

1. Check if components override radius
2. Ensure you're using semantic classes (rounded-md, not rounded-[8px])
3. Some components may have min/max radius constraints

## Advanced: Per-Component Overrides

While the theme provides defaults, you can override per component:

```jsx
// Override radius
<Button className="rounded-full">Pill button</Button>

// Override size
<p className="text-5">Larger than default</p>

// Override colors
<div className="bg-accent-scale-5">Custom accent shade</div>
```

## Summary

Your theming system now matches Radix Themes capabilities:

✅ **Complete color system** - 12-step scales with alpha variants  
✅ **Flexible radius** - 5 presets + 6-step scale  
✅ **Global scaling** - 5 size options  
✅ **Typography system** - 9-step scale + custom fonts  
✅ **Dark mode** - Automatic switching  
✅ **Production-ready** - Used by professional design systems  

**Change your entire UI in seconds!** 🎨
