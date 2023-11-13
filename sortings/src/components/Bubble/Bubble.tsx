import { executeSort } from "../../utils/functions";

const Bubble = ({ array }: { array: number[] }) => {

  // let time;

  // const sort = () => {
  //   const start = Date.now();
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length; j++) {
  //       if (array[j] > array[j + 1]) {
  //         let temp = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = temp;
  //       }
  //     }
  //   }
  //   const end = Date.now();
  //   console.log(array);
  //   time = end - start;
  //   document.getElementById('time')!.textContent = time.toString() + ' ms';
  // };

  async function bubbleSort() {
    const start = Date.now();
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (array[j] > array[j + 1]) {
          await swap(array, j, j + 1);
        }
      }
    }
    const end = Date.now();
    document.getElementById('time')!.textContent = `${end - start} ms`;
    return array;
  }

  function swap(arr: number[], i: number, j: number) {
    return new Promise<void>((res) => {
      let temporary = arr[i];
      arr[i] = arr[j];
      arr[j] = temporary
      console.log(arr);
      setTimeout(() => {
        res()
      }, 0)
    })
  }


  return (
    <div className="sortcontainer">
      <h1>Bubble sort:</h1>
      <button onClick={() => executeSort(bubbleSort)} className='sortButton'>Do sorting!</button>
      <h2 id='time' className='timeBlock'></h2>
    </div>
  )
}

export default Bubble