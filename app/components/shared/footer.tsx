import Link from "next/link";
import Image from 'next/image';

export function Footer() {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="container mx-auto text-white py-8">
          <div className="flex justify-between gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/xterium_logo.png"
                alt="Xterium Logo"
                width={40}
                height={40} 
                className="h-10 mr-3"
              />
              <span className="text-3xl font-bold text-slate-500">Xterium</span>
            </Link>
            <ul className="flex items-center gap-4 text-slate-400 text-sm">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-gray-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-gray-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="bg-black">
        <div className="container py-4 mx-auto flex justify-between items-center">
          <p className="footer-left text-white text-xs text-slate-400">
            © 2024 Xterium UI. All rights reserved.
          </p>
          <p className="text-xs text-white">v1.0.0</p>
        </div>
      </nav>
    </div>
  );
}
