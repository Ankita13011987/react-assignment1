import React, { Component } from "react";

class PropsDemo extends Component {
    render() {
        return <h2>Hello {this.props.name} from PropsDemo</h2>
    }
}

export default PropsDemo;