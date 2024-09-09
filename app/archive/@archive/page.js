import NewsCards from "@/components/news-cards";
import { getNewsForYear } from "@/lib/news";

export default function ArchivePage() {
  const newsThisYear = getNewsForYear(2024);

  return <NewsCards newsItems={newsThisYear} />;
}
