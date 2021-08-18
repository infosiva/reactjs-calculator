import React from "react";

import {keypadButtonsArr} from '../../utils/constant'

const keypadColor = (buttonKey) => {
  let operatorKey = false
  switch (buttonKey) {
    case '*':
    case '-':
    case '+':
    case '=':
    case '/':
      operatorKey = true
      break;
    default:
      operatorKey = false
      break;
  }
  return buttonKey === '0' ? 'keyZero': (operatorKey) ? 'operatorButtons' : 'keyButtons'
}

const KeyPad = (props) => {
  return (
    <div className="buttonsContainer">
      {keypadButtonsArr.map((buttonKey) => (
         <button data-testid={buttonKey} key={buttonKey} 
                  className={keypadColor(buttonKey)}
                  onClick={() => props.onClick(buttonKey)}>
         { buttonKey }
       </button>
      ))}
    </div>
  );
};

export default KeyPad;
