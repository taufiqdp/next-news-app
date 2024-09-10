"use client";

import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ArchivePage({ children }) {
  const path = usePathname();
  const years = getAvailableNewsYears();
  return (
    <>
      <section>
        <h2 className="text-lg font-bold mb-3">Years</h2>
        <ul className="flex gap-8 font-medium">
          {years.map((year) => (
            <li key={year}>
              <Link
                href={`/archive/${year}`}
                className={`${
                  path === `/archive/${year}`
                    ? "underline underline-offset-4"
                    : "underline-offset-4"
                }
                    hover:underline`}
              >
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
