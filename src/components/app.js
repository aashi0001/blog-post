import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
          Default react App Component text!
          {this.props.children}
      </div>

    );
  }
}
