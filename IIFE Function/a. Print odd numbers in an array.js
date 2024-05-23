(function(arr) {
    const oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0;
    });
    console.log(oddNumbers);
})([1, 2, 3, 4, 5]); 


// Output: [1, 3, 5]
