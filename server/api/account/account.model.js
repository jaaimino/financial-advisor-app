/*
 * Model for client accounts
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountSchema = new Schema({
  name: String,
  client: Schema.ObjectId,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Account', AccountSchema);