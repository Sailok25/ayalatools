export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <span className="font-bold text-xl">AyalaTools</span>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Inicio</a>
        <a href="/tools" className="hover:underline">Todos Los Artículos</a>
        <a href="/categories" className="hover:underline">Categorías</a>
      </div>
    </nav>
  )
}
