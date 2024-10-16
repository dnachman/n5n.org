import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 px-4 my-4 mx-0 w-full text-sm sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:my-12 sm:mx-auto sm:max-w-3xl sm:h-5">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-2 justify-start items-center">
        <Link href="https://www.n5n.org">
          &copy; {new Date().getFullYear()} n5n.org
        </Link>
      </div>
    </footer>
  );
}
