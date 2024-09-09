import NewsCards from "@/components/news-cards";

import { DUMMY_NEWS } from "@/dummy-data";

export default function NewsPage() {
  return <NewsCards newsItems={DUMMY_NEWS} />;
}
