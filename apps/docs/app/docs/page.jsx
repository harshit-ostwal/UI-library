export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Introduction</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Welcome to the UI Library documentation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What is this?</h2>
        <p>
          This is a collection of re-usable components built with React, Radix UI, and Tailwind CSS.
          The components are accessible, customizable, and easy to integrate into your projects.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Philosophy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accessible by default using Radix UI primitives</li>
          <li>Customizable with Tailwind CSS</li>
          <li>Copy and paste - own the code</li>
          <li>Minimal dependencies</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p>
          Browse the <a href="/docs/components/button" className="underline">components</a> to get started.
        </p>
      </div>
    </div>
  );
}
