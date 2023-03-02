import { createTRPCRouter } from "~/server/api/trpc";

//Routers//
import { employerRouter } from "./routers/employer";
import { employeeRouter } from "./routers/employee";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  employer: employerRouter,
  employee: employeeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
