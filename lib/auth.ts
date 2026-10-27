import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
export const authOptions: NextAuthOptions = { session: { strategy: "jwt" }, pages: { signIn: "/login" }, providers: [CredentialsProvider({ name: "Email and password", credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } }, async authorize(credentials) { const data = z.object({ email: z.string().email(), password: z.string().min(8) }).safeParse(credentials); if (!data.success) return null; const user = await prisma.user.findUnique({ where: { email: data.data.email.toLowerCase() } }); if (!user || !(await compare(data.data.password, user.passwordHash))) return null; return { id: user.id, name: user.name, email: user.email }; } })], callbacks: { async session({ session, token }) { if (session.user && token.sub) (session.user as typeof session.user & { id: string }).id = token.sub; return session; } } };
