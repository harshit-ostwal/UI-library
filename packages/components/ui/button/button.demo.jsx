import React from 'react';
import { Button } from './button.jsx';

// 🔥 reusable config (DRY approach)
const VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'];
const SIZES = ['sm', 'default', 'lg', 'icon'];

export function ButtonDemo() {
  return (
    <div className="space-y-10">

      {/* Variants */}
      <Section title="Variants">
        <div className="flex flex-wrap gap-4">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <div className="flex flex-wrap items-center gap-4">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size === 'icon' ? '🚀' : size}
            </Button>
          ))}
        </div>
      </Section>

      {/* States */}
      <Section title="States">
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </Section>

      {/* Icons */}
      <Section title="With Icons">
        <div className="flex flex-wrap gap-4">
          <Button leftIcon="🔥">Left</Button>
          <Button rightIcon="➡️">Right</Button>
          <Button leftIcon="🚀" rightIcon="✨">Both</Button>
        </div>
      </Section>

      {/* Full Width */}
      <Section title="Full Width">
        <div className="space-y-3 max-w-md">
          <Button fullWidth>Full Width</Button>
          <Button variant="secondary" fullWidth>
            Secondary
          </Button>
        </div>
      </Section>

      {/* AsChild */}
      <Section title="As Child">
        <Button asChild>
          <a href="#">Go to Page</a>
        </Button>
      </Section>

    </div>
  );
}

// 🔥 reusable section component (clean UI structure)
function Section({ title, children }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </section>
  );
}