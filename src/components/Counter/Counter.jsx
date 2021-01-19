import React, { Component} from "react";

class Counter extends Component {
  state = {
    value: 1,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDescrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

    
    
  render() {
    return (
      <div>
        <div>
          <div>
            <button type="button" onClick={this.handleDescrement}>
              -
            </button>
            <span>{this.state.value}</span>
            <button type="button" onClick={this.handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;