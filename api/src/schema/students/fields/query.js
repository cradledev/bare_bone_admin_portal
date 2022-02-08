// import
import {GraphQLInt, GraphQLList} from "graphql"

// app imports
import StudentType from "../type"
import {getAll, getByID} from "../resolvers"

// Student By ID
export const student = {
    type: StudentType,
    args: {
      id: {type: GraphQLInt}
    },
    resolve: getByID
}

// Students all
export const students = {
    type : new GraphQLList(StudentType),
    resolve : getAll
}

