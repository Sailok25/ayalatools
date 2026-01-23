import { notFound } from 'next/navigation';
import toolsData from '@/data/tools';
import GeneratePassword from '@/components/tools/GeneratePassword';

export default async function ToolPage({ params }) {
  // AWAIT los params - ¡IMPORTANTE!
  const { slug } = await params;
  
  // Accede a tools dentro del objeto
  const tool = toolsData.tools.find(t => t.slug === slug);
  
  if (!tool) {
    notFound();
  }
  
  // Accede a categories dentro del objeto
  const category = toolsData.categories.find(c => c.id === tool.category);
  
  // Temporalmente solo mostrar el generador de contraseñas
  const renderTool = () => {
    if (slug === 'contrasena') {
      return <GeneratePassword />;
    }
    
    // Si la herramienta no está creada, muestra "en construcción"
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🚧</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {tool.name} - En construcción
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Esta herramienta estará disponible pronto. 
          Mientras tanto, prueba nuestro generador de contraseñas.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {renderTool()}
      </div>
    
    </div>
  );
}

export async function generateStaticParams() {
  const module = await import('@/data/tools');
  const tools = module.default.tools;
  
  return tools.map(tool => ({
    slug: tool.slug
  }));
}

// Función para generar la metadata de la pagina
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = await import('@/data/tools');
  const tool = module.default.tools.find(t => t.slug === slug);
  
  if (!tool) {
    return {
      title: 'Herramienta no encontrada - AyalaTools',
    };
  }
  
  return {
    title: `${tool.name} - AyalaTools`,
    description: tool.description,
  };
}