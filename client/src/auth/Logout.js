import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {logout} from '../actions/authActions'

function Logout({logout, auth}) {

    const authLinks = (
        <>
        {auth && auth.user ? null : <Redirect to="/" />}
        </>
    )
    
    const guestLinks = (
        <>
        <Redirect to ="/" />
        </>
    )

    return(
        <>
        {auth && auth.isAuthenticated ? authLinks : guestLinks}
        <button 
        onClick={logout}
        >
        <svg 
        class="w-8 h-8 text-white block" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
        </path>
        </svg>
    </button>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth

  });

export default connect(mapStateToProps, {logout}) (Logout)