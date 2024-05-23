"use strict";
// challenge.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
;
const prettyPrintWilder = (users) => {
    return users.map((user) => {
        return `${user.name} is ${user.age} years old`;
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
console.log(prettyPrintWilder(wilders));
// POO en Typescript 1 - Procédural vs Objet, classes, instances
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`My name is ${this.name}`);
    }
    tellMyAge() {
        console.log(`I'm ${this.age} years old`);
    }
}
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);
person1.tellMyName();
person1.tellMyAge();
person2.tellMyName();
person2.tellMyAge();
// POO en TS 2 - Encapsulation
const assert_1 = __importDefault(require("assert"));
class BankCustomer {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    getName() {
        return this.name;
    }
    verifyPinInput(code) {
        return this.code === code;
    }
}
const customer = new BankCustomer('John Doe', '3579');
assert_1.default.equal(typeof customer.getName, 'function');
assert_1.default.equal(typeof customer.verifyPinInput, 'function');
assert_1.default.equal(customer.getName(), 'John Doe');
assert_1.default.ok(customer.verifyPinInput('3579'));
