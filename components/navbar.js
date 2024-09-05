"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      className={`${openMenu ? "h-1/3 md:h-16" : "h-16"}
    flex flex-row justify-end md:items-center items-start w-full shadow-md md:backdrop-blur-lg md:backdrop-opacity-10 md:backdrop-invert md:bg-white/90 bg-white fixed top-0 transition-all duration-300`}
    >
      <ul
        className={`${
          openMenu
            ? "flex flex-col items-center justify-center md:justify-end pt-14 md:p-0 h-1/2 w-full transition-all duration-100"
            : "hidden"
        }
        md:flex md:flex-row md:gap-20 gap-2 md:px-44 font-medium text-lg`}
      >
        <li key="home" className="py-2">
          <Link href="/" onClick={handleOpenMenu}>
            Home
          </Link>
        </li>
        <li key="news" className="py-2">
          <Link href="/news" onClick={handleOpenMenu}>
            News
          </Link>
        </li>
      </ul>

      <button
        className="md:hidden px-4 py-5 text-2xl fixed top-0 right-0"
        onClick={handleOpenMenu}
      >
        {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
}
