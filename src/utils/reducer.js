import { GET_TODO_LIST } from "./types";

export const initialState = {
    loading: false,
    todos: [],
    error : null,
};
export const reducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {

        case GET_TODO_LIST :
            return{
                ...state,
                
                loading : true,
                todos : payload
            }
            case 'EDIT_TODOLIST' : 
            return{
                loading : true,
                
            }
        default:
            return state;
    }
};
