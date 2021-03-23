import { GET_TODO_LIST } from "./types";
import axios from 'axios'

export const getAllTodos = async ( data ,dispatch) => {
  try {
      
      const {data} = await axios.get('http://localhost:3001/api/tasks')
      dispatch({
        type: GET_TODO_LIST,
        payload: data
      })
     
  } 
  catch (error) {
    return console.log(error)
  }
    
  };