import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import CompletedSign from './CompletedSign';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';



class Todos extends Component {  
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {    
    const completed = this.props.completedTodos
      .map((todo) => (
        <div style={{margin: '5px'}} >
          <TodoItem key={todo.id} todo={todo}/>
        </div>
      ))

    const todos = this.props.todos
      .map((todo) => (
        <div style={{margin: '5px'}} >
          <TodoItem key={todo.id} todo={todo}/>
        </div>))
      .concat(<CompletedSign/>)
      .concat(completed)
    return (todos)
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => todo.completed === false),
  completedTodos: state.todos.filter(todo => todo.completed === true)
})

export default connect(mapStateToProps, { fetchTodos}) (Todos);
