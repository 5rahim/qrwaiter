# QR WAITER

Next.js 13, NextAuth.js, Hasura, GraphQL, Tailwind, Google Cloud Storage.

## Configuration

### NextAuth
Generate the secret
https://next-auth.js.org/configuration/options#secret.

- Update `NEXTAUTH_SECRET=`
- Update `HASURA_GRAPHQL_JWT_SECRET={ "type": "HS256", "key": "***SECRET***" }`

### Hasura

- Create new Hasura project
- Update `NEXT_PUBLIC_HASURA_GRAPHQL_API=`
- Update `NEXT_PUBLIC_HASURA_WS_GRAPHQL_API=wss://`
- Go to Env vars > Copy Admin secret, Update `HASURA_GRAPHQL_ADMIN_SECRET=`
- Add `HASURA_GRAPHQL_UNAUTHORIZED_ROLE` env var, set it to `anonymous`
- Add `HASURA_GRAPHQL_JWT_SECRET` env var, set it to `{ "type": "HS256", "key": "***SECRET***" }`
- Copy `./graphql-codegen.example.ts` into a new `./graphql-codegen.ts` file
  - Update `"https://xx.hasura.app/v1/graphql"` and `"x-hasura-admin-secret": ""`

### Database

- Copy content from `src/lib/hasura/nextauth.sql`
- Run the SQL commands in the database

### Google Cloud

Create a new project

- Update `GCS_PROJECT_ID=`

Create a new Service Account:  API & services > Credentials

- Create a new Service Account with the name `XXXX-cloud`
- Go to service account permissions and grant access
  - Add service account email as New Principals
  - Assign `Owner` role.
- Go to service account keys and add a new JSON key and open downloaded file
- Update `GCS_CLIENT_EMAIL=` with "client_email".
- Update `GCS_PRIVATE_KEY="----...----/n"` with "private_key".

Configure OAuth consent screen 

- User type: External
- App domain: `127.0.0.1:PORT`, Authorized Domains: `XXXX.vercel.app`
- Add scopes: .../auth/userinfo.email, .../auth/userinfo.profile

Create OAuth Client ID

- Application type: Web application, name: `XXXX Web Client`
- Authorized redirect URIs: `http://127.0.0.1:PORT/api/auth/callback/google`, `https://XXXX.vercel.app/api/auth/callback/google`
- Copy your Client ID and Client Secret
- Update `GOOGLE_CLIENT_ID=` and `GOOGLE_CLIENT_SECRET=`


Create storage bucket: Cloud Storage > Buckets > Create

- Name: `XXXX-storage`
- Set a default class: Standard
- Prevent public access > Uncheck "Enforce public access prevention on this bucket"
- Access control: Uniform
- Go to bucket > Permissions > Grant Access
  - New principals: `allUsers`
  - Role: Storage Object Viewer
  - Allow public access
- Update `GCS_BUCKET_NAME=`

Configure storage bucket

- Download Google Cloud CLI. https://cloud.google.com/sdk/docs/install
- Run `cd C:/PROJECT_PATH` where `gcs_cors.json` is located
- Run `gsutil cors set gcs_cors.json gs://XXXX-storage`

Google API Key (Address Input...)

- `NEXT_PUBLIC_GOOGLE_API_KEY=`
- Create new API Key
  - Website restrictions: `127.0.0.1:PORT/*`, `XXXX.vercel.app/*`
  - Restrict key: `Maps Javascript API`, `Places API`, ...


`npm install`

## Run

`npm run graphql-codegen`

`npm run dev`

### Features
 
- Everything you edit or modify is saved in real time in the online menu.

### Group ordering

Scanning the QR code sends you to a page that populates a cookie giving unique access to current user

- Create table order > Create n(no_of_chairs) tokens
- QR code value: /access/[token] > Scan > Create cookie containing token > Redirect to /table/12345/chair/1
- /table/12345/chair/1: Check token cookie against database to verify
