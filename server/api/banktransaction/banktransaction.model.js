/*
 * Model for basic bank transaction
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BankTransactionSchema = new Schema({
  name: String,
  account              : { type: String, required: true },
  time                 : { type: Date, required: true },
  currency_codes       : { type: String, required: true },
  description          : { type: String, required: false },
  amount               : { type: Number, required: false },
  added                : { type: Date, required: true  },
  merchant_name        : { type: String, required: false },
  merchant_category    : { type: String, required: false },
  active: Boolean
});

module.exports = mongoose.model('BankTransaction', BankTransactionSchema);