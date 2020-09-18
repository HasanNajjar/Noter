import React from 'react'
import Logout from '../auth/Logout'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authActions'
import Login from '../auth/Login';

function Homescreen({auth}) {

    const authLinks = (
        <>
        {auth && auth.user ? <Redirect to="/Noter" /> : null}
        </>
    )
    
    const guestLinks = (
        <>
        <Login />
        </>
    )

    return(
        <>
        {auth && auth.isAuthenticated ? authLinks : guestLinks}
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });

export default connect(mapStateToProps, {login})(Homescreen);