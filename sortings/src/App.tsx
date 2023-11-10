import { useState } from "react";
import Bubble from "./components/Bubble/Bubble";
import Quick from "./components/Quick/Quick";
import './App.scss';
import Animation from "./components/animation/animation";
import DropDown from "./components/dropdown/dropdown";

function App() {

  const notSorted: number[] = [];
  for (let i = 0; i < 100000; i++) {
    notSorted.push(Math.floor(Math.random() * 101));
  }

  const [array] = useState([...notSorted]);

  return (
    <div className='app'>
      <h1 className="title">Sortings Comparison</h1>
      <div className="sortBlocks">
        <Bubble array={array} />
        <h1>VS</h1>
        <Quick array={array} />
        <div id="loading-icon"></div>
      </div>
      <DropDown />
      <Animation />
    </div>
  )

}

export default App;