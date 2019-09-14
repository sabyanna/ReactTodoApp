import { FETCH_TODOS, NEW_TODO } from '../actions/types';

const initialState =  []


export default function(prevTodos = initialState, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_TODOS:
                return action.payload
        default:
            return prevTodos;
    }
}