import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Images from './Images.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users.js';
import Test from './Test.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './Store.js'



export default class Info extends Component {
    render() {
        return (
            <Provider store = {store}>
            <div>
            <Test/>
              <Home/>
              <Images/> 
               
            </div>
            </Provider>
        )
    }
}
