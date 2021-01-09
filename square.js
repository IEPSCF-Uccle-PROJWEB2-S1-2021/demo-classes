class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength * this.sideLength;
  }

  perimeter() {
    return 4 * this.sideLength;
  }
}

module.exports = Square;
