interface BlogCardProps {
  title: string;
  description: string;
}

export default function BlogCard({ title, description }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src="https://source.unsplash.com/600x400/?indonesia"
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
