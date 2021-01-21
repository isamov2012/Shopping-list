import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handlerDecrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  handlerIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.classes()}>{this.countFormat()}</span>
        <button
          onClick={this.handlerIncrement}
          className="m-2 btn-lg btn-secondary"
        >
          +
        </button>
        <button
          onClick={this.handlerDecrement}
          className="m-2 btn-lg btn-secondary"
        >
          -
        </button>
      </div>
    );
  }

  countFormat() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  classes() {
    let classes = "m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default App;
