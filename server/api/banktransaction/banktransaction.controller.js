'use strict';

var _ = require('lodash');
var BankTransaction = require('./banktransaction.model');

// Get list of banktransactions
exports.index = function(req, res) {
  BankTransaction.find(function (err, banktransactions) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(banktransactions);
  });
};

// Get a single banktransaction
exports.show = function(req, res) {
  BankTransaction.findById(req.params.id, function (err, banktransaction) {
    if(err) { return handleError(res, err); }
    if(!banktransaction) { return res.status(404).send('Not Found'); }
    return res.json(banktransaction);
  });
};

// Creates a new banktransaction in the DB.
exports.create = function(req, res) {
  BankTransaction.create(req.body, function(err, banktransaction) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(banktransaction);
  });
};

// Updates an existing banktransaction in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BankTransaction.findById(req.params.id, function (err, banktransaction) {
    if (err) { return handleError(res, err); }
    if(!banktransaction) { return res.status(404).send('Not Found'); }
    var updated = _.merge(banktransaction, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(banktransaction);
    });
  });
};

// Deletes a banktransaction from the DB.
exports.destroy = function(req, res) {
  BankTransaction.findById(req.params.id, function (err, banktransaction) {
    if(err) { return handleError(res, err); }
    if(!banktransaction) { return res.status(404).send('Not Found'); }
    banktransaction.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}