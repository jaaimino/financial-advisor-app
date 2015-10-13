var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/mydb');

var UserAccount = new Schema({
    Username       : { type: String, required: true, lowercase: true, trim: true, index: { unique: true } },
    Password        : { type: String, required: true },
    date_created    : { type: Date, required: true, default: Date.now },
    email           : { type: String, required: false, lowercase: true, trim: true, index: { unique: true }},
    First_MF_Q      : { type: String, required: false},
    First_MF_A      : { type: String, required: false},
    Second_MF_Q     : { type: String, required: false},
    Second_MF_A     : { type: String, required: false},
    is_active       : { type: Boolean, required: true, default: true},
    Has_Redirects   : { type: Boolean, required: true, default: false}
});

var Basic_Accounts = new Schema({
    Userid          :{type:String, required: true, index: true},
    UserAccount_Username : { type: String, required: true, lowercase: true, trim: true, index: true },
    Account_Name    : { type: String, required: true },
    Account_Number  : { type: String, required: true },
    Description     : { type: String, required: false },
    Available_Balance : { type: Double, required: false },
    Total_Balance   : { type: Double, required: false },
    date_created    : { type: Date, required: true  },
    Account_Type    : { type: String, required: false }
});
var Loans = new Schema({
    UserAccount_Username : { type: String, required: true, lowercase: true, trim: true, index: { unique: true } },
    Account_Name    : { type: String, required: true },
    Account_Number  : { type: String, required: true },
    Description     : { type: String, required: false },
    Balance         : { type: Double, required: false },
    date_created    : { type: Date, required: true},
    Account_Type    : { type: String, required: false }
});
var Investment_Accounts = new Schema({
    UserAccount_Username : { type: String, required: true, lowercase: true, trim: true, index: { unique: true } },
    Account_Name    : { type: String, required: true },
    Account_Number  : { type: String, required: true },
    Description     : { type: String, required: false },
    Balance         : { type: Double, required: false },
    date_created    : { type: Date, required: true},
    Account_Type    : { type: String, required: false }
});
var Bank_Transactions = new Schema({
    UserAccount_Username : { type: String, required: true, lowercase: true, trim: true, index: { unique: true } },
    Acct_Obj_ID          : { type: String, required: true },
    Time    : { type: Date, required: true  },
    currency_codes  : { type: String, required: true },
    Description     : { type: String, required: false },
    Amount         : { type: Double, required: false },
    date_created    : { type: Date, required: true  },
    Merchant_Name    : { type: String, required: false },
    Merchant_Category    : { type: String, required: false }
});
