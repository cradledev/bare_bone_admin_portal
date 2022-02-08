// import 
import { GraphQLSchema } from "graphql"

// app imports
import query from "./query"
import mutation from "./mutation"

// schema
const schema = new GraphQLSchema({
    query,
    mutation
})

export default schema