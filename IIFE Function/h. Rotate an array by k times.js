(function(arr, k) {
    k = k % arr.length;
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2); 

// Output: [3, 4, 5, 1, 2]
