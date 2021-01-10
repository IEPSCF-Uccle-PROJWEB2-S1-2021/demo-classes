const express = require('express');
const router = new express.Router();
const { Invoice, InvoiceLine } = require('../models/invoice');

/* GET home page. */
router.get('/ajax-data', (req, res, next) => {
  const invoice = new Invoice();

  const line1 = new InvoiceLine('crayon', 0.5, 100);
  invoice.add(line1);

  const line2 = new InvoiceLine('bic rouge', 0.8, 20);
  invoice.add(line2);

  const invoiceVO = {
    lines: [],
    subtotal: invoice.subtotal(),
    totalTax: invoice.totalTax(),
    total: invoice.total(),
  };

  invoice.lines.forEach((line) => {
    const lineVO = {
      product: line.product,
      quantity: line.quantity,
      unitPrice: line.unitPrice,
      total: line.total(),
    };
    invoiceVO.lines.push(lineVO);
  });

  res.json(invoiceVO);
});

module.exports = router;
