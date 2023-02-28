import Link from "next/link";

export default function Navbar() {
  return (
    <div className="just flex h-16 items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Job Board T3</h1>
      <div className="flex items-center space-x-6">
        <button className="text-sm">Log in</button>
        <Link href="/employee/register">
          <button className="border-1 rounded-lg border border-black py-2 px-4 text-sm">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}
