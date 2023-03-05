// @ts-check
import {z} from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
        process.env.NODE_ENV === "production"
            ? z.string().min(1)
            : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
        // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
        // Since NextAuth automatically uses the VERCEL_URL if present.
        (str) => process.env.VERCEL_URL ?? str,
        // VERCEL_URL doesn't include `https` so it cant be validated as a URL
        process.env.VERCEL ? z.string() : z.string().url(),
    ),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GCS_PROJECT_ID: z.string(),
    GCS_CLIENT_EMAIL: z.string(),
    GCS_PRIVATE_KEY: z.string(),
    GCS_BUCKET_NAME: z.string(),
    HASURA_GRAPHQL_ADMIN_SECRET: z.string(),
    HASURA_GRAPHQL_JWT_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.string(),
    NEXT_PUBLIC_BASE_DOMAIN: z.string(),
    NEXT_PUBLIC_HASURA_GRAPHQL_API: z.string(),
    NEXT_PUBLIC_HASURA_WS_GRAPHQL_API: z.string(),
    // NEXT_PUBLIC_BAR: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_BASE_DOMAIN: process.env.NEXT_PUBLIC_BASE_DOMAIN,
    NEXT_PUBLIC_HASURA_GRAPHQL_API: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    NEXT_PUBLIC_HASURA_WS_GRAPHQL_API: process.env.NEXT_PUBLIC_HASURA_WS_GRAPHQL_API,
    // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
};
