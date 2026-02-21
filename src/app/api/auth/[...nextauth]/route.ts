import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Aquí validas contra tu base de datos
        // Ejemplo: buscar usuario y comparar contraseña con bcrypt
        const user = { id: "1", name: "Demo User", email: credentials?.email };

        if (user) {
          return user; // si existe y la contraseña es correcta
        }
        return null; // si no existe o credenciales inválidas
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
