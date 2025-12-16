import { getArticles, Article } from "./services/getarticles";
import ArticleCard from "./components/ArticleCard";

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Daftar Artikel
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard
              title={article.title}
              image={article.urlimage}
              description={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
