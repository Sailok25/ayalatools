import ToolCard from '@/components/ToolCard';
import toolsData from '@/data/tools'; // Importa el objeto

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Todas las Herramientas
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Explora nuestra colección de herramientas útiles
        </p>

        {/* Usa toolsData.tools en lugar de tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}