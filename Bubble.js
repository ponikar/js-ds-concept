

// array.spilce is used to store or delete the element from the 
// array. it return the deleted array

let list = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


const selection = (list) => {
    for(let i = 0; i < list.length; i++) {
        // select first value as min at first
        let min = i;
        let temp = list[i]; // targeting value to swap
        for(let j = i + 1; j < list.length; j++) {
            // if the first element is large than 
            // second  element
            if(list[min] > list[j]) {
                // then select second element as min
                min = j;
            }
        }
        list[i] = list[min];
        list[min] = temp;   
    }

    console.log(list);
}

//selection(list);


const bubble = list => {
    for(let i = 0; i < list.length; i++) { // run N times
        for(let j = 0; j < list.length; j++) { // run N times
            if(list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    console.log(list);
}


const insertion = (list) => {
    
    for(let i = 0; i < list.length; i++) {
        if(list[i] < list[0]) {
            list.unshift(list.splice(i,1)[0]); // swap the item delete and store at first
        } else {
            // otherwise start through 1
            for(let j = 1; j < i; j++) {
                // the current element should be greater than previous element
                // AND the current element shuld less than next element
                if(list[i] > list[j - 1] && list[i] < list[j]) { 
                    list.splice(j,0,list.splice(i,1)[0]);
                }
            }
        }
    }

    console.log(list);
}

insertion(list);




