import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-4">
      <h1 className="text-sky-400 text-2xl">Admin Area</h1>
      <Link href="/admin/session" className="underline">
        Session information
      </Link>
    </div>
  );
}
