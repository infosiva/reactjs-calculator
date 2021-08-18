import "./App.css";
import React, { useState } from "react";
import ResultsPane from "./components/calculator/ResultsPane";
import KeyPad from "./components/calculator/KeyPad";

function App() {
  const [state, setState] = useState({});

  const onClick = (buttonLabel) => {
    if (buttonLabel === "=") {
      calculate();
    } else if (buttonLabel === "C") {
      reset();
    } else if (buttonLabel === "CE") {
      backspace();
    } else if (buttonLabel === '+/-') {
      setState({
        result: state.result ?  "-" + state.result : ''
      });
    } else {
      setState({
        result: state.result ?  state.result + buttonLabel : buttonLabel,
      });
    }
  };

  const calculate = () => {
    var checkResult = "";
    if (state?.result?.includes("--")) {
      checkResult = state?.result?.replace("--", "+");
    } else {
      checkResult = state?.result;
    }

    try {
      setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      setState({
        result: "error",
      });
    }
  };

  const reset = () => {
    setState({
      result: 0,
    });
  };

  const backspace = () => {
    setState({
      result: state.result.slice(0, -1),
    });
  };

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Simple Calculator</h1>
      <div className="calculator-body">
        <ResultsPane result={state?.result} />
        <KeyPad onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
