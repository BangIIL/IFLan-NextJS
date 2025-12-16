interface ArticleCardProps {
  title: string;
  image: string;
  description: string;
  author: string;
}

export default function ArticleCard({
  title,
  image,
  description,
  author,
}: ArticleCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
      <img
        className="rounded-t-lg h-48 w-full object-cover"
        src={image}
        alt={title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            By {author}
          </span>

          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
