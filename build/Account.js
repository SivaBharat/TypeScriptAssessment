"use strict";
class account {
    constructor(id, name, withdraw, account_type) {
        this.id = id;
        this.name = name;
        this.withdraw = withdraw;
        this.account_type = account_type;
    }
    balance(balance) {
        console.log('Account num is ' + this.id);
        console.log('Customer name is ' + this.name);
        console.log('Your account type is ' + this.account_type);
        var bal = (balance - this.withdraw);
        if (bal > 0) {
            console.log('your balance amount is ' + bal);
        }
        else {
            console.log('Your balance amount is lesser than your withdraw amount');
        }
    }
}
let b = new account(101, 'siva', 2000, 'savings');
b.balance(45000);
