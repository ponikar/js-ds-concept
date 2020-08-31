
/// this is the first problem in which we have 2 Arrays we have to check if the array1 property exists in array 2 or not!


//// time Complexity will be O(arr1 + arr2) if both array has diffrent length

const a = [1,2,3,4,5];

const b = [6,7,2];

let map = {};

for(item of a) {
    if(!map[item]) {
        map[item] = true;
    }
}

for(item of b) {
    if(map[item]) {
        console.log(true);
    }
}

// console.log(a.some(item => b.includes(item)));