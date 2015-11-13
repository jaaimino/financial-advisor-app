/*
 * Model for client bank site accounts
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountSchema = new Schema({
  client		  : { type: Schema.ObjectId, required: true },
  name            : { type: String, required: true },
  description     : { type: String, required: false },
  added			  : { type: Date, default: Date.now },
  active		  : Boolean
});

module.exports = mongoose.model('Account', AccountSchema);