
import { Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import './AddTask.css'

function AddTask(props) {
    return (
      <div >
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
      <Form.Control type="text" placeholder="Type here...." />
      <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
        {/* <Checkbox color='primary'></Checkbox>
        Mark as Priority Task */}
        <FormControlLabel
          value="end"
          control={<Checkbox size='small' color="primary" />}
          label={<span style={{ fontSize: 'small' }}>Mark as Priority Task</span>}
          labelPlacement="end"
          style={{fontSize: 'small'}}
        />
      </div>
      </Modal.Body>
      <Modal.Footer style={{marginBottom: '20px'}}>
        <Button style={{marginRight: '20px', padding: '0px 35px'}} >Create</Button>
        <Button style={{padding: '0px 35px'}} variant="light" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    </div>

    )
}

export default AddTask
