import React, { Component } from 'react';

const cont = React.createContext();

export {cont};

export default function Store(props) {

const stateHook = React.useState({color: 'violet'});

    return (
        <cont.Provider value = {stateHook}>
            {props.childern}
        </cont.Provider>    

    )
}