'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvestmentAccountSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('InvestmentAccount', InvestmentAccountSchema);