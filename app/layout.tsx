// app/layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "Xterium UI",
  description: "A simple website for Xterium UI",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header with margin */}
        <div className="mb-4">
          <header>
            <nav className="p-4 bg-gray-200">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img
                      src="/xterium_logo.png"
                      alt="Xterium Logo"
                      className="h-12 mr-3"
                    />
                    <span className="text-3xl font-bold">Xterium</span>
                  </a>
              </div>
            </nav>
          </header>
        </div>

        {/* Main content */}
        <main className="mb-16">{children}</main>

        {/* Footer with margin */}
        <div className="mt-4">
          <footer >
            <nav className="p-4 bg-gray-200">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="footer-left">© 2024 Xterium UI. All rights reserved.</div>
                <div className="footer-right margin-right">
                  <a
                    href="/terms-and-conditions"
                    className="ml-3 hover:text-gray-200"
                  >
                    Terms of Use
                  </a>
                  <a href="/privacy-policy" className="ml-3 hover:text-gray-200">
                    Privacy Policy
                  </a>
                  <a href="/cookie-policy" className="ml-3 hover:text-gray-200">
                    Cookie Policy
                  </a>
                </div>
                </div>
              </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
