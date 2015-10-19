'use strict';

var _ = require('lodash');
var Loan = require('./loan.model');

// Get list of loans
exports.index = function(req, res) {
  Loan.find(function (err, loans) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(loans);
  });
};

// Get a single loan
exports.show = function(req, res) {
  Loan.findById(req.params.id, function (err, loan) {
    if(err) { return handleError(res, err); }
    if(!loan) { return res.status(404).send('Not Found'); }
    return res.json(loan);
  });
};

// Creates a new loan in the DB.
exports.create = function(req, res) {
  Loan.create(req.body, function(err, loan) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(loan);
  });
};

// Updates an existing loan in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Loan.findById(req.params.id, function (err, loan) {
    if (err) { return handleError(res, err); }
    if(!loan) { return res.status(404).send('Not Found'); }
    var updated = _.merge(loan, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(loan);
    });
  });
};

// Deletes a loan from the DB.
exports.destroy = function(req, res) {
  Loan.findById(req.params.id, function (err, loan) {
    if(err) { return handleError(res, err); }
    if(!loan) { return res.status(404).send('Not Found'); }
    loan.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}