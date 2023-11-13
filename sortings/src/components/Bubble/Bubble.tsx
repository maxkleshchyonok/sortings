//import { executeSort } from "../../utils/functions";

const Bubble = ({ array }: { array: number[] }) => {

  const bubbleSortWorker = new Worker('worker.js');

  const sort = () => {
    console.log('Please wait...')
    bubbleSortWorker.postMessage(array);
    bubbleSortWorker.onmessage = function (message) {
      console.log(message);
      document.getElementById('time')!.textContent = `${message.data} ms`;
    }
  };

  return (
    <div className="sortcontainer">
      <h1>Bubble sort:</h1>
      <button onClick={sort} className='sortButton'>Do sorting!</button>
      <h2 id='time' className='timeBlock'></h2>
    </div>
  )
}

export default Bubble