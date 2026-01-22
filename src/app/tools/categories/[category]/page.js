import { notFound } from 'next/navigation';
import ToolCard from '@/components/ToolCard';
import tools from '@/data/tools';

export default function CategoryPage({ params }) {
  const { category } = params;
  
  const categoryData = tools.categories.find(cat => cat.id === category);
  const categoryTools = tools.tools.filter(tool => tool.category === category);
  
  if (!categoryData) {
    notFound();
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className={`${categoryData.color} rounded-2xl p-8 mb-8`}>
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={`/${categoryData.icon}`} 
              alt={categoryData.name}
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-4xl font-bold">{categoryData.name}</h1>
              <p className="text-lg opacity-90">{categoryData.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {categoryTools.length} herramient{categoryTools.length !== 1 ? 'as' : ''} en esta categoría
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return tools.categories.map(category => ({
    category: category.id,
  }));
}