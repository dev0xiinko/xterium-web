import Link from "next/link";

export function Header() {
  return (
    <nav className="bg-[#00000080] backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/xterium_logo.png"
            alt="Xterium Logo"
            className="h-10 mr-3"
          />
          <span className="text-3xl font-bold text-white">Xterium</span>
        </Link>
        <a
          href="#"
          className="text-theme-default border-2 border-theme-default py-2 px-4 rounded-full text-xs font-bold uppercase flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download
        </a>
      </div>
    </nav>
  );
}
