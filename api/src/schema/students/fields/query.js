// import
import { GraphQLInt, GraphQLList } from "graphql"

// app imports
import StudentType from "../type"
import { getAll, getById } from "../resolvers"

// Students all
export const students = {
    type : new GraphQLList(StudentType),
    resolve : getAll
}

// Student By ID
export const student = {
    type : StudentType,
    args : {
        id : { type : GraphQLInt}
    },
    resolve : getById
}