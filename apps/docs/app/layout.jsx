import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers.jsx";
import { DocsNavbar } from "../components/docs/navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Library - Documentation",
  description: "A modern React UI component library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <DocsNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
