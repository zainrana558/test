import { getServerSession } from "next-auth";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: "/login", error: "/login" },
  callbacks: {
    async session({ session, token }: any) {
      if (token?.sub) session.user.id = token.sub;
      return session;
    },
  },
};

export const auth = getServerSession;
export { signIn, signOut } from "next-auth/react";

export default NextAuth(authOptions);
