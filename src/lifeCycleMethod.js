import React, { Component } from 'react';

class LifeCycleMethodsDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello from life Cycle Demo!',
    };
    console.log('Hello From constructor!');
  }

  static getDerivedStateFromProps() {
    console.log('Hello From getDerivedStateFromProps!');
    return null;
  }

  componentDidMount() {
    console.log('Hello From componentDidMount!');
  }

  changeMessage() {
    this.setState({ message: 'Hello Again!' });
  }

  render() {
    console.log('Hello From Render!');
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage()}>Click Me!</button>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log('Hello from shouldComponentUpdate!');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('Hello from getSnapshotBeforeUpdate!');
    return null;
  }
  componentDidUpdate() {
    console.log('Hello from componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('Hello from componentWillUnmount!');
  }
}

export default LifeCycleMethodsDemo;
