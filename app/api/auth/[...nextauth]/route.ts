import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {label: "Email", type: 'email', placeholder: 'Email'},
                password: {label: "Password", type: 'password', placeholder: 'enter your password'}
            },
            async authorize(credential, req) {
                if (!credential?.email || !credential.email) {
                    return null
                }

                const user = await prisma.user.findUnique({where: {email: credential.email}})
                if (!user) {
                    return null
                }

                const passMatched = await bcrypt.compare(credential.password, user.hashedPassword!)

                return passMatched ? user : null
            },
        }),
    ],
    session: {
        strategy: 'jwt'
    }
}


const handler = NextAuth(authOptions);


export {handler as GET, handler as POST}