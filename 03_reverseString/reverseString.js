const reverseString = function(testString) {
    let testStringArray = testString.split("");
    let backwardsString = "";
    for (i = testStringArray.length; i > 0; i--) {
        backwardsString = backwardsString + testStringArray[i - 1];
    }
    return backwardsString;
};

// Do not edit below this line
module.exports = reverseString;
