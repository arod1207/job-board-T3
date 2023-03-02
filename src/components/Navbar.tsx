import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";

export default function Navbar() {
  const { data: userSession } = useSession();

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

        <Link href="/">
          {userSession ? (
            <button
              className="border-1 rounded-lg border border-black py-2 px-4 text-sm"
              onClick={() => signOut({ callbackUrl: "/employer" })}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              className="border-1 rounded-lg border border-black py-2 px-4 text-sm"
              onClick={() =>
                signIn(undefined, { callbackUrl: "/employer/dashboard" })
              }
            >
              SIGN IN
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
