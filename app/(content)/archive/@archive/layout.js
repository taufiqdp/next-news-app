import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage({ children }) {
  const years = getAvailableNewsYears();
  return (
    <>
      <section>
        <h2 className="text-lg font-bold mb-3">Years</h2>
        <ul className="flex gap-8 font-medium">
          {years.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`} className={`hover:underline`}>
                {year}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </>
  );
}
