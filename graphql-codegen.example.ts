export default {
   schema: [
      {
         'https://xx.hasura.app/v1/graphql': {
            headers: {
               'x-hasura-admin-secret': "",
            },
         },
      },
   ],
   overwrite: true,
   generates: {
      './src/graphql/generated.ts': {
         documents: './src/graphql/**/*.ts',
         plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-query',
         ],
         config: {
            skipTypename: false,
            enumsAsTypes: true,
            constEnums: true,
            typesPrefix: 'DB_',
            fetcher: 'graphql-request',
         },
      },
      './src/lib/hasura/hasura-generated.ts': {
         documents: './src/lib/hasura/**/*.graphql',
         plugins: [
            'typescript',
            'typescript-operations',
            'typescript-graphql-request',
         ],
         config: {
            skipTypename: false,
            withHooks: false,
            enumsAsTypes: true,
            constEnums: true,
         },
      },
   },
}
