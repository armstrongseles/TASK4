const isPalindrome = function(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const getPalindromes = function(arr) {
    return arr.filter(isPalindrome);
};
console.log(getPalindromes(["madam", "hello", "racecar", "world"]));


// Output: ["madam", "racecar"]
