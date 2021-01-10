class InvoiceLine {
  constructor(product, unitPrice, quantity) {
    this.product = product;
    this.unitPrice = InvoiceLine.round(unitPrice);
    this.quantity = quantity;
  }

  total() {
    return this.quantity * this.unitPrice;
  }
}

InvoiceLine.round = (amount) => {
  return Math.round(amount * 10000) / 10000;
};

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
    return Invoice.round(subtotal);
  }

  totalTax() {
    const totalTax = this.subtotal() * 0.21;
    return Invoice.round(totalTax);
  }

  total() {
    return this.subtotal() + this.totalTax();
  }
}

Invoice.round = (amount) => {
  return Math.round(amount * 100) / 100;
};

module.exports = { Invoice, InvoiceLine };
