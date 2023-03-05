import { clientEnv } from '@/env/schema.mjs'
import { env } from '@/env/server.mjs'
import { HasuraAdapter } from '@/lib/hasura/hasura-adapter'
import * as jsonwebtoken from 'jsonwebtoken'
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
   // Include user.id on session
   // callbacks: {
   //    session({ session, user }) {
   //       if (session.user) {
   //          session.user.id = user.id
   //       }
   //       return session
   //    },
   // },
   // Configure one or more authentication providers
   providers: [
      GoogleProvider({
         clientId: env.GOOGLE_CLIENT_ID,
         clientSecret: env.GOOGLE_CLIENT_SECRET,
         authorization: {
            params: {
               prompt: "consent",
               access_type: "offline",
               response_type: "code",
            },
         },
         profile(profile: any) {
            return {
               id: profile.sub,
               name: profile.name,
               email: profile.email,
               image: profile.picture,
            }
         },
      }),
      // ...add more providers here
   ],
   adapter: HasuraAdapter({
      endpoint: clientEnv.NEXT_PUBLIC_HASURA_GRAPHQL_API!,
      adminSecret: env.HASURA_GRAPHQL_ADMIN_SECRET,
   }),
   theme: {
      colorScheme: "auto",
   },
   // Use JWT strategy so we can forward them to Hasura
   session: { strategy: "jwt" },
   // Encode and decode your JWT with the HS256 algorithm
   secret: env.NEXTAUTH_SECRET,
   jwt: {
      encode: ({ secret, token }) => {
         return jsonwebtoken.sign(token!, secret, {
            algorithm: "HS256",
         })
      },
      decode: async ({ secret, token }) => {
         const decodedToken = jsonwebtoken.verify(token!, secret, {
            algorithms: ["HS256"],
         })
         return decodedToken as JWT
      },
   },
   callbacks: {
      /**
       * Adding the required Hasura JWT claims
       * https://hasura.io/docs/latest/graphql/core/auth/authentication/jwt/#the-spec
       */
      async jwt({ token, account, user }) {
         return {
            ...token,
            "https://hasura.io/jwt/claims": {
               "x-hasura-allowed-roles": ["user"],
               "x-hasura-role": "user",
               "x-hasura-default-role": "user",
               "x-hasura-user-id": token.sub,
            },
         }
      },
      // Add user ID to the session
      session: async ({ session, token, user }) => {
         if (session?.user && token && token.sub) {
            session.user.id = token.sub
            
            /**
             * We put the JWT token in the user session, so it is accessible in the client
             */
            // @ts-ignore
            session.user.token = jsonwebtoken.sign(token!, env.NEXTAUTH_SECRET, {
               algorithm: "HS256",
            })
         }
         return session
      },
   },
}
