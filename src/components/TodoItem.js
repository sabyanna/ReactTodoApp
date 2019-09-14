import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (id) => {
        axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed : !this.props.todo.completed,
        })
        .then(res => this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id) {
              todo = res.data
            }
            return todo;
          })}));
    }
    
    delTodo = (id) => {
       axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
        
      }
  

    render() {
        const {title, completed} = this.props.todo;
        return (
            <div className="todoItemDiv" style = {this.getStyle()}>
                <p>
                    <input className="checker" type="checkbox" checked={completed} onChange={this.markComplete} /> 
                    {title}
                    <button className="deleteBtn" onClick={this.delTodo}>Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
