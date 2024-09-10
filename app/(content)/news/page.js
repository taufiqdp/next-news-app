import NewsCards from "@/components/news-cards";
import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function NewsPage() {
  const newsItems = await getAllNews();

  if (!newsItems) {
    return notFound();
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <NewsCards newsItems={newsItems} />
    </>
  );
}
