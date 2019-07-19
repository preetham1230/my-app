import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Images from './Images.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users.js';
import Test from './Test.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState ={
    count: 20
}

function reducer(state = initialState, action){

switch(action.type){

    case "INCREMENT": 
        return { 
            count: state.count + 1
        };

    case "DECREMENT": 
        return { 
            count: state.count - 1
        };

    default:
        return state;
}
}

const store = createStore(reducer);

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
