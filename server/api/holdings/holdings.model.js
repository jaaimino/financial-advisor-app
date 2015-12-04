/*
 * Model for basic bank transaction
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HoldingsSchema = new Schema({
  account       : { type: Schema.ObjectId, required: true },
  ticker        : {type: String, required: false},
  cusip         : {type: String, required: false},
  description   : {type: String, required: false},
  units         : {type: Number, required: false},
  price         : {type: Number, required: false},
  cost_basis    : {type: Number, required: false},
  acquired       : {type: Date, required: false, default: Date.now},
});

module.exports = mongoose.model('Holdings', HoldingsSchema);
