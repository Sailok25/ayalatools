import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">AyalaTools</span>
          </Link>
          
          <div className="space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/tools" 
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Todas las Herramientas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}