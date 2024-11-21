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
      </div>
    </nav>
  );
}
