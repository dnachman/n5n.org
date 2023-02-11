import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>n5n.org</title>
        <meta name="description" content="n5n.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-mono">
        <div className="text-2xl text-slate-500 slate-500 h-20 text-center py-5">
          <Link href="/">n5n.org</Link>
        </div>

        <div className="flex columns-2 object-fill">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <Link href="/blog" className="">
              <h2>
                Blog <span>-&gt;</span>
              </h2>
              <p>Content coming soon</p>
            </Link>
          </div>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <Link href="/apps" className="">
              <h2 className="">
                Applications <span>-&gt;</span>
              </h2>
              <p>Applications coming soon</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
