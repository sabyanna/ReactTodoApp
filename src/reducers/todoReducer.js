import { FETCH_TODOS, ADD_TODO, DEL_TODO, MARK_COMPLETED } from '../actions/types';

const initialState =  []


export default function(prevTodos = initialState, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_TODOS:
            return action.payload
        case ADD_TODO:
            return [...prevTodos, action.payload]
        case DEL_TODO:
            return prevTodos.filter(todo => todo.id !== action.id)
        case MARK_COMPLETED:
            return prevTodos.map(todo => {
                if(todo.id === action.payload.id) {
                  todo = action.payload
                }
                return todo;
              })
        default:
            return prevTodos;
    }
}