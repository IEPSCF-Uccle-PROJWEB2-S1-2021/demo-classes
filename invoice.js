class InvoiceLine {
  constructor(product, unitPrice, quantity) {
    this.product = product;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  total() {
    return this.quantity * this.unitPrice;
  }
}

class Invoice {
  constructor() {
    this.lines = [];
  }

  add(line) {
    this.lines.push(line);
  }

  subtotal() {
    const subtotal = this.lines
      .map((line) => line.total())
      .reduce((accumulator, lineTotal) => accumulator + lineTotal);
    return Math.round(subtotal * 100) / 100;
  }

  totalTax() {
    const totalTax = this.subtotal() * .21;
    return Math.round(totalTax * 100) / 100;
  }

  total() {
    return this.subtotal() + this.totalTax();
  }
}

module.exports = { Invoice, InvoiceLine };
