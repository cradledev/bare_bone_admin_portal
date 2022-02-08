// import
import { GraphQLObjectType, GraphQLSchema } from "graphql"

// import apps
import * as student from "./students/fields/mutations"

// mutation
const mutation = new GraphQLObjectType({
    name : "mutations",
    description : "...",
    fields : {
        ...student
    }
})

export default mutation