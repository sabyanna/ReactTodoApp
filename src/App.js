import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
  
}

export default App;
