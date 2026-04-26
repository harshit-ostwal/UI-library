"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/components";

// Unified documentation component
export function DocSection({ 
  title, 
  description, 
  children, 
  className = "" 
}) {
  return (
    <section className={`my-8 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground mb-6">{description}</p>}
      {children}
    </section>
  );
}

// Simple preview component
export function Preview({ 
  children, 
  code, 
  title,
  className = "" 
}) {
  return (
    <div className="my-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      
      {/* Preview */}
      <div className="rounded-lg border bg-background p-8 flex items-center justify-center min-h-[200px]">
        {children}
      </div>
      
      {/* Code */}
      {code && (
        <div className="mt-4">
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

// Tabbed variants showcase using Radix UI tabs
export function Variants({ title = "Variants", items = [] }) {
  if (items.length === 0) return null;

  const defaultValue = items[0]?.name || items[0]?.label?.toLowerCase() || "0";

  return (
    <DocSection title={title}>
      <Tabs defaultValue={defaultValue}>
        <TabsList className="w-fit">
          {items.map((item, index) => (
            <TabsTrigger 
              key={item.name || item.label || index}
              value={item.name || item.label?.toLowerCase() || index.toString()}
            >
              {item.label || item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {items.map((item, index) => (
          <TabsContent 
            key={item.name || item.label || index}
            value={item.name || item.label?.toLowerCase() || index.toString()}
          >
            <Preview code={item.code}>
              {item.component}
            </Preview>
          </TabsContent>
        ))}
      </Tabs>
    </DocSection>
  );
}

// Tabbed showcase for any grouped content
export function TabbedShowcase({ title, items = [] }) {
  if (items.length === 0) return null;

  const defaultValue = items[0]?.name || items[0]?.label?.toLowerCase() || "0";

  return (
    <DocSection title={title}>
      <Tabs defaultValue={defaultValue}>
        <TabsList className="w-fit">
          {items.map((item, index) => (
            <TabsTrigger 
              key={item.name || item.label || index}
              value={item.name || item.label?.toLowerCase() || index.toString()}
            >
              {item.label || item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {items.map((item, index) => (
          <TabsContent 
            key={item.name || item.label || index}
            value={item.name || item.label?.toLowerCase() || index.toString()}
          >
            <Preview 
              code={item.code}
              title={item.description}
            >
              {item.component}
            </Preview>
          </TabsContent>
        ))}
      </Tabs>
    </DocSection>
  );
}

// Simplified props table
export function PropsTable({ data = [] }) {
  if (data.length === 0) return null;

  return (
    <DocSection title="Props">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border rounded-lg">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left p-3 font-semibold">Prop</th>
              <th className="text-left p-3 font-semibold">Type</th>
              <th className="text-left p-3 font-semibold">Default</th>
              <th className="text-left p-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((prop, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-3">
                  <code className="bg-muted px-2 py-1 rounded text-sm">{prop.name}</code>
                </td>
                <td className="p-3">
                  <code className="text-muted-foreground text-sm">{prop.type}</code>
                </td>
                <td className="p-3">
                  {prop.default ? (
                    <code className="bg-muted px-2 py-1 rounded text-sm">{prop.default}</code>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </td>
                <td className="p-3 text-sm text-muted-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}

// Installation section
export function Installation({ packageName = "@repo/components" }) {
  const installCommand = `npm install ${packageName}`;

  return (
    <DocSection title="Installation">
      <pre className="bg-muted p-4 rounded-lg text-sm">
        <code>{installCommand}</code>
      </pre>
    </DocSection>
  );
}

// Usage section
export function Usage({ code, title = "Usage" }) {
  return (
    <DocSection title={title}>
      <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </DocSection>
  );
}