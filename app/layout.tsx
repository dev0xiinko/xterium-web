// app/layout.tsx
import React, { ReactNode } from "react";
import Head from "next/head";
import "./globals.css";
import { Header } from "./components/shared/header";
import { Footer } from "./components/shared/footer";

export const metadata = {
  title: "Xterium",
  description: "A simple website for Xterium UI",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="sticky top-0 w-full z-30">
          <Header />
        </header>

        <main className="min-h-screen">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
