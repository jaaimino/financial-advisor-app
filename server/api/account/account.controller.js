'use strict';

var _ = require('lodash');
var Account = require('./account.model');

// Get list of accounts
exports.index = function(req, res) {
  Account.find(function (err, accounts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(accounts);
  });
};

// Get a single account
exports.show = function(req, res) {
  Account.findById(req.params.id, function (err, account) {
    if(err) { return handleError(res, err); }
    if(!account) { return res.status(404).send('Not Found'); }
    return res.json(account);
  });
};

// Creates a new account in the DB.
exports.create = function(req, res) {
  Account.create(req.body, function(err, account) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(account);
  });
};

// Updates an existing account in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Account.findById(req.params.id, function (err, account) {
    if (err) { return handleError(res, err); }
    if(!account) { return res.status(404).send('Not Found'); }
    var updated = _.merge(account, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(account);
    });
  });
};

// Deletes a account from the DB.
exports.destroy = function(req, res) {
  Account.findById(req.params.id, function (err, account) {
    if(err) { return handleError(res, err); }
    if(!account) { return res.status(404).send('Not Found'); }
    account.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}