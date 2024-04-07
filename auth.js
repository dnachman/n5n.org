import NextAuth from "next-auth";

// import Cognito from "next-auth/providers/cognito";
import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
// import LinkedIn from "next-auth/providers/linkedin";
// import Twitter from "next-auth/providers/twitter";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    // Cognito,
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // Google,
    // LinkedIn,
    // Twitter,
  ],
  basePath: "/auth",
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log("In auth.authorized", pathname, auth);
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, trigger, session }) {
      console.log("In auth.jwt");
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
