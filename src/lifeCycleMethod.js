import React, { Component } from 'react';

class LifeCycleMethodsDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is life Cycle Demo of react',
    };
    console.log('I am constructor!');
  }

  static getDerivedStateFromProps() {
    console.log('I am getDerivedStateFromProps!');
    return null;
  }

  componentDidMount() {
    console.log('I am componentDidMount!');
  }

  changeMessage() {
    this.setState({ message: 'Hello Again!' });
  }

  render() {
    console.log('I am Render!');
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeMessage()}>Click Me!!</button>
        <p>--------------------------------</p>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log('I am shouldComponentUpdate!');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('I am getSnapshotBeforeUpdate!');
    return null;
  }
  componentDidUpdate() {
    console.log('I am componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('I am componentWillUnmount!');
  }
}

export default LifeCycleMethodsDemo;
