import React, { useContext, useEffect, useState } from 'react'
import { getAllTodos } from '../utils/services'
import {Context} from '../utils/Context'
import './Landing.css'
import '@material-ui/core'
import '@material-ui/icons'
import 'react-bootstrap'
import { AddCircle, CheckCircle, Create, Delete } from '@material-ui/icons'
import AddTask from '../components/AddTask'


const Landing = () => {
    const {state, dispatch } = useContext(Context);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {

        getAllTodos('calltodo', dispatch)
    },[dispatch])
    const todo = state.todos 
    return (
        <div className='landing-cont'>
            <div className='landing-center'>
                <div className='upper-cont'>
                    <div className='title-bar'>
                        <div className='title'>
                            <p className='task'>Task</p>
                            <p className='dash'>Dashboard</p>
                        </div>
                        <div>
                            <AddCircle onClick={() => setModalShow(true)} style={{ fontSize: 50, color: ' rgb(1, 202, 202)' }} ></AddCircle>
                            
                            <AddTask
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            
                        </div>
                    </div>
                    <div className='selector'>
                        <button className='button' style={{background: 'rgb(1, 202, 202)'}} >All</button>
                        <button className='button'>Tasks</button>
                        <button className='button'>Purchase</button>
                        <button className='button'>Completed</button>
                        <button className='button'>Deleted</button>
                    </div>
                </div>
                <div className='lower-cont'>
                {
                            todo.map((disc, keys) =>    
                            <div className='task-tab'>
                                <div key={keys.id} className='ch-di'>
                                    <CheckCircle  style={{ fontSize: 30, color: ' dimgrey',  }}></CheckCircle>
                                    <p className='disc'>{disc.text}</p>
                                </div>
                                <div className='edit-del'>
                                    <Create style={{ fontSize: 30, color: ' dimgrey', marginRight: '5px' }}></Create>
                                    <Delete style={{ fontSize: 30, color: ' dimgrey' }}></Delete>
                                </div>
                            </div>
                                
                                )
                }
                </div>
            </div>
        </div>
    )
}

export default Landing


