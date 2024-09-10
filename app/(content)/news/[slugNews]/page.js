import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { CalendarIcon, ExternalLink } from "lucide-react";
import { getAllNews } from "@/lib/news";

export default function DetailNewsPage({ params }) {
  const newsSlug = params.slugNews;
  const newsItem = getAllNews().find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  } else {
    return (
      <div className="flex flex-col gap-5">
        <Link
          href="/news"
          className="flex gap-2 w-fit px-2 py-1 rounded-lg hover:bg-black hover:text-white"
        >
          <ArrowLeft className="w-6 h-6" />
          <p>Back</p>
        </Link>
        <div className="flex md:flex-row flex-col md:items-start items-center gap-10">
          <Link
            href={`/news/${newsItem.slug}/image`}
            className="min-h-96 min-w-96"
          >
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title || "Untitled Article"}
              priority
              width={400}
              height={300}
              className="rounded-lg"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              href="#"
              className="flex gap-2 mb-4 w-fit px-2 py-1 rounded-lg hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-6 h-6" />
              <p>Share</p>
            </Link>
            <h1 className="text-3xl font-bold mb-4">
              {newsItem.title || "Untitled Article"}
            </h1>
            <div className="flex items-center text-gray-500 mb-4">
              <CalendarIcon className="w-5 h-5 mr-2" />
              {newsItem.date && (
                <time dateTime={newsItem.date}>
                  {new Date(newsItem.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </time>
              )}
              {!newsItem.date && <span>No date available</span>}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {newsItem.content || "No content available."}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
