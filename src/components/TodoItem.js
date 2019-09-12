import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input className="checker" type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> 
                    {title}
                    <button className="deleteBtn" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
