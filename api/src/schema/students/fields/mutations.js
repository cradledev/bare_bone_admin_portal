// import
import { GraphQLString, GraphQLInt } from "graphql"

// import apps
import StudentType from "../type"
import { create, updateStudent, remove } from "../resolvers"

// Student create
export const studentCreate = {
    type : StudentType,
    args : {
        firstName : {
            name : 'firstName',
            type : GraphQLString
        },
        lastName : {
            name : 'lastName',
            type : GraphQLString
        },
        phoneNumber : {
            name : 'phoneNumber',
            type : GraphQLString
        }
    },
    resolve : create
}

// student remove
export const studentRemove = {
    type : StudentType,
    args : {
        id : {
            name : 'id',
            type : GraphQLInt
        }
    },
    resolve : remove
}

// student update
export const studentUpdate = {
    type : StudentType,
    args : {
        id : {
            name : 'id',
            type : GraphQLInt
        },
        firstName : {
            name : "firstName",
            type : GraphQLString
        },
        lastName : {
            name : 'lastName',
            type : GraphQLString
        },
        phoneNumber : {
            name : 'phoneNumber',
            type : GraphQLString
        }
    },
    resolve : updateStudent
}
