const fibonacci = function(count) {
    if (count < 0) return "OOPS"
    else if (count === 0) return 0
     
    seq = [1]
    for (n = 1; n <= count; n++) {
        let sum = seq.slice(-2).reduce((partialSum, a) => partialSum + a, 0);
        seq.push(sum);
    }
    console.log(seq);
    return seq[count - 1]
};

// Do not edit below this line
module.exports = fibonacci;
