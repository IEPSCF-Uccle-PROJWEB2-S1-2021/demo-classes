const Square = require('./square');

test.each([
  [3, 9],
  [4, 16],
  [5, 25],
])('Square(%d) area to equal %d', (sideLength, expected) => {
  const square = new Square(sideLength);
  expect(square.area()).toEqual(expected);
});

test.each([
  [3, 12],
  [4, 16],
  [5, 20],
])('Square(%d) perimeter to equal %d', (sideLength, expected) => {
  const square = new Square(sideLength);
  expect(square.perimeter()).toEqual(expected);
});
