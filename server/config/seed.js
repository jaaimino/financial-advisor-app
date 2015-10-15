/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Client = require('../api/client/client.model');

var johndoe = new Client({name: 'John Doe', email: 'johndoe@gmail.com'});
johndoe.save();
var janedoe = new Client({name: 'Jane Doe', email: 'janedoe@gmail.com'});
janedoe.save();
var jamesdoe = new Client({name: 'James Doe', email: 'jamesdoe@gmail.com'});
jamesdoe.save();
var susandoe = new Client({name: 'Susan Doe', email: 'susandoe@gmail.com'});
susandoe.save();
/*
Client.find({}).remove(function(){
});
*/

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    clients: [johndoe._id, janedoe._id, jamesdoe._id, susandoe._id]
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
