import React, { Component } from 'react';
import './App.css';
//import Home from './Home.js';
//import Images from './Images.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users.js';
import Info from './Info.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/home" component={Info} />
       <Route path="/users" component={Users} />
      </div>
      </Router>
      
    );
  }
}

export default App;
