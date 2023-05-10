# QR WAITER

Next.js 13.2.1, NextAuth.js, Hasura, GraphQL, Tailwind, Google Cloud.

![alt status](https://media.discordapp.net/attachments/932762343987879966/1100971185375805460/image.png?width=307&height=609)

![alt status](https://media.discordapp.net/attachments/932762343987879966/1105992851810156655/image.png?width=1014&height=609)

![alt status](https://media.discordapp.net/attachments/932762343987879966/1105992956994924694/image.png?width=1115&height=609)

![alt status](https://media.discordapp.net/attachments/932762343987879966/1105993039673036910/image.png?width=1013&height=609)

## Use

#### Hasura (with Nhost)

- Create new Nhost project
- Hasura > Copy secret. Update `HASURA_GRAPHQL_ADMIN_SECRET`
- Settings > Environment Variables
- Update `NEXT_PUBLIC_HASURA_GRAPHQL_API=https://` with NHOST_GRAPHQL_URL
- Update `NEXT_PUBLIC_HASURA_WS_GRAPHQL_API=wss://` with NHOST_GRAPHQL_URL
- Update `HASURA_GRAPHQL_JWT_SECRET` with NHOST_JWT_SECRET
- The default unauthorized role is `public` for Nhost

##### (Hasura only)

- Add `HASURA_GRAPHQL_UNAUTHORIZED_ROLE` env var in Hasura, set it to `public`
- Add `HASURA_GRAPHQL_JWT_SECRET` env var in Hasura, set it to `{ "type": "HS256", "key": "***SECRET***" }`

### NextAuth

- Update `NEXTAUTH_SECRET=***JWT SECRET***`

### Database

- Create a Railway or Neon Postgres Database
- Run the queries from `src/lib/hasura/nextauth.sql` to set up auth tables
- Run the queries from `(placeholder)` to set up the other tables

### Google Cloud

#### Create a new project

- Update `GCS_PROJECT_ID=`

#### Create a new Service Account: API & services > Credentials

- Create a new Service Account with the name `XXXX-cloud`
- Go to service account permissions and grant access
- Add service account email as New Principals
- Assign `Owner` role.
- Go to service account keys and add a new JSON key and open downloaded file
- Update `GCS_CLIENT_EMAIL=` with "client_email".
- Update `GCS_PRIVATE_KEY="----...----/n"` with "private_key".

#### Configure OAuth consent screen

- User type: External
- App domain: `127.0.0.1:PORT`, Authorized Domains: `XXXX.vercel.app`
- Add scopes: .../auth/userinfo.email, .../auth/userinfo.profile

#### Create OAuth Client ID

- Application type: Web application, name: `XXXX Web Client`
- Authorized redirect URIs: `http://127.0.0.1:PORT/api/auth/callback/google`, `https://XXXX.vercel.app/api/auth/callback/google`
- Copy your Client ID and Client Secret
- Update `GOOGLE_CLIENT_ID=` and `GOOGLE_CLIENT_SECRET=`

#### Create a storage bucket: Cloud Storage > Buckets > Create

- Name: `XXXX-storage`
- Set a default class: Standard
- Prevent public access > Uncheck "Enforce public access prevention on this bucket"
- Access control: Uniform
- Go to bucket > Permissions > Grant Access
- New principals: `allUsers`
- Role: Storage Object Viewer
- Allow public access
- Update `GCS_BUCKET_NAME=`

#### Configure storage bucket CORS

- Download Google Cloud CLI. https://cloud.google.com/sdk/docs/install
- Run `cd C:/PROJECT_PATH` where `gcs_cors.json` is located
- Run `gsutil cors set gcs_cors.json gs://XXXX-storage`
- /!\ Change the CORS settings for more security

#### Google API Key (optional)

- Add `GOOGLE_API_KEY=` env var
- Create new API Key
- Website restrictions: `127.0.0.1:PORT/*`, `XXXX.vercel.app/*`
- Restrict key: `Maps Javascript API`, `Places API`, ...

#### graphql-codegen

- Rename `graphql-codegen.example.ts` to `graphql-codegen.ts`
- Update the file

`npm install`

## Run

`npm run graphql-codegen`

`npm run dev`
