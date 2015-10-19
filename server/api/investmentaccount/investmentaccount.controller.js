'use strict';

var _ = require('lodash');
var InvestmentAccount = require('./investmentaccount.model');

// Get list of investmentaccounts
exports.index = function(req, res) {
  InvestmentAccount.find(function (err, investmentaccounts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(investmentaccounts);
  });
};

// Get a single investmentaccount
exports.show = function(req, res) {
  InvestmentAccount.findById(req.params.id, function (err, investmentaccount) {
    if(err) { return handleError(res, err); }
    if(!investmentaccount) { return res.status(404).send('Not Found'); }
    return res.json(investmentaccount);
  });
};

// Creates a new investmentaccount in the DB.
exports.create = function(req, res) {
  InvestmentAccount.create(req.body, function(err, investmentaccount) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(investmentaccount);
  });
};

// Updates an existing investmentaccount in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  InvestmentAccount.findById(req.params.id, function (err, investmentaccount) {
    if (err) { return handleError(res, err); }
    if(!investmentaccount) { return res.status(404).send('Not Found'); }
    var updated = _.merge(investmentaccount, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(investmentaccount);
    });
  });
};

// Deletes a investmentaccount from the DB.
exports.destroy = function(req, res) {
  InvestmentAccount.findById(req.params.id, function (err, investmentaccount) {
    if(err) { return handleError(res, err); }
    if(!investmentaccount) { return res.status(404).send('Not Found'); }
    investmentaccount.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}