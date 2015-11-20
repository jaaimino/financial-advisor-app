/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Client = require('../api/client/client.model');
var Account = require('../api/account/account.model');
var BasicAccount = require('../api/basicaccount/basicaccount.model');
var BankTransaction = require('../api/banktransaction/banktransaction.model');
var InvestmentAccount = require('../api/investmentaccount/investmentaccount.model');
var Loan = require('../api/loan/loan.model');

User.remove({}, function(){});
Client.remove({}, function(){});
Account.remove({}, function(){});

var firstNames = ["James", "John", "Jimmy", "Gerald", "Susan", "Charlotte", "Joseph", "Jacqueline", "Anne"];
var lastNames = ["Waverly", "Smith", "Ford", "Fields", "Smithers", "Vanderbilt"];

var randomFirstName = firstNames[Math.floor(Math.random()*firstNames.length)];
var randomLastName = lastNames[Math.floor(Math.random()*lastNames.length)];

/*
 * Users
 */
var user = new User({
    provider: 'local',
    name: randomFirstName+" "+randomLastName,
    email: 'test@test.com',
    password: 'test'
});
user.save();

var admin = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
admin.save();

/*
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
*/

/*
 * Allison Doe
 */
var allisondoe = new Client({
    name: 'Allison Doe',
    email: 'allisondoe@gmail.com',
    advisor: user._id
});
allisondoe.save();


var allisondoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    site: 'http://udel.emoneyadvisor.com/',
    username: 'Redirects',
    password: 'Redirects',
    client: allisondoe._id
});
allisondoeaccount1.save();

/*
 * John Doe
 */
var johndoe = new Client({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    description: 'Oldest and most important client. Do not lose!',
    advisor: user._id
});
johndoe.save();

var johndoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    site: 'http://udel.emoneyadvisor.com/',
    username: 'Test',
    password: 'Test',
    client: johndoe._id
});
johndoeaccount1.save();

/*
 * Jane Doe
 */
var janedoe = new Client({name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    advisor: user._id
});
janedoe.save();

var janedoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    site: 'http://udel.emoneyadvisor.com/',
    username: 'TwoMFCreds',
    password: 'TwoMFCreds',
    client: janedoe._id
});
janedoeaccount1.save();

/*
 * James Doe
 */
var jamesdoe = new Client({name: 'James Doe',
    email: 'jamesdoe@gmail.com',
    advisor: user._id
});
jamesdoe.save();

var jamesdoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    site: 'http://udel.emoneyadvisor.com/',
    username: 'OneMFCred',
    password: 'OneMFCred',
    client: jamesdoe._id
});
jamesdoeaccount1.save();

/*
 * Susan Doe
 */
var susandoe = new Client({name: 'Susan Doe',
    email: 'susandoe@gmail.com',
    advisor: user._id
});
susandoe.save();

var susandoeaccount1 = new Account({
    name: 'Fake Emoney Site ;)',
    description: 'My fake eMoney bank account for testing!',
    site: 'http://udel.emoneyadvisor.com/',
    username: 'Test2',
    password: 'Test2',
    client: susandoe._id
});
susandoeaccount1.save();

console.log("!--- Finished populating data ---!")
