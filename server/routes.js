/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/banktransactions', require('./api/banktransaction'));
  app.use('/api/investmentaccounts', require('./api/investmentaccount'));
  app.use('/api/basicaccounts', require('./api/basicaccount'));
  app.use('/api/loans', require('./api/loan'));
  app.use('/api/accounts', require('./api/account'));
  app.use('/api/clients', require('./api/client'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
