import React, { Component } from "react";
import Counters from "./Counters";
import Nav from "./Nav";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  numOfCounters = () => {
    return this.state.counters.length;
  };
  handleDelete = (counterId) =>
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.id !== counterId
      ),
    });
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    if (this.state.counters[index].value > 0) {
      const counters = [...this.state.counters];
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Nav
          numOfCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
