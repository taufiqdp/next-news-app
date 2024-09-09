import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NotFound({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-neutral-950 ">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="text-neutral-500 mb-8 dark:text-neutral-400">{message}</p>
      <Link href="/" passHref>
        <Button variant="default">Return Home</Button>
      </Link>
    </div>
  );
}
