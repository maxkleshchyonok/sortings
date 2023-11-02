

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
       const sortedArr = quicksort(array);
       console.log(sortedArr);
    };

    return (
        <div className="quickBlock">
            <h1>Quick sort:</h1>
            <button onClick={doSort}>Do quick sorting!</button>
        </div>
    )
}

export default Quick