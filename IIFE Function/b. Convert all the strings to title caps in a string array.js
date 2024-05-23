(function(arr) {
    const titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps);
})(["hello", "world"]); 

// Output: ["Hello", "World"]
