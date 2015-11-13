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

var johndoebasicaccount1 = new BasicAccount({
    name: 'My Checking',
    account_number: 123,
    account: johndoeaccount1._id
});
johndoebasicaccount1.save();

var johndoebasicaccount1transaction1 = new BankTransaction({
    account: johndoeaccount1._id,
    description: '17 Basketballs',
    amount: 114,
    positive: false,
    added: Date.now,
    merchant_name: 'Walmart',
    merchant_category: 'Sports'
});
johndoebasicaccount1transaction1.save();

var johndoebasicaccount1transaction2 = new BankTransaction({
    account: johndoeaccount1._id,
    description: '46 Watermelons',
    amount: 400,
    positive: false,
    added: Date.now,
    merchant_name: 'Shop Rite',
    merchant_category: 'Groceries'
});
johndoebasicaccount1transaction2.save();

var johndoebasicaccount2 = new BasicAccount({
    name: 'My Other Checking',
    account_number: 113,
    account: johndoeaccount1._id
});
johndoebasicaccount2.save();

var johndoeinvestmentaccount1 = new InvestmentAccount({
    name: 'My Investment Account',
    account_number: 1337,
    account: johndoeaccount1._id
});
johndoeinvestmentaccount1.save();

var johndoeloan1 = new Loan({
    name: 'My Super Cool Loan',
    account_number: 1337,
    balance: 1337,
    account: johndoeaccount1._id
});
johndoeloan1.save();

var admin = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });
admin.save();

