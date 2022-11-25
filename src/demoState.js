import React, { Component } from "react";

class StatesDemo extends Component {

    constructor() {
        super();
        this.state = {
            message: 'This message will change'
        };
    }

    changeMessage() {
        this.setState({message: 'Message Changed!'});
    }

    render() {
        return(
        <div>            
            <button onClick={() => this.changeMessage()}>Click Me for state demo</button>
            <h2>{this.state.message}</h2>
        </div>
        ) 
    }
}

export default StatesDemo;