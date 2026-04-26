"use client";

import Link from "next/link";
import { Search, Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle.jsx";
import { MobileNav } from "./mobile-nav.jsx";
import { docsConfig } from "../../config/docs.js";

export function DocsNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center">
                <span className="text-background text-xs font-bold">UI</span>
              </div>
              <span className="font-bold text-lg">UI Library</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {docsConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="transition-colors hover:text-foreground text-muted-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="pl-10 pr-4 py-2 w-64 text-sm bg-muted/50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          {/* GitHub Link */}
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          
          <ThemeToggle />
          
          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
