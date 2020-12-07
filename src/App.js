import React, { Component } from "react";
import { connect } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  getNum1,
  getNum2,
} from "./components/actions/calculatorActions";

class App extends Component {
  render() {
    const answer = isNaN(this.props.answer)
      ? "Please enter a number"
      : this.props.answer;
    return (
      <div className="container">
        <input className="center" onChange={this.props.getNum1} />
        <input className="center" onChange={this.props.getNum2} />
        <div className="center">
          <button className="green btn" onClick={this.props.add}>
            ADD
          </button>
          <button className="green btn" onClick={this.props.subtract}>
            SUBTRACT
          </button>
          <button className="green btn" onClick={this.props.multiply}>
            MULTIPLY
          </button>
          <button className="green btn" onClick={this.props.divide}>
            DIVIDE
          </button>
          <h1>{answer}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  answer: state.calculatorReducer.answer,
  num1: state.calculatorReducer.num1,
  num2: state.calculatorReducer.num2,
});

export default connect(mapStateToProps, {
  add,
  subtract,
  multiply,
  divide,
  getNum1,
  getNum2,
})(App);
