import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const protectedRputes = createRouteMatcher(
    ['/',
    '/upcoming',
    '/previous',
    '/personal-room',
    '/meetings(.*)']
)
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};