# Shell App

Frontend application built with React, TypeScript, Vite, and Apollo Client.

## Development

```bash
pnpm dev
```

## GraphQL Code Generation

This project uses GraphQL Code Generator to automatically generate TypeScript types and React hooks for all GraphQL queries and mutations.

### How It Works

The code generator:

1. Reads the GraphQL schema from `../api/src/graphql/schema.graphql`
2. Scans all `.ts` and `.tsx` files for GraphQL queries/mutations
3. Generates TypeScript types and React hooks in `./src/generated/graphql.ts`

### Usage

**Define your GraphQL queries in `.graphql.ts` files:**

```typescript
// src/features/dashboard/graphql/household.ts
import { gql } from "@apollo/client";

export const GET_HOUSEHOLD = gql(`
  query GetHousehold($id: ID!) {
    household(id: $id) {
      id
      name
    }
  }
`);
```

**Run code generation:**

```bash
pnpm codegen
```

**Use the generated hooks in your components:**

```typescript
import { useGetHouseholdQuery } from "../../../generated/graphql";

function MyComponent() {
  const { data, loading, error } = useGetHouseholdQuery({
    variables: { id: "123" },
  });

  // data is fully typed based on your query!
  const household = data?.household;
}
```

### Benefits

✅ **No manual type definitions needed** - Types are automatically generated from your queries
✅ **Type-safe by default** - Full TypeScript support with IntelliSense
✅ **Custom hooks** - Get `useGetHouseholdQuery`, `useGetHouseholdLazyQuery`, etc.
✅ **Always in sync** - Re-run `pnpm codegen` after schema or query changes

### When to Run Codegen

Run `pnpm codegen` whenever:

- You add a new GraphQL query or mutation
- You modify an existing query or mutation
- The GraphQL schema changes in the API

### Configuration

See [`codegen.yml`](./codegen.yml) for the GraphQL Code Generator configuration.
