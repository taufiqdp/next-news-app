import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Next News App",
  description: "News app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="h-screen bg-[#f6f7f9]">
        <Navbar />
        <main className="mt-24 md:mx-20 sm:mx-10 mx-2">{children}</main>
      </body>
    </html>
  );
}
