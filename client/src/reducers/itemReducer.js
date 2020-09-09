import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false // if successful, set loading to false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload) // _id for mongoDB
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items] //payload is the new item, it adds it to the database too
            }
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.filter(item=> item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}