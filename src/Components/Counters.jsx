import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onDelete,
      onReset,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset}>Reset</button>
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            del={onDelete}
            counter={counter}
            key={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
