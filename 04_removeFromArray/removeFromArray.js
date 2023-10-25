const removeFromArray = function(array, ...args) {
    for (let n = 0; n < args.length; n++) {
        let index = array.indexOf(args[n]);
        if (index !== -1) {
            array.splice(index, 1)
        }
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
