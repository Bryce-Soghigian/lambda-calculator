import React,{useState} from "react";
import "./App.css";
import Button from "./components/Button"
import {Input} from "./components/Input"
import {ClearButton} from "./components/ClearButton"
import  * as math from 'mathjs';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";


  function App(props){
    const [input,setInput] = useState();
   const addToInput = val => {
    setInput(input + val);
  }
 const handleEqual = () => {
    // this.setState({input: math.evaluate(this.useState)})
  setInput(input, math.evaluate(input))

  };
    return(
<div className="App">
      <div className="calc-wrapper">
        <Input input= {useState()}></Input>
        <div className = "SpecialRow">
          <ClearButton handleClear = {() => setInput('')}>C</ClearButton>
          <Button>x/-</Button>
          <Button>%</Button>
          <Button>/</Button>
        </div>
        <div className = "row">
        <Button handleClick={addToInput()}> 1</Button>
        <Button handleClick={addToInput()}>2</Button>
        <Button handleClick={addToInput()}>3</Button>
        <Button handleClick={addToInput()}>*</Button>
        </div>
        <div className = "row">
        <Button handleClick={addToInput()}>4</Button>
        <Button handleClick={addToInput()}>5</Button>
        <Button handleClick={addToInput()}>6</Button>
        <Button handleClick={addToInput()}>-</Button>
        </div>
        <div className = "row">
        <Button handleClick={addToInput()}>7</Button>
        <Button handleClick={addToInput()}>8</Button>
        <Button handleClick={addToInput()}> 9</Button>
        <Button handleClick={addToInput()}>+</Button>
        </div>
        <div className = "row">
        <Button handleClick={addToInput()}>0</Button>
        <Button handleClick={addToInput()}>.</Button>
        
        <Button handleClick={() => handleEqual()}>=</Button>
        </div>
      </div>
      </div>
    )
  }


export default App;
