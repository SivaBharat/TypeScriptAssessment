"use strict";
class Customer {
    constructor(name, age, contact, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
        this.contact = contact;
    }
}
class loan extends Customer {
    constructor(name, age, contact, adress, No, Type, Amount, Duration, Interest) {
        super(name, age, contact, adress);
        this.No = No;
        this.Type = Type;
        this.Amount = Amount;
        this.Duration = Duration;
        this.Interest = Interest;
    }
    AccessDetails() {
        console.log(this.name + this.age + this.contact + this.adress + this.No + this.Type + this.Amount + this.Duration + this.Interest);
    }
    IntrestCalculation() {
        console.log("Loan intrest amount :" + (this.Amount * this.Duration * this.Interest) / 100);
    }
    display() {
        console.log("customer Details:");
        this.AccessDetails();
        this.IntrestCalculation();
    }
}
let x = new loan("siva", 22, 7654433346, "siva,5-8", 101, "personal", 2000, 21, 3);
x.display();
