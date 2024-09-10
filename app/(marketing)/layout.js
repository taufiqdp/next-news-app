import "../globals.css";

export const metadata = {
  title: "Next News App",
  description: "News app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <main className="mt-24 md:mx-20 sm:mx-10 mx-2 min-h-screen h-full">
      {children}
    </main>
  );
}
