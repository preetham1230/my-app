import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div style ={{ height: '50px'}} className="bg-info">
                <div style ={{color: 'white'}}>
                    Header Component
                </div>
                <span><a href = '/users' style ={{color: 'white'}}> Click here to go toUsers Page</a></span>
            </div>
        )
    }
}

export default Home;