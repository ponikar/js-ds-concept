let list = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];



const quickSort = (list, left, right) => {
    if(left < right) {
        const pivot = left;
        const partionIndex = doPartion(list, pivot, left, right);

        quickSort(list, left, partionIndex - 1);
        quickSort(list, partionIndex + 1, right);

    } 

    return list;
}


const doPartion = (list, pivot, left, right) => {
    const partionValue = list[pivot];
    let partionIndex = left;

        for(let i = left; i < list.length; i++) {
            if(list[i] < partionValue) {
                swap(list, i, partionIndex);
                // continue;
                partionIndex++;
            }
        }
        swap(list, partionIndex, right);
        return partionIndex;
}

const swap = (array, a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

console.log(quickSort(list, 0, list.length - 1));