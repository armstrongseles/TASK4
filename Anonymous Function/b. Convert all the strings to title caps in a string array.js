const toTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(toTitleCaps(["hello", "world"])); 


// Output: ["Hello", "World"]
