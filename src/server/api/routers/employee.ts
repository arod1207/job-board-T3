import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const employeeRouter = createTRPCRouter({
  getAllJobs: protectedProcedure.query(async ({ ctx }) => {
    const response = await ctx.prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return response;
  }),
});
