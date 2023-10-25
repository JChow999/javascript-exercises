const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    newWord = ''
    for (let n = 0; n < num; n++) {
        newWord += string
    }
    return newWord
};

// Do not edit below this line
module.exports = repeatString;
