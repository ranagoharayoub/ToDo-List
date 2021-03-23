
import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'


function AddTask(props) {
    return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered = 'true'
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type='text'></input>
        <Checkbox></Checkbox>
        <p>Mark as Priority Task</p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Create</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default AddTask
