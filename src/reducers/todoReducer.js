import { FETCH_TODOS, ADD_TODO } from '../actions/types';

const initialState =  []


export default function(prevTodos = initialState, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_TODOS:
            return action.payload
        case ADD_TODO:
            return [...prevTodos, action.payload]
        default:
            return prevTodos;
    }
}