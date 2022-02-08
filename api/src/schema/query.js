// import
import { GraphQLObjectType } from "graphql"

// app imports
import * as student from "./students/fields/query"

// query
const query = new GraphQLObjectType({
    name : "query",
    description : "...",
    fields : () => ({
        ...student
    })
})

export default query