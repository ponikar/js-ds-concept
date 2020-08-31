let exe = 0;
const prices = [2,5,6,4,3,2]; // 0 1 2 3 4 5 
// recursive version: O(2^n)                                                                                                                            
function rec(prices, length) {
        exe++; // for counting Cost Factor
    if (length <= 0) return 0;


   
    for(let i = 1; i < prices.length; i++) {
        const cutting_prices = []; // array
        // pushing each profit in the array
        cutting_prices.push(prices[i] + rec(prices, length - i - 1));
        console.log(cutting_prices);
    
    return Math.max(...cutting_prices); // getting max element from the array!
}

}


const rods = 5;

console.log(rec(prices, rods))
console.log(exe);