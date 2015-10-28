'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LoanSchema = new Schema({
    account: Schema.ObjectId,
    name            : { type: String, required: true },
    account_number  : { type: String, required: true },
    description     : { type: String, required: false },
    balance         : { type: Number, required: false },
    added           : { type: Date, default: Date.now },
    account_type    : { type: String, required: false },
    active: Boolean
});

module.exports = mongoose.model('Loan', LoanSchema);