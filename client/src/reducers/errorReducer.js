import {GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initalState = {
    msg: {},
    status: null,
    id: null 
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg, //get error msg from server
                status: action.payload.status,
                id: action.payload.id // not all errors have ids / not neccessary

            }
        case CLEAR_ERRORS:
            return {
                msg: {}, // remove error message
                status: null,
                id: null 
            }
        default:
            return state
    }
}