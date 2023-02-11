import Link from "next/link";

export default function blog() {
  return (
    <>
      <h1 className="text-center text-2xl">Coming Soon</h1>
      <Link
        href="/"
        className="text-lg text-center underline text-blue-700 m-20"
      >
        Go back
      </Link>
    </>
  );
}
