import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home" className="container mx-auto px-4 text-center">
      <Image
        height={1000}
        width={1000}
        priority
        src={logo.src}
        alt="A newspaper"
        className="mx-auto mb-8 max-w-xs"
      />
      <h1 className="text-4xl font-bold mb-4">
        A News Site For The Next Generation
      </h1>
      <p className="text-lg mb-8">
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p className="text-gray-700 mb-4">
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p className="text-gray-700 mb-8">
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p>
        <Link
          href="/news"
          className="bg-white hover:bg-gray-800 hover:text-white border border-black font-bold py-2 px-4 rounded-lg"
        >
          Read the latest news
        </Link>
      </p>
    </div>
  );
}
