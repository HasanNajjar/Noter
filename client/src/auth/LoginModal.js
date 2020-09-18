import React, {useState, useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert,  } from 'reactstrap'
import { login } from '../actions/authActions'
import { clearErrors } from '../actions/errorActions'

function LoginModal({login, isAuthenticated, error, clearErrors }) {
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    // uses useCallback hook to clear the modal if modal is closed
    const handleToggle = useCallback(() => {
      clearErrors()
      setModal(!modal)
    }, [clearErrors, modal])


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

      // if authenticated, close the modal
      if(modal) {
        if (isAuthenticated) {
          handleToggle()
        }
      }
    }, [error, handleToggle, isAuthenticated, modal])

    return (
      <>
      <button 
          class="text-white py-2 m-2 bg-purple-600 px-10 rounded border-white hidden lg:block"
          onClick={handleToggle}
          >
          Login
      </button>


          <Modal isOpen={modal} toggle={handleToggle}>
              <ModalHeader toggle={handleToggle}>Login</ModalHeader>
              <ModalBody>
              {err ? <Alert color="danger"> {err}</Alert> : null}

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
                  </div>
                </FormGroup>
               </Form>
              </ModalBody>
          </Modal>
          </>
    )
}

const mapStateToProps = (state) => ({
    //state and error are being fetched from the reducers
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, {login, clearErrors})(LoginModal)