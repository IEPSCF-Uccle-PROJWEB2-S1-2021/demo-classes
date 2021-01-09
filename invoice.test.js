const { Invoice, InvoiceLine } = require('./invoice');

describe('Invoice', () => {
  test('single line subtotal', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('crayon', 2, 10);
    invoice.add(line);
    expect(invoice.subtotal()).toEqual(20);
  });
  test('single line totalTax', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('crayon', 2, 10);
    invoice.add(line);
    expect(invoice.totalTax()).toEqual(4.2);
  });
  test('single line total', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('crayon', 2, 10);
    invoice.add(line);
    expect(invoice.total()).toEqual(24.2);
  });
  test('many lines subtotal', () => {
    const invoice = new Invoice();
    const line1 = new InvoiceLine('crayon', 2, 10);
    const line2 = new InvoiceLine('stylo', 50, 3);
    invoice.add(line1);
    invoice.add(line2);
    expect(invoice.subtotal()).toEqual(170);
  });
  test('many lines totalTax', () => {
    const invoice = new Invoice();
    const line1 = new InvoiceLine('crayon', 2, 10);
    const line2 = new InvoiceLine('stylo', 50, 3);
    invoice.add(line1);
    invoice.add(line2);
    expect(invoice.totalTax()).toEqual(35.70);
  });
  test('many lines total', () => {
    const invoice = new Invoice();
    const line1 = new InvoiceLine('crayon', 2, 10);
    const line2 = new InvoiceLine('stylo', 50, 3);
    invoice.add(line1);
    invoice.add(line2);
    expect(invoice.total()).toEqual(205.70);
  });
});

describe('InvoiceLine', () => {
  test('total', () => {
    const line = new InvoiceLine('crayon', 2, 10);
    expect(line.total()).toEqual(20);
  });
});
