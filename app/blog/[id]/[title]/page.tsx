import Navbar from "../../../components/Navbar";
import BlogCard from "./components/BlogCard";

interface BlogProps {
  params: Promise<{
    id: string;
    title: string;
  }>;
}

export default async function BlogDetail({ params }: BlogProps) {
  const { id, title } = await params;


  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-screen-xl mx-auto px-4">
        <BlogCard
          title={title}
          description={`Ini adalah blog dengan ID ${id} dan judul ${title}.`}
        />
      </main>
    </>
  );
}
