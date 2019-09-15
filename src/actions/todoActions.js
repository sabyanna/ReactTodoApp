import { FETCH_TODOS, ADD_TODO, DEL_TODO, MARK_COMPLETED } from './types';
import axios from 'axios';

export const fetchTodos = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {console.log(res.data)
      dispatch({
        type: FETCH_TODOS,
        payload: res.data
      })
    })
}

export const addTodo = (title) => dispatch => {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
    .then(res => dispatch({
      type: ADD_TODO,
      payload: res.data
    }));
}

export const delTodo = (id) => dispatch => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => dispatch({
      type: DEL_TODO,
      id
    }));
}

export const markCompleted = (id, completed, title) => dispatch => {
  axios
    .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed, id, title
    })
    .then(res => dispatch({
      type: MARK_COMPLETED,
      payload: res.data
    }));
}