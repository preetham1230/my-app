import React, { Component } from 'react';
import {connect} from 'react-redux';


class Test extends Component {

handleIncrement = () => {
    this.props.dispatch({ type: "INCREMENT"});
}

handleDecrement = () => {
    this.props.dispatch({ type: "DECREMENT"});
}
    render() {
        return (
            <div>

                <button onClick={this.handleIncrement}>Increment</button>
                    {this.props.count}
                <button onClick={this.handleDecrement}>Decrement</button>
                
            </div>
        )
    }
}


const mapstateToProps = state =>({

    count: state.count
})

export default connect(mapstateToProps) (Test);