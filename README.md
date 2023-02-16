## Example fullstack prisma app as described on their blog

```
https://www.prisma.io/blog/e2e-type-safety-graphql-react-1-I2GxIfxkSZ
```

### Uses

- Prisma
- Postgres
- Typescript
- GraphQL Yoga
- Pothos
- Vite
- React
- GraphQL Codegen
- TailwindCSS
- Many, many, little dependencies and plugins

### Thoughts:

This was a fun first exercise in typescript after learning some rudimentary syntax. The headaches were *mostly* minor. Other than a nasty invisible type error from an improper import. Have to say, this repo feels a bit bloated with dependencies from what I'm used to (a third of a GB sheesh), but I got to use a lot of new technology here. All the type and schema declarations felt very repetitive at first, but in hindsight it's not *that* much worse than usual, and being able to generate all the types and queries via codegen afterwards is fantastic. GraphQL in general seems really interesting, and I barely scratched the surface of it here. This is a small vertical slice currently. I'm interested in expanding to see what else I can do with queries and mutations. I'm mostly interested in how we can write and manage these queries on the frontend to keep state lean and clean. I think this exposed how minimal my knowledge of typescript is, and I'll be going back to basics first to understand how larger projects are structured with it. 