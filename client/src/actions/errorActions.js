import {GET_ERRORS, CLEAR_ERRORS} from './types'

// display errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    }
}

// clear error messages
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}