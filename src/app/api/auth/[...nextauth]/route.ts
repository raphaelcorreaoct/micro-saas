/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore: Unreachable code error */
import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

interface CustomUser extends User {
  id: string;
  email: string | null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          if (userCredential.user) {
            return {
              id: userCredential.user.uid,
              email: userCredential.user.email,
            } as CustomUser;
          }
          return null;
        } catch (error) {
          console.error(error);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Página de login
    error: "/auth/error", // Página de erro personalizada
  },
  secret: process.env.NEXTAUTH_SECRET,
};
// @ts-ignore: Type check 
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
