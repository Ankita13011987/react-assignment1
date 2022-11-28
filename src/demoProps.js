import React, { Component } from "react";

class PropsDemo extends Component {
    render() {
      return ([
        <h3>Hello {this.props.name} from PropsDemo</h3>, 
        <p>------------------------------</p>
      ]);       
    }
}

export default PropsDemo;