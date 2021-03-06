import React, {useState, useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert,  } from 'reactstrap'
import { register } from '../actions/authActions'
import { clearErrors } from '../actions/errorActions'

function RegisterModal({register, isAuthenticated, error, clearErrors }) {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    // uses useCallback hook to clear the modal if modal is closed
    const handleToggle = useCallback(() => {
      clearErrors()
      setModal(!modal)
    }, [clearErrors, modal])


    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    
    
    const handleOnSubmit = (e) => {
      e.preventDefault()

      const newUser = {
        name,
        email,
        password
      }

      register(newUser)

    }

    useEffect(() => {
      if (error.id === 'REGISTER_FAIL') {
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
          Register
      </button>


          <Modal isOpen={modal} toggle={handleToggle}>
              <ModalHeader toggle={handleToggle}>Register</ModalHeader>
              <ModalBody>
              {err ? <Alert color="danger"> {err}</Alert> : null}

               <Form onSubmit={handleOnSubmit}>
                <FormGroup>

                  <Label for="item">Name</Label>

                  <Input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChangeName}
                  />

                  <Label for="item">Email</Label>

                  <Input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={handleChangeEmail}
                  />

                  <Label for="password">password</Label>

                  <Input 
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChangePassword}
                  />


                  <div class="pt-4">
                  <button class="text-white py-2 mx-auto min-w-full text-center bg-purple-600 px-10 rounded border-white content-end right text-right">
                  Register
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

export default connect(mapStateToProps, {register, clearErrors})(RegisterModal)