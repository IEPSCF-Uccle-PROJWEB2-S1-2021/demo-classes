const express = require('express');
const router = new express.Router();
const { Invoice, InvoiceLine } = require('../models/invoice');

/* GET home page. */
router.get('/ajax-data', (req, res, next) => {
  const invoice = new Invoice();

  const line1 = new InvoiceLine("crayon", 0.50, 100);
  invoice.add(line1);

  const line2 = new InvoiceLine("bic rouge", 0.80, 20);
  invoice.add(line2);

  res.json(invoice);
});

module.exports = router;
