
import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


function AddTask(props) {
    return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered = 'true'
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Control type="text" placeholder="Type here...." />
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Checkbox></Checkbox>
        Mark as Priority Task
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Create</Button>
        <Button variant='danger' onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default AddTask
