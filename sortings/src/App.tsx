import { useState } from "react";
import Bubble from "./components/Bubble/Bubble";
import Quick from "./components/Quick/Quick";
import './App.scss';

function App() {

  const notSorted: number[] = [];
  for (let i = 0; i < 10000; i++) {
    notSorted.push(Math.floor(Math.random() * 101));
  }

  const [array, setArray] = useState([...notSorted]);

  return (
    <div className='app'>
      <h1>Sortings Comparison</h1>
      <div className="sortBlocks">
        <Bubble array={array} />
        <Quick array={array} />
      </div>
    </div>
  )

}

export default App;