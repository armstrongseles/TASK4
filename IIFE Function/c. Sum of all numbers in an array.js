(function(arr) {
    const sum = arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Output: 15
