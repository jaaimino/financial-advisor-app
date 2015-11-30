/*
 * Model for basic bank transaction
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BankTransactionSchema = new Schema({
  account              : { type: Schema.ObjectId, required: true },
  currency_codes       : { type: String },
  description          : { type: String },
  amount               : { type: Number },
  positive             : { type: Boolean, default: true },
  added                : { type: Date, default: Date.now },
  merchant_name        : { type: String },
  merchant_category    : { type: String },
  active: Boolean
});

module.exports = mongoose.model('BankTransaction', BankTransactionSchema);
