import axios from 'axios'
import {returnErrors} from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'

// token matching and user loading phase
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data // the token and user data
        }))
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status)) // takes in message, status, and id (optionally)  
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//register user
export const register = ({ name, email, password }) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // request body
    const body = JSON.stringify({name, email, password})

    axios.post('./api/users', body, config)
         .then(res => dispatch({
             type: REGISTER_SUCCESS,
             payload: res.data
         }))
         .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL')) // takes in message, status, and id (optionally)  

             dispatch({
                 type: REGISTER_FAIL
             })
         })

}

//Login user

export const login = ({ email, password }) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // request body
    const body = JSON.stringify({ email, password})

    axios.post('./api/auth', body, config)
         .then(res => dispatch({
             type: LOGIN_SUCCESS,
             payload: res.data
         }))
         .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL')) // takes in message, status, and id (optionally)  
             dispatch({
                 type: LOGIN_FAIL
             })
         })

}

//Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// config, headers and token 
export const tokenConfig = getState => {
    
    // get the token from the initalState in authReducer.js
    const token = getState().auth.token

    // headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // if token matches, add the token to the header
    if(token) {
        config.headers['x-auth-token'] = token
    }

    return config
}