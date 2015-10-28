'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvestmentAccountSchema = new Schema({
  account: Schema.ObjectId,
  name: String,
  account_number  : { type: String, required: true },
  description     : { type: String, required: false },
  balance         : { type: Number, required: false },
  date_created    : { type: Date, default: Date.now},
  account_type    : { type: String, required: false },
  active: Boolean
});

module.exports = mongoose.model('InvestmentAccount', InvestmentAccountSchema);