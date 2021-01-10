const { Invoice, InvoiceLine } = require('../models/invoice');

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
    expect(invoice.totalTax()).toEqual(35.7);
  });
  test('many lines total', () => {
    const invoice = new Invoice();
    const line1 = new InvoiceLine('crayon', 2, 10);
    const line2 = new InvoiceLine('stylo', 50, 3);
    invoice.add(line1);
    invoice.add(line2);
    expect(invoice.total()).toEqual(205.7);
  });
  test('rounds subtotal', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('gomme', 1.23456, 1);
    invoice.add(line);
    expect(invoice.subtotal()).toEqual(1.23);
  });
  test('rounds totalTax', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('gomme', 1.23456, 1);
    invoice.add(line);
    expect(invoice.totalTax()).toEqual(0.26);
  });
  test('rounds total', () => {
    const invoice = new Invoice();
    const line = new InvoiceLine('gomme', 1.23456, 1);
    invoice.add(line);
    expect(invoice.total()).toEqual(1.49);
  });
});

describe('InvoiceLine', () => {
  test('total', () => {
    const line = new InvoiceLine('crayon', 2, 10);
    expect(line.total()).toEqual(20);
  });
  test('rounds unitprice', () => {
    const line = new InvoiceLine('gomme', 1.23456, 1);
    expect(line.unitPrice).toEqual(1.2346);
  });
});
