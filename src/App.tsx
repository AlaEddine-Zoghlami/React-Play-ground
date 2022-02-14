import React from 'react';
import './App.css';
import { Component } from 'react';
import {CalculationDisplay} from './CalculatorDisplay'
type CalculatorState = 
{
  a: number,
  b: number
  somme: number,
}
type CalculatorPros =
{
  isSienctific : boolean
}
// State is the state of the componenet , props are prrrrops of the component (initial state)
/// State is a presentation of the real time state of the object (aka attributes of this compoment ) (real time state)
 //const Ab = ({ props,state }: any) => <div>{message}</div>;
 class Calculator extends Component<CalculatorPros,CalculatorState>
{
  constructor(props: CalculatorPros) {
    super(props);
    console.log(props);
    this.state = {a:0,b:0,somme:0};
    this.updateBInputValue = this.updateBInputValue.bind(this);
    this.updateAInputValue = this.updateAInputValue.bind(this);
    this.calculateClick = this.calculateClick.bind(this);
  }
  componentDidMount()
  {
   
  }
  render() {
    
    return  <div><input id='1' value={this.state.a} onChange= {this.updateAInputValue}></input> <br></br><p>+</p><input  value={this.state.b} onChange= {this.updateBInputValue}></input><> <br></br>
    <button onClick={this.calculateClick}>E7seb</button>
    </><p>=</p> <CalculationDisplay result={this.state.somme} ></CalculationDisplay></div>
  }

   calculateClick ()
  {
   console.log(this.state);
  }
  updateAInputValue(evt : any) {
    const val = evt.target.value;
    // ...
    this.setState({
      a: val,
      somme: val+this.state.b
    });
  }
  updateBInputValue(evt : any) {
    const val = evt.target.value;
    // ...
    this.setState({
      b: val,
      somme: val+this.state.a
    });
  }
}

export {Calculator};