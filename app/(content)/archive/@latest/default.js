import NewsCards from "@/components/news-cards";
import { getLatestNews } from "@/lib/news";

export default function LatestPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <NewsCards newsItems={latestNews} />
    </>
  );
}
