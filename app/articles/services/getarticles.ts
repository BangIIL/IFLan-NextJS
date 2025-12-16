export interface Article {
  id: number;
  title: string;
  urlimage: string;
  description: string;
  author: string;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch("http://localhost:8001/api/test/getarticle");

    if (!res.ok) {
      throw new Error("Gagal mengambil data artikel");
    }

    const data = await res.json();
    return data.data as Article[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
