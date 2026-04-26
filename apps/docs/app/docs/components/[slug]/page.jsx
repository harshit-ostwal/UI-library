import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug } from "../../../../lib/mdx.js";
import { DocSection, Preview, Variants, TabbedShowcase, PropsTable, Installation, Usage } from "../../../../components/docs/doc-section.jsx";
import * as Components from "@repo/components";

const components = {
  DocSection,
  Preview,
  Variants,
  TabbedShowcase,
  PropsTable,
  Installation,
  Usage,
  ...Components,
};

export default function ComponentPage({ params }) {
  const doc = getDocBySlug(`docs/components/${params.slug}`);

  if (!doc) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">{doc.frontmatter.title}</h1>
        {doc.frontmatter.description && (
          <p className="text-lg text-muted-foreground mt-2">
            {doc.frontmatter.description}
          </p>
        )}
      </div>
      <MDXRemote source={doc.content} components={components} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'button' },
  ];
}
