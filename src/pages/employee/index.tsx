//Components//
import Link from "next/link";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center px-6">
        <div className="flex w-3/4 space-x-6">
          <img
            src="/assets/working.jpg"
            alt="worker"
            className="m-auto h-96 w-96 rounded-3xl"
          />
          <div className="">
            <h1 className="text-8xl">Job Board T3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dolorum voluptatem deserunt nemo adipisci rerum impedit maxime
              eius, sapiente repellendus esse, illo, at quaerat? Maxime adipisci
              a quis rerum iure.
            </p>
            <Link href="/employee/register">
              <button className="border-1 mt-10 rounded-lg border border-black py-2 px-4 text-sm">
                Sign up for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
