import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Images from './Images.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users.js';

export default class Info extends Component {
    render() {
        return (
            <div>
              <Home/>
              <Images/>  
            </div>
        )
    }
}
