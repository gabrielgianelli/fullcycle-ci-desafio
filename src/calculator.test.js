const { add, subtract, multiply, divide } = require('./calculator.js');

test('add', () => {
    expect(add(4, 2)).toBe(6);
});

// test('subtract', () => {
//     expect(subtract(4, 2)).toBe(2);
// });

// test('multiply', () => {
//     expect(multiply(4, 2)).toBe(8);
// });

// test('divide', () => {
//     expect(divide(4, 2)).toBe(2);
// });