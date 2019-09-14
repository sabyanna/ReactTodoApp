import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';

class Todos extends Component {  
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      console.log(this.props.todos)
      return this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps, { fetchTodos}) (Todos);
