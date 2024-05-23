const sumArray = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));


// Output: 15
