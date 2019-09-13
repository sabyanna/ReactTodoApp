import { FETCH_TODOS, NEW_TODO } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}