import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Alert,  } from 'reactstrap'
import { login } from '../actions/authActions'

function Login({auth, login, isAuthenticated, error}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    const handleOnSubmit = (e) => {
        e.preventDefault()
  
        const user = {email, password}
  
        login(user)
      }

      useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
          setErr(error.msg.Error)
        } else {
          setErr(null)
        }
    }, [error, isAuthenticated])


    return(
        <>
        {err ? <Alert color="danger"> {err}</Alert> : null}

        <div class="container mx-auto flex justify-center pt-20">
        <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="item">Email</Label>
          <Input 
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChangeEmail}
          />

          <Label for="password">Password</Label>

          <Input 
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChangePassword}
          />

          <div class="pt-4">
          <button class="text-white py-2 mx-auto min-w-full text-center bg-purple-600 px-10 rounded border-white content-end right text-right">
          Login
          </button>
          <div>
          <button>Dont have an account? Click here to sign up!</button>
          </div>
          </div>
        </FormGroup>
       </Form>
        </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });

export default connect(mapStateToProps, {login})(Login);