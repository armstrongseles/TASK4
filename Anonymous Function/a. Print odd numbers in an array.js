const getOddNumbers = function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
};
console.log(getOddNumbers([1, 2, 3, 4, 5]));



// Output: [1, 3, 5]
