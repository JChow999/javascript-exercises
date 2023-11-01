const palindromes = function (string) { 
    search = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newStr = search.split('').reverse().join('')
    console.log(`${search}, ${newStr}`)
    return (search == newStr)
};

// Do not edit below this line
module.exports = palindromes;
