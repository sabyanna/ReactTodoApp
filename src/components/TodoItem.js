import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delTodo, markCompleted} from '../actions/todoActions';

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
                    <input className="checker" type="checkbox" checked={completed} 
                        onChange={() => this.props.markCompleted(id, !completed, title)} /> 
                    {title}
                    <button className="deleteBtn" onClick={() => this.props.delTodo(id)}>Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default connect(null, { delTodo, markCompleted} ) (TodoItem)
