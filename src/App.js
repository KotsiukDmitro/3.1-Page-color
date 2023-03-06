import { useState } from 'react';
import './App.css';

const COLORS = ['red', 'orange', 'yellow', 'blue', 'green']

function App() {
  function changeColor() {
    const colorIndex = Math.floor(Math.random() * COLORS.length)
    const color = COLORS[colorIndex]
    setColor(color)
  }
  let [color, setColor] = useState('#7f7979')
  return (<div id="container" className="container" style={{ background: color }}>
    <div className="background">Background Color : <span className="color">rgb(0, 128, 0)</span>
    </div>
    <button id="btn" className="btn" onClick={changeColor}>Click me</button>
  </div>)
}

export default App;



