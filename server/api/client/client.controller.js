'use strict';

var _ = require('lodash');
var Client = require('./client.model');
var Account = require('../account/account.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

// Get list of clients
exports.index = function(req, res) {
  Client.find(function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(clients);
  });
};

// Get clients for an advisor
exports.myclients = function(req, res) {
  var userId = req.user._id;
  Client.find({advisor: userId}, function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(clients);
  });
};

// Get single client for an advisor
exports.myclient = function(req, res) {
  var userId = req.user._id;
  Client.findOne({_id: req.params.id, advisor: userId}, function (err, clients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(clients);
  });
};

// Get accounts for single client for an advisor
exports.clientaccounts = function(req, res) {
  var userId = req.user._id;
  Client.findOne({advisor: userId}, function (err, client) {
    Account.find({client: client._id}, function(err, accounts){
      if(err) { return handleError(res, err); }
      return res.status(200).json(accounts);
    });
  });
};

// Get a single client
exports.show = function(req, res) {
  Client.findById(req.params.id, function (err, client) {
    if(err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    return res.json(client);
  });
};

// Creates a new client in the DB.
exports.create = function(req, res) {
  Client.create(req.body, function(err, client) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(client);
  });
};

// Updates an existing client in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Client.findById(req.params.id, function (err, client) {
    if (err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    var updated = _.merge(client, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(client);
    });
  });
};

// Deletes a client from the DB.
exports.destroy = function(req, res) {
  Client.findById(req.params.id, function (err, client) {
    if(err) { return handleError(res, err); }
    if(!client) { return res.status(404).send('Not Found'); }
    client.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}