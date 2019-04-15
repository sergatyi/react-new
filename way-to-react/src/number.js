import React, { Component } from 'react';

class Number extends Component{

render(){
  return(
      <button onClick={this.props.Click(this.props.label)} className={this.props.classname}>{this.props.label}</button>
  )
}
}
 export default Number;
