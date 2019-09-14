import { FETCH_TODOS, NEW_TODO } from './types';
import axios from 'axios';

export const fetchTodos = () => dispatch => {
    console.log('fetching');
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(todos => dispatch({
          type: FETCH_TODOS,
          payload: todos
      }))
    
}