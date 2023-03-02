import Link from "next/link";
import Navbar from "~/components/Navbar";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl">Ooops....</h1>
        <p className="text-6xl">Page not found</p>
        <h2>
          Go to{" "}
          <Link href="/" className="text-gray-500">
            homepage
          </Link>
        </h2>
      </div>
    </div>
  );
}
