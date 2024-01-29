import { createCookieSessionStorage } from "@remix-run/node";
 
// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret"], // This should be an env variable
    secure: process.env.NODE_ENV === "production",
  },
});
 
// you can also export the methods individually for your own usage
export const { getSession, commitSession, destroySession } = sessionStorage;