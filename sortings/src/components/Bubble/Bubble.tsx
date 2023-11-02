import './Bubble.scss';

const Bubble = ({ array }: { array: number[] }) => {

  const sort = () => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    console.log(array);
  };

  

  return (
    <div className="bubbleBlock">
      <h1>Bubble sort:</h1>
      <button onClick={sort}>Do sorting!</button>
    </div>
  )
}

export default Bubble