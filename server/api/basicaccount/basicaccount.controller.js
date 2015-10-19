'use strict';

var _ = require('lodash');
var BasicAccount = require('./basicaccount.model');

// Get list of basicaccounts
exports.index = function(req, res) {
  BasicAccount.find(function (err, basicaccounts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(basicaccounts);
  });
};

// Get a single basicaccount
exports.show = function(req, res) {
  BasicAccount.findById(req.params.id, function (err, basicaccount) {
    if(err) { return handleError(res, err); }
    if(!basicaccount) { return res.status(404).send('Not Found'); }
    return res.json(basicaccount);
  });
};

// Creates a new basicaccount in the DB.
exports.create = function(req, res) {
  BasicAccount.create(req.body, function(err, basicaccount) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(basicaccount);
  });
};

// Updates an existing basicaccount in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BasicAccount.findById(req.params.id, function (err, basicaccount) {
    if (err) { return handleError(res, err); }
    if(!basicaccount) { return res.status(404).send('Not Found'); }
    var updated = _.merge(basicaccount, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(basicaccount);
    });
  });
};

// Deletes a basicaccount from the DB.
exports.destroy = function(req, res) {
  BasicAccount.findById(req.params.id, function (err, basicaccount) {
    if(err) { return handleError(res, err); }
    if(!basicaccount) { return res.status(404).send('Not Found'); }
    basicaccount.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}