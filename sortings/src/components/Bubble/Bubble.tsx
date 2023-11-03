import { executeSort } from "../../utils/functions";

const Bubble = ({ array }: { array: number[] }) => {

  let time;

  const sort = () => {
    const start = Date.now();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    const end = Date.now();
    console.log(array);
    time = end - start;
    document.getElementById('time')!.textContent = time.toString() + ' ms';
  };


  return (
    <div className="sortcontainer">
      <h1>Bubble sort:</h1>
      <button onClick={() => executeSort(sort)} className='sortButton'>Do sorting!</button>
      <h2 id='time' className='timeBlock'></h2>
    </div>
  )
}

export default Bubble