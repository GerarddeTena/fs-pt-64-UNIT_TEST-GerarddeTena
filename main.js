function getFibonacciNumber(number){
    if (number < 2) {return number}
    return getFibonacciNumber(number - 2) + getFibonacciNumber(number - 1);
}

function getFibonacciSequence(sequence){
    return Array.from({length: sequence}, (_, index) => getFibonacciNumber(index));
}

module.exports = getFibonacciSequence;
