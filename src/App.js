import React from "react";
import "./App.css";
import Button from "./components/Button"
import {Input} from "./components/Input"
import {ClearButton} from "./components/ClearButton"
import  * as math from 'mathjs';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }
  addToInput = val => {
    this.setState({input: this.state.input + val});
  }
  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  test = () => {
      console.log("test")
  }
  
  render(){
    return(
      <div className="App">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className = "SpecialRow">
          <ClearButton handleClear = {() => this.setState({input:''})}>C</ClearButton>
          <Button>x/-</Button>
          <Button>%</Button>
          <Button>/</Button>
        </div>
        <div className = "row">
        <Button handleClick={this.addToInput}> 1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className = "row">
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className = "row">
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}> 9</Button>
        <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className = "row">
        <Button handleClick={this.addToInput}>0</Button>
        <Button handleClick={this.addToInput}>.</Button>
        
        <Button handleClick={() => this.handleEqual()}>=</Button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
