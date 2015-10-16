'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  advisor: Schema.ObjectId,
  added: { type: Date, default: Date.now },
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Client', ClientSchema);