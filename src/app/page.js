import Link from 'next/link';
import tools from '@/data/tools';

export default function Home() {
  const featuredTools = tools.tools.slice(0, 8);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Herramientas rápidas y gratuitas para el día a día
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Una colección de herramienta online para transformar textos, generar contenido, convertir formatos y mucho más.
            </p>
            <Link 
              href="/tools"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explorar Todas las Herramientas
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Categorías
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/tools/categories/${category.id}`}
              >
                <div className={`${category.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer`}>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={`/${category.icon}`} 
                      alt={category.name}
                      className="h-12 w-12"
                    />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-80">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Herramientas destacadas
            </h2>
            <Link 
              href="/tools" 
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Ver todas →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tool.description}
                </p>
                <Link 
                  href={`/tools/${tool.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Usar herramienta →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}