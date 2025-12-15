interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
   <div className="group flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
  
  {/* Image */}
  <div className="h-48 bg-gray-100 overflow-hidden">
    <img
      src={image}
      alt={title}
      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-1 p-6">
    <h5 className="mb-3 text-xl font-semibold text-gray-900 leading-snug">
      {title}
    </h5>

    <p className="mb-6 text-gray-600 leading-relaxed flex-1">
      {description}
    </p>

    <a
      href="#"
      className="inline-flex items-center gap-2 self-start text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors"
    >
      Read more
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  </div>
</div>

  );
}
