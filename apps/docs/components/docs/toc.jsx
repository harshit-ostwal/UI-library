"use client";

import { useEffect, useState } from "react";

// Utility function to generate slug from text
function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Get all headings from the page and ensure they have IDs
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    
    const headingData = Array.from(headingElements).map((heading) => {
      // Generate ID if it doesn't exist
      if (!heading.id) {
        heading.id = generateSlug(heading.textContent || '');
      }
      
      return {
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1)),
      };
    }).filter(heading => heading.level >= 2 && heading.level <= 4); // Only show h2-h4

    setHeadings(headingData);

    // Set up intersection observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headingElements.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => {
      headingElements.forEach((heading) => {
        if (heading.id) {
          observer.unobserve(heading);
        }
      });
    };
  }, []);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block xl:w-64 xl:shrink-0">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <h4 className="mb-4 text-sm font-semibold text-foreground">On This Page</h4>
        <nav className="space-y-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            const paddingLeft = Math.max(0, (heading.level - 2) * 12);
            
            return (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left text-sm transition-colors hover:text-foreground py-1 ${
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
                style={{
                  paddingLeft: `${paddingLeft}px`,
                }}
              >
                {heading.text}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}