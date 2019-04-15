import React, { Component } from 'react';
import './App.css'
import Number from './number'


class App extends Component {
constructor(props){
  super(props)
  this.state = {result:'0'}
  this.writeNum = this.writeNum.bind(this)
}
writeNum = () =>{
  console.log();
  this.setState({result : this.label})
}


  render() {
    return (
      <div className="app-wrapper">
      <div className="result">{this.state.result}</div>
      <button className="clearResult">C</button>
      <button className="Zerro">Zerro</button>
      <button className="percent">%</button>
      <button className="delete">/</button>
      <Number Click={this.writeNum} classname="item7" label='7' state={this.state.result}></Number>
      <Number classname="item8" label='8'></Number>
      <Number classname="item9" label='9'></Number>
      <button className="Mnog">*</button>
      <Number classname="item4" label='4'></Number>
      <Number classname="item5" label='5'></Number>
      <Number classname="item6" label='6'></Number>
      <button className="minus">-</button>
      <Number classname="item1" label='1'></Number>
      <Number classname="item2" label='2'></Number>
      <Number classname="item3" label='3'></Number>
      <button className="plus">+</button>
      <Number classname="Zero" label='0'></Number>
      <button className="point">.</button>
      <button className="rovno">=</button>






      </div>
    );
  }
}




export default App;
