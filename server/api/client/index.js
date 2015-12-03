'use strict';

var express = require('express');
var controller = require('./client.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/myclients', auth.isAuthenticated(), controller.myclients);
router.get('/myclients/:id', auth.isAuthenticated(), controller.myclient);
router.delete('/myclients/:id', auth.isAuthenticated(), controller.deletemyclient);
router.post('/myclients/', auth.isAuthenticated(), controller.addmyclient);
router.get('/myclients/:id/accounts', auth.isAuthenticated(), controller.clientaccounts );
router.post('/myclients/:id/accounts', auth.isAuthenticated(), controller.addclientaccount );
router.get('/myclients/:id/accounts/refresh', auth.isAuthenticated(), controller.clientaccountsrefresh );
router.get('/myclients/:id/account/:accid', auth.isAuthenticated(), controller.clientaccount);
router.delete('/myclients/:id/account/:accid', auth.isAuthenticated(), controller.deleteclientaccount);
router.get('/myclients/:id/account/:accid/refresh', auth.isAuthenticated(), controller.clientaccountrefresh);
router.get('/myclients/:id/account/:accid/subaccounts', auth.isAuthenticated(), controller.clientaccount);
router.get('/myclients/:id/account/:accid/subaccount/:subid', auth.isAuthenticated(), controller.clientaccountsubaccount);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
