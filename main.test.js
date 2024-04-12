const getFibonacciSequence = require('./main')

test('Get the correct order of Fibonacci Sequence', () => {
    expect(getFibonacciSequence(6)).toStrictEqual([0, 1, 1, 2, 3, 5])
});