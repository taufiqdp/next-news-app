import NewsCards from "@/components/news-cards";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsCards newsItems={news} />;
}
