import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // Lógica de verificação das credenciais
        if (credentials?.email === "admin@teste.com" && credentials?.password === "admin") {
          return { id: "1", email: credentials?.email };
        }
        return null; // Retorna null se as credenciais forem inválidas
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',  // Página de login
    error: '/auth/error',    // Página de erro personalizada
  },
  secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }