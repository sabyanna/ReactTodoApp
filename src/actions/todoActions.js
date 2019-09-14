import { FETCH_TODOS, ADD_TODO } from './types';
import axios from 'axios';

export const fetchTodos = () => dispatch => {
    console.log('fetching');
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //.then(res => res.json())
      .then(res => {console.log(res.data)
        dispatch({
          type: FETCH_TODOS,
          payload: res.data
        })})
}

export const addTodo = (title) => dispatch => {
    console.log('fetching');
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
        })
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
            }));
    
}