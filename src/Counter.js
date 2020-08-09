import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div className="counter-container">
        <h1>"It worked on my machine" counter</h1>
        <h2 className="counter-number">{this.state.count}</h2>
        <div className="button-container">
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleAddOne}>+1</button>
        </div>
        <div className="reset-container">
          <p>Stored in local storage</p>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;