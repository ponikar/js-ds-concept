const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left

  const length = array.length
  const mid =  Math.floor(length / 2);
  const left = array.slice(0,mid);
  const right = array.slice(mid);


  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
   let results = [];
   let leftIndex = 0;
   let rightIndex = 0;
    if(left && right) {
        while(leftIndex < left.length && rightIndex < right.length) {
          if(left[leftIndex] < right[rightIndex]) {
              results.push(left[leftIndex]);
              leftIndex++;
          } else {
              results.push(right[rightIndex]);
              rightIndex++;
          }
      }
 
     return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
     // console.log(results)
    }

   
    
}


const answer = mergeSort(numbers);
console.log(answer);