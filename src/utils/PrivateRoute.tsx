import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import { useSession } from "next-auth/react";
import FullPageLoader from "~/components/FullPageLoader";

type PrivateRoutesProps = {
  protectedRoutes: string[];
  children: ReactNode;
};

export default function PrivateRoute({
  protectedRoutes,
  children,
}: PrivateRoutesProps) {
  const router = useRouter();
  const { status: userStatus } = useSession();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (
      userStatus !== "loading" &&
      userStatus !== "authenticated" &&
      pathIsProtected
    ) {
      router.push("/");
    }
  }, [userStatus]);

  if (
    (userStatus === "loading" || userStatus !== "authenticated") &&
    pathIsProtected
  ) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
