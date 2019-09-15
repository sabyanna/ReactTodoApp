import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Todos extends Component {  
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const sign = 
      <Grid
          justify="center"
          container 
          maxWidth="sm"
          alignItems="left"
      >
        <Grid item xs={8}>
          <Typography style={{marginLeft: 'px'}} variant="h5" component="h2">
            Completed
          </Typography>
        </Grid>
        
      </Grid>
      

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
        </div>
      )).concat(sign
        
      ).concat(completed)
    return (todos)
    /*
    (props) => 
      this.props.completedTodos
        .map((todo) => (
          <div style={{margin: '5px'}} >
            <TodoItem key={todo.id} todo={todo}/>
          </div>
        )),
      this.props.todos
        .map((todo) => (
          <div style={{margin: '5px'}} >
            <TodoItem key={todo.id} todo={todo}/>
          </div>
        ))
        */
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
