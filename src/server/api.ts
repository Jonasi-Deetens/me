import { initTRPC } from "@trpc/server";
import { userRouter } from "./routers/user";
import { authRouter } from "./routers/auth";
const t = initTRPC.create();

export const appRouter = t.router({
  auth: authRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
