/*
 * Model for basic bank transaction
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HoldingsSchema = new Schema({
  account              : { type: Schema.ObjectId, required: true },
  ticker        : {type: String},
  cusip         : {type: String},
  description   : {type: String},
  units         : {type: Number},
  price         : {type: Number},
  cost_basis    : {type: Number},
  aquired       : {type: Date},
});

module.exports = mongoose.model('Holdings', HoldingsSchema);
