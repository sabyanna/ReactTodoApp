import { FETCH_TODOS, NEW_TODO } from '../actions/types';

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_TODOS:
                return {
                    ...state,
                    todos: action.payload
                  };
        default:
            return state;
    }
}