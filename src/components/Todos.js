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
      return this.props.todos.map((todo) => (
        <div style={{margin: '5px'}} >
          <TodoItem key={todo.id} todo={todo}/>
        </div>
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.sort(function (a, b) {
    return a.completed - b.completed;
}),
})

export default connect(mapStateToProps, { fetchTodos}) (Todos);
