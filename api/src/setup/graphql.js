// import 
import graphqlHTTP from "express-graphql"

// import config
import config from "../config/config.json"
import schema from "../schema"

// set up GraphQL 
export default function(server) {
    console.info("SETUP - GraphQL...")

    // api config for GraphQL
    server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
        schema,
        graphiql : config.graphql.ide,
        pretty : config.graphql.pretty
    })))
}