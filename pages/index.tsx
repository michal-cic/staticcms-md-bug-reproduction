import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>staticcms-md-bug-reproduction</h1>
      <div>
        <Link href="/admin" className="underline">
          Admin page
        </Link>
      </div>
    </div>
  );
}
