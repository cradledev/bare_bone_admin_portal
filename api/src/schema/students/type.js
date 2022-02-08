// import
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"

// student type
const StudentType = new GraphQLObjectType({
    name : "student",
    description : "...",
    fields : () => ({
        id : {type : GraphQLInt},
        firstName : {type : GraphQLString},
        lastName : {type : GraphQLString},
        phoneNumber : {type : GraphQLString},
        createdAt : {type : GraphQLString},
        updatedAt : {type : GraphQLString}
    })
})

export default StudentType