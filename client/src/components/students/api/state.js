// App Imports
import {
    STUDENTS_GET_LIST_REQUEST,
    STUDENTS_GET_LIST_RESPONSE,
    STUDENTS_GET_LIST_FAILURE,
    STUDENTS_GET_REQUEST,
    STUDENTS_GET_RESPONSE,
    STUDENTS_GET_FAILURE,
} from './actions'

// Initial State
const studentsInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const students = (state = studentsInitialState, action) => {
    switch (action.type) {
      case STUDENTS_GET_LIST_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
          error: null
        }
  
      case STUDENTS_GET_LIST_RESPONSE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          list: action.list
        }
  
      case STUDENTS_GET_LIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
  
      default:
        return state
    }
}

/*  single student */

// Initial State
const studentInitialState = {
    isLoading: false,
    error: null,
    item: {}
}

// State
export const student = (state = studentInitialState, action) => {
    switch (action.type) {
      case STUDENTS_GET_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
          error: null
        }
  
      case STUDENTS_GET_RESPONSE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          item: action.item
        }
  
      case STUDENTS_GET_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
  
      default:
        return state
    }
}