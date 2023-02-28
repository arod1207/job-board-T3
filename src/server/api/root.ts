import { createTRPCRouter } from "~/server/api/trpc";

//Routers//
import { employeeRouter } from "./routers/employeeProfile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  employee: employeeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
