import Link from "next/link";

export default function NewsPage() {
  const news = ["News 1", "News 2", "News 3"];

  return (
    <>
      <ul>
        {news.map((item, i) => (
          <li key={i}>
            <Link href={`news/${i}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
