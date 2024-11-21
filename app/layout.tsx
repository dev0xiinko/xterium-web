// app/layout.tsx
import React, { ReactNode } from 'react';
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
        <header className="flex items-center p-4 bg-[#32436A] text-white">
          <img src="/xterium_logo.png" alt="Xterium Logo" className="h-12 mr-3" />
          <span className="text-xl font-bold">Xterium</span>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-sm p-4 fixed bottom-0 w-full flex justify-between items-center">
          <div className="footer-left">© 2024 Xterium UI. All rights reserved.</div>
          <div className="footer-right">
            <a href="/terms-and-conditions" className="ml-3">Terms of Use</a>
            <a href="/privacy-policy" className="ml-3">Privacy Policy</a>
            <a href="/cookie-policy" className="ml-3">Cookie Policy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
