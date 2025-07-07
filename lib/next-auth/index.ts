import { SelectViewLogin } from "@/lib/drizzle/schemas";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        dni: {},
        password: {},
      },

      authorize: async (credentials) => {
        const response = await fetch(`${process.env.URL_HOST}/api/signIn`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dni: credentials?.dni,
            password: credentials?.password,
          }),
        });

        const [user]: SelectViewLogin[] = await response.json();

        return {
          userId: user.id,
          role: user.role,
          fullName: user.firstName + " " + user.lastName,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.userId = token.userId;
      session.user.role = token.role;
      session.user.fullName = token.fullName;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId;
        token.role = user.role;
        token.fullName = user.fullName;
      }
      return token;
    },
  },
});
