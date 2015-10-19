/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Client = require('../api/client/client.model');
var Account = require('../api/account/account.model');

User.remove({}, function(){});
Client.remove({}, function(){});

var user = new User({
    provider: 'local',
    name: 'Test McTest',
    email: 'test@test.com',
    password: 'test'
});
user.save();

var johndoe = new Client({name: 'John Doe', email: 'johndoe@gmail.com', advisor: user._id});
johndoe.save();
var janedoe = new Client({name: 'Jane Doe', email: 'janedoe@gmail.com', advisor: user._id});
janedoe.save();
var jamesdoe = new Client({name: 'James Doe', email: 'jamesdoe@gmail.com', advisor: user._id});
jamesdoe.save();
var susandoe = new Client({name: 'Susan Doe', email: 'susandoe@gmail.com', advisor: user._id});
susandoe.save();

var johndoeaccount1 = new Account({
    name: 'My Super Cool Account', 
    client: johndoe._id, 
    account_number: 123
});
johndoeaccount1.save();
var johndoeaccount2 = new Account({
    name: 'My Slightly Less Cool Account', 
    client: johndoe._id,
    account_number: 124
});
johndoeaccount2.save();

var admin = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
admin.save();

