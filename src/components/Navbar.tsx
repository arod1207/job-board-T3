import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { data: userSession } = useSession();

  const router = useRouter();

  if (userSession) {
    router.push("/employee/register");
  }

  return (
    <div className="just flex h-20 items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Job Board T3</h1>
      <div className="flex items-center space-x-6">
        {userSession && (
          <img
            src={userSession?.user.image || undefined}
            alt="user profile image"
            className="h-16 w-16 rounded-full"
          />
        )}

        <Link href="/employee/register">
          {userSession ? (
            <button
              className="border-1 rounded-lg border border-black py-2 px-4 text-sm"
              onClick={() => signOut()}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              className="border-1 rounded-lg border border-black py-2 px-4 text-sm"
              onClick={() => signIn()}
            >
              SIGN IN
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
