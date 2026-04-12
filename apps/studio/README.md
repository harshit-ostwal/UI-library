# Studio - Minimal Component Inspector

A minimal, modern React-based Studio for inspecting and testing UI components with auto-generated controls.

## Features

- **Single Component Focus** - Display one component at a time for focused inspection
- **Auto-Generated Controls** - Automatically extract props from CVA variants
- **Live Preview** - Real-time updates as you change properties
- **Minimal UI** - Clean, distraction-free interface
- **Properties Panel** - Figma-style inspector on the right
- **Preview Canvas** - Centered component with grid/background options

## Architecture

### Three-Panel Layout

```
┌──────────┬────────────────────┬──────────────┐
│   Nav    │   Preview Canvas   │  Properties  │
│  (56px)  │     (flexible)     │    (320px)   │
│          │                    │              │
│ Button   │   [Component]      │  variant: ▼  │
│ Dialog   │                    │  size: ▼     │
│ Tooltip  │                    │  disabled: □ │
└──────────┴────────────────────┴──────────────┘
```

### Auto-Generated Props

The Studio automatically extracts component properties from:

1. **CVA Variants** - Reads variant configuration from `buttonVariants`, etc.
2. **Additional Props** - Manually defined props like `disabled`, `children`
3. **Manual Props** - For compound components that need custom handling

### Component Configuration

Each component is registered in `registry/componentConfigs.js`:

```js
{
  id: 'button',
  name: 'Button',
  variantsConfig: buttonVariants,  // Auto-extract from CVA
  additionalProps: [
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'children', type: 'text', defaultValue: 'Button' },
  ],
}
```

## Adding New Components

1. **Add to Registry** (`registry/componentConfigs.js`):

```js
export const componentConfigs = {
  'my-component': {
    id: 'my-component',
    name: 'My Component',
    variantsConfig: myComponentVariants, // Import from component
    additionalProps: [
      { name: 'disabled', type: 'boolean', defaultValue: false },
    ],
  },
};
```

2. **Add Renderer** (`components/ComponentRenderer.jsx`):

```js
case 'my-component':
  return <MyComponent {...propValues} />;
```

That's it! The Studio will automatically:
- Extract variant options from CVA config
- Generate appropriate controls (dropdowns, toggles, inputs)
- Update the preview in real-time

## Prop Types

The Studio supports these control types:

- `select` - Dropdown for variants (auto-generated from CVA)
- `boolean` - Toggle for true/false props
- `text` - Text input for strings

## Running Studio

```bash
# From root
pnpm dev

# Or directly
pnpm --filter studio dev
```

Opens at http://localhost:3000

## File Structure

```
apps/studio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Left sidebar
│   │   ├── PreviewCanvas.jsx       # Center preview area
│   │   ├── PropertiesPanel.jsx     # Right properties panel
│   │   └── ComponentRenderer.jsx   # Component switcher
│   ├── registry/
│   │   └── componentConfigs.js     # Component registry
│   ├── utils/
│   │   └── extractComponentProps.js # Auto-extract from CVA
│   ├── App.jsx
│   └── main.jsx
```

## Design Principles

1. **Minimal** - No unnecessary UI elements
2. **Focused** - One component at a time
3. **Automatic** - Props extracted from component definitions
4. **Live** - Instant preview updates
5. **Extensible** - Easy to add new components

## Future Enhancements

- Route-based navigation (`/button`, `/dialog`)
- Code generation (show JSX for current props)
- Keyboard shortcuts
- Component search
- Dark mode toggle
- Export/share configurations
