import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const employerRouter = createTRPCRouter({
  createJobPost: protectedProcedure
    .input(
      z.object({
        company: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.create({
        data: {
          company: input.company,
          title: input.title,
          description: input.description,
          employer: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
});
