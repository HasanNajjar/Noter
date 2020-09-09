import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input,  } from 'reactstrap'
import {addItem} from '../actions/itemActions'

function CreateNote({addItem}) {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [random, setRandom] = useState('')

    const handleToggle = () => setModal(!modal)

    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeRandom = (e) => setRandom(e.target.value)

    const handleOnSubmit = (e) => {
      e.preventDefault()
  
      const newItem = {
        name,
        random
      }

      addItem(newItem)
  
      handleToggle()
    }
    return (
      <>
      <button 
        class="text-black py-2 m-2  bg-gray-100 px-10 rounded border-2 border-gray-400 cursor-not-allowed hidden lg:block"
        onClick={handleToggle}
        >
        New Note
      </button>
          <Modal isOpen={modal} toggle={handleToggle}>
              <ModalHeader toggle={handleToggle}>Create a new Note</ModalHeader>
              <ModalBody>
               <Form onSubmit={handleOnSubmit}>
                <FormGroup>

                  <Label for="item">Note Title </Label>
                  <Input 
                  type="text"
                  name="notes"
                  id="item"
                  placeholder="Note Title..."
                  onChange={handleChangeName}
                  />
                  <Label for="item">Note Title </Label>
                  <Input 
                  type="text"
                  name="notes"
                  id="random"
                  placeholder="Note Title..."
                  onChange={handleChangeRandom}
                  />
                  
                  <div class="pt-4">
                  <button class="text-white py-2 mx-auto min-w-full text-center bg-purple-600 px-10 rounded border-white content-end right text-right">
                  Submit
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
    item: state.item
})

export default connect(mapStateToProps, {addItem})(CreateNote)