export default function Footer() {
  return (
    <footer className="flex justify-center h-12 mt-20 items-center bg-gray-100 text-center border-t border-primary-foreground/10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} NewsApp. All rights reserved.
      </p>
    </footer>
  );
}
