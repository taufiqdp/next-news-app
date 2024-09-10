"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, NewspaperIcon, MenuIcon, Archive } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:px-20 px-2 fixed top-0 w-full bg-neutral-900 text-neutral-50 shadow-md dark:bg-neutral-50 dark:text-neutral-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              NewsApp
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
              >
                <HomeIcon className="inline-block w-5 h-5 mr-1" />
                Home
              </Link>
              <Link
                href="/news"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
              >
                <NewspaperIcon className="inline-block w-5 h-5 mr-1" />
                News
              </Link>
              <Link
                href="/archive"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
              >
                <Archive className="inline-block w-5 h-5 mr-1" />
                Archive
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={handleIsOpen}>
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={handleIsOpen}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
            >
              <HomeIcon className="inline-block w-5 h-5 mr-1" />
              Home
            </Link>
            <Link
              href="/news"
              onClick={handleIsOpen}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
            >
              <NewspaperIcon className="inline-block w-5 h-5 mr-1" />
              News
            </Link>
            <Link
              href="/archive"
              onClick={handleIsOpen}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-50 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
            >
              <Archive className="inline-block w-5 h-5 mr-1" />
              Archive
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
