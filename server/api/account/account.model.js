/*
 * Model for client accounts
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountSchema = new Schema({
  name            : { type: String, required: true },
  account_number  : { type: String, required: true },
  description     : { type: String, required: false },
  available_balance : { type: Number, required: false },
  total_balance   : { type: Number, required: false },
  account_type    : { type: String, required: false },
  client: Schema.ObjectId,
  added: { type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model('Account', AccountSchema);