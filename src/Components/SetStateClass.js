import React, { Component } from "react";

class Set extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div>
          count - {this.state.count}
          <br></br>
          <button onClick={() => this.Increment()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Set;
