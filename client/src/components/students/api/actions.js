// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// apps import
import {routesApi} from '../../../setup/routes'

// Actions Types
export const STUDENTS_GET_LIST_REQUEST = 'STUDENTS/GET_LIST_REQUEST'
export const STUDENTS_GET_LIST_RESPONSE = 'STUDENTS/GET_LIST_RESPONSE'
export const STUDENTS_GET_LIST_FAILURE = 'STUDENTS/GET_LIST_FAILURE'
export const STUDENTS_GET_REQUEST = 'STUDENTS/GET_REQUEST'
export const STUDENTS_GET_RESPONSE = 'STUDENTS/GET_RESPONSE'
export const STUDENTS_GET_FAILURE = 'STUDENTS/GET_FAILURE'

// Actions

// Get list of students
export function getList(isLoading = true) {
    return dispatch => {
      dispatch({
        type: STUDENTS_GET_LIST_REQUEST,
        isLoading
      })
  
      return axios.post(routesApi, query({
        operation: 'students',
        fields: ['id', 'firstName', 'lastName', 'phoneNumber', 'createdAt' ]
      }))
        .then((response) => {
          dispatch({
            type: STUDENTS_GET_LIST_RESPONSE,
            error: null,
            list: response.data.data.students
          })
        })
        .catch((error) => {
          dispatch({
            type: STUDENTS_GET_LIST_FAILURE,
            error: error
          })
        })
    }
}

// Get single student
export function get(id, isLoading = true) {
    return dispatch => {
        dispatch({
        type: STUDENTS_GET_REQUEST,
        isLoading
        })

        return axios.post(routesApi, query({
                operation: 'student',
                variables: {id: parseInt(id)},
                fields: ['id', 'firstName', 'lastName', 'phoneNumber', 'createdAt']
            }))
            .then((response) => {
                dispatch({
                    type: STUDENTS_GET_RESPONSE,
                    error: null,
                    item: response.data.data.student
                })
            })
            .catch((error) => {
                dispatch({
                    type: STUDENTS_GET_FAILURE,
                    error: error
                })
        })
    }
}

// Create student
export function create(variables) {
    return axios.post(routesApi, mutation({
        operation: 'studentCreate',
        variables, fields: ['id']
    }))
}


// Update student
export function update(variables) {
    return axios.post(routesApi, mutation({
        operation: 'studentUpdate',
        variables, fields: ['id']
    }))
}

// Remove student
export function remove(variables) {
    return axios.post(routesApi, mutation({
        operation: 'studentRemove',
        variables,
        fields: ['id']
    }))
}

// Get single student
export function getStudent(id) {
    return axios.post(routesApi, query({
        operation: 'student',
        variables : {id : parseInt(id)},
        fields: ['id', 'firstName', 'lastName', 'phoneNumber', 'createdAt']
    }))
}