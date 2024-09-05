export default function NewsDetailPage({ params }) {
  const newsId = params.slugNews;

  return (
    <>
      <h1>News {newsId}</h1>
    </>
  );
}
