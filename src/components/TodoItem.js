import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div className="todoItemDiv" style = {this.getStyle()}>
                <p>
                    <input className="checker" type="checkbox" checked={completed} onChange={this.props.markComplete.bind (this, id)} /> 
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
