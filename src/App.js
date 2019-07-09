import React from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

class App extends Component{
  render(){
    return(
      <div className="App">
      <div className="calc-wrapper">
        <Input input={this.state.input}/>
      </div>
      </div>
    );
  }
}

export default App;
