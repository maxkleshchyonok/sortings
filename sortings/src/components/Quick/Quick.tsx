const Quick = ({ array }: { array: number[] }) => {

    const quicksort = (array: number[]): number[] => {
        if (array.length <= 1) {
            return array;
        }
        const pivot = array[Math.floor(array.length / 2)];
        const less = [], equal = [], more = [];
        for (let elem of array) {
            if (elem < pivot) {
                less.push(elem);
            } else if (elem == pivot) {
                equal.push(elem);
            } else if (elem > pivot) {
                more.push(elem);
            }
        }
        return ([...quicksort(less), ...equal, ...quicksort(more)])
    };

    const doSort = () => {
       const start = Date.now();
       const sortedArr = quicksort(array);
       const end = Date.now();
       console.log(sortedArr);
       document.getElementById('timeQuick')!.textContent = (end - start).toString() + ' ms';
    };

    return (
        <div className="sortcontainer">
            <h1>Quick sort:</h1>
            <button onClick={doSort} className="sortButton">Do quick sorting!</button>
            <h2 id="timeQuick" className='timeBlock'></h2>
        </div>
    )
}

export default Quick