  import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Next News App",
  description: "News app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-24 md:mx-20 sm:mx-10 mx-2 min-h-screen h-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
