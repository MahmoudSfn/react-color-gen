import React, { Component } from 'react';
import './App.css';

import Inputcount from './inputcount/Inputcount';
import Square from './square/Square'

function getColor(decimal) {
  //  100 -> #FF0000 -> rgb(100%,0%,0%) -> D16711680 
  // -100 -> #00FF00 -> rgb(0%,100%,0%) -> D65280

  // https://meyerweb.com/eric/tools/color-blend/#FF0000:00FF00:10:hex
  
  let r = 0, g = 0;
  let nD = decimal + 100;
  r = nD / 2;
  g = 100 - r;
  let rgbp = "rgb(" + r + "%," + g +"%, 0%)";
  console.log(rgbp);
  return rgbp;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {

  state = {
    numberInput: '',
    showSquares: false
  }
  
  // input handler
  inputChangedHandler = (event) => {
    this.setState({ showSquares: false });
    this.setState({numberInput: event.target.value});
  }

  loadButtonClick = () => {
    this.setState({ showSquares: true });
  }

  render() {

    let ListOfSquares;
    if (this.state.showSquares === true) {
      ListOfSquares = [];
      let count = this.state.numberInput;
      for (let i = 0; i < count; i++) {
        let random = getRandomInt(-100, 100);
        let color = getColor(random);
        
        let style = {
          rx: "5",
          ry: "5",
          width: "70",
          height: "70",
          fill: color
        }

        ListOfSquares.push(<Square style={style} val={random} />);
      } 
    } else {
      // free if recently had content !
      ListOfSquares = [];
    }

    let bodyStyle = {
      textAlign: "center",
      paddingTop: "20px"
    };

    return (
      <div className="App">
        {/* Firstly Display a textInput  */}
        <Inputcount onchange={this.inputChangedHandler} onclick={this.loadButtonClick}/>
        {/* Follwed by a submit button */}
        <div style={bodyStyle}>
          {ListOfSquares}
        </div>
      </div>
    );
  }
}

export default App;
