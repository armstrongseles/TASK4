const getMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};
console.log(getMedian([1, 2, 3], [4, 5, 6])); 

// Output: 3.5
