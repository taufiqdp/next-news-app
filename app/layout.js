import { Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body className="bg-[#f6f7f9]">
          {children}
      </body>
    </html>
  );
}
