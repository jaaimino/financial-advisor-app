/*
 * Model for client
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  advisor: { type: Schema.ObjectId, required: true },
  name: String,
  email: { type: String, lowercase: true },
  phone: { type: String, lowercase: true },
  description: { type: String },
  added: { type: Date, default: Date.now },
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Client', ClientSchema);