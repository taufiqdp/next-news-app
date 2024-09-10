import { getAllNews } from "@/lib/news";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

export default function ImageNewsPage({ params }) {
  const itemSlug = params.slugNews;
  const newsItem = getAllNews().find((newsItem) => newsItem.slug === itemSlug);

  if (!newsItem) {
    notFound();
  } else {
    return (
      <>
        <div className="flex flex-col gap-5">
          <Link
            href={`/news/${newsItem.slug}`}
            className="flex gap-2 w-fit px-2 py-1 rounded-lg hover:bg-black hover:text-white"
          >
            <ArrowLeft className="w-6 h-6" />
            <p>Back</p>
          </Link>
          <div className="flex items-center justify-center">
            <Image
              src={`/images/news/${newsItem.image}`}
              width={600}
              height={600}
              priority
              alt={newsItem.title || "Untitled Article"}
              className="rounded-lg"
            />
          </div>
        </div>
      </>
    );
  }
}
