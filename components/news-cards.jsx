import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default function NewsCards({ newsItems }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <div className="flex flex-wrap -mx-2">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
          >
            <Link href={`/news/${item.slug}`}>
              <Card className="h-full transition-all duration-200 ease-in-out hover:shadow-lg rounded-lg">
                <CardContent className="p-0">
                  <Image
                    src={`/images/news/${item.image}`}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-44 object-cover rounded-t-lg"
                  />
                  <p className="p-4 font-thin italic text-sm">{item.date}</p>
                  <h2 className="p-4 text-lg font-semibold line-clamp-2">
                    {item.title}
                  </h2>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
