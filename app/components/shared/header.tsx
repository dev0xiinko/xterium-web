export function Header() {
  return (
    <nav className="bg-black">
      <div className="container mx-auto flex justify-between items-center py-2">
        <a href="/" className="flex items-center">
          <img
            src="/xterium_logo.png"
            alt="Xterium Logo"
            className="h-10 mr-3"
          />
          <span className="text-3xl font-bold text-white">Xterium</span>
        </a>
      </div>
    </nav>
  );
}
