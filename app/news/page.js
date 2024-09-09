import NewsCards from "@/components/news-cards";

import { DUMMY_NEWS } from "@/dummy-data";

export default function NewsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <NewsCards newsItems={DUMMY_NEWS} />
    </>
  );
}
