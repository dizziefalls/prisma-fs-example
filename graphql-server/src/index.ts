import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema";

const PORT = Number(process.env.API_PORT) || 4000

function main() {
  const yoga = createYoga({
    schema: schema,
  })
  const server = createServer(yoga)
  server.listen(PORT, () => {
    console.info(`Graphql yoga server running on port: ${PORT}`)
  })
}

main()