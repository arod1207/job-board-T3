import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import PrivateRoute from "~/utils/PrivateRoute";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const protectedRoutes: string[] = [
    "/employee/dashboard",
    "/employer/dashboard",
  ];

  return (
    <SessionProvider session={session}>
      <PrivateRoute protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </PrivateRoute>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
