import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <Board />
    </div>
  );
}

function Board() {
  return (
    <div class="Board-container">
      <div class="ghost"></div>
      <div class="ghost"></div>
      <div class="ghost"></div>
      <div class="ghost"></div>
      <div class="ghost"></div>

      <Puzzle i='1' />
      <Puzzle i='2' />
      <Puzzle i='3' />
      <Puzzle i='4' />


    </div>
  );
}

function Puzzle(props) {

  return (
    <div id={`image${props.i}`} class="puzzle">
      <div class="top">
        <button value="up">^</button>
      </div>
      <div class="middle">
        <button value="left">&lt;</button>
        <button value="right">></button>
      </div>
      <div class="bottom">
        <button value="down">v</button>
      </div>
    </div>
  )
}














export default App;
