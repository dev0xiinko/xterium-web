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
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <header className="flex items-center p-4 bg-[#000000] text-white">
          <a href="/" className="flex items-center">
            <img
              src="/xterium_logo.png"
              alt="Xterium Logo"
              className="h-12 mr-3"
            />
            <span className="text-3xl font-bold">Xterium</span>
          </a>
        </header>

        <main>{children}</main>

        <footer className="bg-[#000000] text-white text-lg p-4 fixed bottom-0 w-full flex justify-between items-center">
          <div className="footer-left">© 2024 Xterium UI. All rights reserved.</div>
          <div className="footer-right margin-right">
            <a href="/terms-and-conditions" className="ml-3 hover:text-gray-200">Terms of Use</a>
            <a href="/privacy-policy" className="ml-3 hover:text-gray-200">Privacy Policy</a>
            <a href="/cookie-policy" className="ml-3 hover:text-gray-200">Cookie Policy</a>
          </div>
        </footer>

      </body>
    </html>
  );
}
