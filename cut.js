"use stcirt";
// Problem from: https://medium.com/@pratikone/dynamic-programming-for-the-confused-rod-cutting-problem-588892796840                                    

// You are given a rod of size n >0, it can be cut into                                                                                                 
// any number of pieces k (k ≤ n). P                                                                                                                    
// Price for each piece of size i is represented as p(i)                                                                                                
// and maximum revenue from a rod of size i is r(i)                                                                                                     
// (could be split into multiple pieces). Find r(n) for the rod of size n.                                                                              

// dynamic programming version: O(n^2)                                                                                                                  
function dyn(prices, length) {
    const max = [0];  //len 0 as price 0                                                                                                                
    for (let i = 1; i <= length; i++) {
        const ps = prices.slice(0, i);
        const all = ps.map((p, l) => p + max[i - l - 1]);
        max[i] = Math.max(...all);
    }
    return max[length];
}

let exe = 0;
// recursive version: O(2^n)                                                                                                                            
function rec(prices, length) {
    exe++; // to co
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    // looping through price array map is ES6 looping function
    const all = ps.map((p, l) => p + rec(prices, length - l - 1)); // recursive call
    console.log(all);
    return Math.max(...all); // getting max element from the array!
}

// recursive version with memorize                                                                                                                      
function memorize(rec) {
    const cache = [];
    return function (prices, length) {
        if (cache[length] === undefined) {
            cache[length] = rec(prices, length);
        }
        return cache[length];
    };
}

const mem = memorize(function (prices, length) {
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    const all = ps.map((p, l) => p + mem(prices, length - l - 1));
  
    return Math.max(...all);    
});


// main                                                                                                                                                 
const prices = [2,5,6,4,3,2]; // 0 1 2 3 4 5 
const rods = 5;

console.log(rec(prices, rods))
console.log(exe);
 