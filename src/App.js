import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames'

function App() {
  return (
    <div className="Container">
      <Calculator />
    </div>
  );
}

const BUTTON_GRID_CONFIGS = [
    [[7, false,  false], [8, false,  false], [9, false,  false], ['/', true,  false]],
    [[4, false,  false], [5, false,  false], [6, false,  false], ['x', true,  false]],
    [[1, false,  false], [2, false,  false], [3, false,  false], ['-', true,  false]],
    [[0, false,  true], ['=', true,  false], ['+', true,  false]],
  ]

function Calculator() {
  const [operand, setOperand] = useState(0);

  return (
    <div className="Calculator">
      <Display operand={operand} />
      {BUTTON_GRID_CONFIGS.map(row => {
        return (<div className={"Row"}>
          {row.map(config => <Button token={config[0]} isOperator={config[1]} isBig={config[2]} setOperand={setOperand} />)}
        </div>);
      })}
    </div>
  )
}

function Display(props) {
  return (
    <div className="Display">
      {props.operand}
    </div>
  )
}

function Button(props) {
  const onClick = () => { 
    if (!props.isOperator) {
      props.setOperand(props.token) 
    }
  };

  return (
    <div className={classNames('Button', {BigButton: props.isBig, OperatorButton: props.isOperator})} onClick={onClick}>
      {props.token}
    </div>
  )
}

export default App;
