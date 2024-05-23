"use strict";
// challenge.ts
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
