import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/services/firebase";

import * as admin from "firebase-admin";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
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
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials!.email,
            credentials!.password
          );
          if (userCredential.user) {
            return { id: userCredential.user.uid, email: userCredential.user.email };
          }
        } catch (error) {
          console.error(error)
          throw new Error('Invalid email or password');
        }
        return null;
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Página de login
    error: "/auth/error", // Página de erro personalizada
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
