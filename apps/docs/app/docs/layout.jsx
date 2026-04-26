import { DocsSidebar } from "../../components/docs/sidebar.jsx";
import { TableOfContents } from "../../components/docs/toc.jsx";

export default function DocsLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 md:ml-64">
        <div className="flex">
          <main className="flex-1 max-w-none">
            <div className="mx-auto px-4 py-6 lg:px-8 lg:py-8 xl:max-w-4xl">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {children}
              </div>
            </div>
          </main>
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
