(function(arr) {
    const isPalindrome = function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };
    const palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(["madam", "hello", "racecar", "world"]);


// Output: ["madam", "racecar"]
