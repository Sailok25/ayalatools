import Link from 'next/link';

export default function ToolCard({ tool }) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 hover:border-blue-200 cursor-pointer h-full">
        <div className="flex items-start space-x-4">
          <div className="text-2xl">{tool.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {tool.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}