import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: 'Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dog',
        completed: true
      },
      {
        id: 3,
        title: 'Eat',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() { 
    return (
      <div className="App">
        <div class="container">
          <Header/>
          <AddTodo/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
