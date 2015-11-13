/*
 * Model for basic bank transaction
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BankTransactionSchema = new Schema({
  account              : { type: Schema.ObjectId, required: true },
  currency_codes       : { type: String, required: false },
  description          : { type: String, required: false },
  amount               : { type: Number, required: false },
  positive             : { type: Boolean, default: true },
  added                : { type: Date, required: true },
  merchant_name        : { type: String, required: false },
  merchant_category    : { type: String, required: false },
  active               : {type: Boolean, default: true}
});

module.exports = mongoose.model('BankTransaction', BankTransactionSchema);