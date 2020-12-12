import React from "react";

export function GetButton(props){
    const clickHandler = function(){
        props.btnClick(props.color)
    }
    return <button style={{ color: props.color }} onClick={clickHandler}>{props.color}</button>
}

export default class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'white' };
  }
  
  render() {
    
    const changeColor = (color)=> { this.setState({color: color}); }
    return (
      <div>
        <div style={{ textAlign: "center", backgroundColor:this.state.color }}>
          <GetButton color='red' btnClick={changeColor}></GetButton>
          <GetButton color='green' btnClick={changeColor}></GetButton>
          <GetButton color='blue' btnClick={changeColor}></GetButton>
        </div>
      </div>
    );
  }
}
