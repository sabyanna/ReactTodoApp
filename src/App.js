import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
//import uuid from 'uuid';
import { Provider } from 'react-redux';
import store from './store'

import Container from '@material-ui/core/Container';

class App extends Component {

  render() { 
    return (
      <Provider store={store}>
          <Router>
          <div className="App">          
                <Header/>              
                <Container maxWidth="md">
                  <Route exact path="/" render={props => (
                    <>
                      <AddTodo/>
                      <Todos/>
                    </>
                  )} />
                  <Route path="/about" component={About}/>
              </Container>
            </div>
         
        </Router>
      </Provider> 
    );
  } 
}

export default App;
