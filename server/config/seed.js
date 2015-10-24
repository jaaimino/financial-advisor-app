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
Account.remove({}, function(){});



var firstNames = ["James", "John", "Jimmy", "Gerald", "Susan", "Charlotte", "Joseph", "Jacqueline", "Anne"];
var lastNames = ["Waverly", "Smith", "Ford", "Fields", "Smithers", "Vanderbilt"];

var randomFirstName = firstNames[Math.floor(Math.random()*firstNames.length)];
var randomLastName = lastNames[Math.floor(Math.random()*lastNames.length)];

var user = new User({
    provider: 'local',
    name: randomFirstName+" "+randomLastName,
    email: 'test@test.com',
    password: 'test'
});
user.save();

//Generate a bunch of random people to add as clients
for(var i=0;i<8;i++){
    var randomFirstName = firstNames[Math.floor(Math.random()*firstNames.length)];
    var randomLastName = lastNames[Math.floor(Math.random()*lastNames.length)];
    var someName = randomFirstName + " " + randomLastName;
    var someEmail = randomFirstName + randomLastName + "@gmail.com";
    someEmail = someEmail.toLowerCase();
    var someClient = new Client({
        advisor: user._id,
        description: 'I\'m a randomly generated client!',
        name: someName,
        email: someEmail
    });
    someClient.save();
    //console.log(someClient);
}

var johndoe = new Client({
    name: 'John Doe', 
    email: 'johndoe@gmail.com',
    description: 'Oldest and most important client. Do not lose!', 
    advisor: user._id
});
johndoe.save();

var janedoe = new Client({name: 'Jane Doe', 
    email: 'janedoe@gmail.com', 
    advisor: user._id
});
janedoe.save();

var jamesdoe = new Client({name: 'James Doe', 
    email: 'jamesdoe@gmail.com', 
    advisor: user._id
});
jamesdoe.save();

var susandoe = new Client({name: 'Susan Doe', 
    email: 'susandoe@gmail.com', 
    advisor: user._id
});
susandoe.save();

var johndoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    client: johndoe._id
});
johndoeaccount1.save();

var admin = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
admin.save();

