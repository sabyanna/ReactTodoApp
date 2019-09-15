import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {

  render() { 
    return (
      <Provider store={store}>
          <Router>         
              <Header/>              
              <Route exact path="/" render={props => (
                <>
                  <AddTodo/>
                  <Todos/>
                </>
              )} />
              <Route path="/about" component={About}/>
        </Router>
      </Provider> 
    );
  } 
}

export default App;
