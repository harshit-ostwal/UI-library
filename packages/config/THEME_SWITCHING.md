# 🎨 Dynamic Theme Switching Guide

## Super Simple: 3 Steps to Change Colors

### Step 1: Edit the Config
Open `packages/config/theme.config.js`:

```js
export const themeConfig = {
  accent: 'blue',    // Change this! (was 'indigo')
  gray: 'slate',     // Or change this!
  error: 'red',
  success: 'green',
  warning: 'amber',
};
```

### Step 2: Generate Theme
Run from project root:

```bash
pnpm generate:theme
```

Or from config package:

```bash
cd packages/config
pnpm generate:theme
```

### Step 3: Restart Dev Server
```bash
pnpm dev
```

**That's it!** 🎉 All your components now use the new color.

---

## Available Colors

### Accent Colors
Choose one for your primary brand color:

```
indigo  (current default)
blue
violet
purple
pink
crimson
red
orange
amber
yellow
lime
green
teal
cyan
sky
```

### Gray Colors
Choose one for backgrounds and text:

```
slate   (current default)
gray
mauve
sage
olive
sand
```

---

## Examples

### Example 1: Blue Theme
```js
// theme.config.js
export const themeConfig = {
  accent: 'blue',
  gray: 'slate',
  error: 'red',
  success: 'green',
  warning: 'amber',
};
```

Then run: `pnpm generate:theme`

### Example 2: Purple with Mauve Gray
```js
// theme.config.js
export const themeConfig = {
  accent: 'purple',
  gray: 'mauve',
  error: 'red',
  success: 'green',
  warning: 'amber',
};
```

Then run: `pnpm generate:theme`

### Example 3: Green Theme
```js
// theme.config.js
export const themeConfig = {
  accent: 'green',
  gray: 'sage',
  error: 'red',
  success: 'green',
  warning: 'amber',
};
```

Then run: `pnpm generate:theme`

---

## What Happens Behind the Scenes

The `generate-theme.js` script:

1. Reads your `theme.config.js`
2. Generates all the Radix color imports
3. Creates all 12-step color scale mappings
4. Writes everything to `tokens.css`
5. All your components automatically use the new colors!

---

## Visual Preview

After generating, you can preview colors:

```bash
# Open in browser
packages/config/color-test.html
```

Or run the studio:

```bash
pnpm dev
```

---

## Troubleshooting

### Colors didn't change?
1. Make sure you ran `pnpm generate:theme`
2. Restart your dev server
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Script not found?
Run from project root:
```bash
pnpm generate:theme
```

### Want to revert?
Just change `theme.config.js` back and run `pnpm generate:theme` again.

---

## Advanced: Multiple Themes

You can create multiple config files:

```js
// theme.config.blue.js
export const themeConfig = {
  accent: 'blue',
  gray: 'slate',
  // ...
};

// theme.config.purple.js
export const themeConfig = {
  accent: 'purple',
  gray: 'mauve',
  // ...
};
```

Then modify `generate-theme.js` to accept a config file argument.

---

## Pro Tips

1. **Preview First**: Check [Radix Colors](https://www.radix-ui.com/colors) to see all colors
2. **Gray Matters**: Different grays have different tints - experiment!
3. **Consistency**: Keep error/success/warning as red/green/amber for familiarity
4. **Test Dark Mode**: Always test both light and dark modes after changing

---

## Summary

```bash
# 1. Edit config
vim packages/config/theme.config.js

# 2. Generate
pnpm generate:theme

# 3. Restart
pnpm dev
```

**Done!** Your entire UI now uses the new color scheme. 🚀
