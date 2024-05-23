const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = function(arr) {
    return arr.filter(isPrime);
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); 


// Output: [2, 3, 5, 7]
