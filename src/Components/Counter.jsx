import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{display:"inline-block",width:"50px",textAlign:"center"}}className={this.classes()}>{this.countFormat()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="m-2 btn-lg btn-secondary"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="m-2 btn-lg btn-secondary"
        >
          -
        </button>
        <button
          onClick={() => this.props.del(this.props.counter.id)}
          className="btn btn-danger"
        >
          Del
        </button>
      </div>
    );
  }

  countFormat() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  classes() {
    let classes = "m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
