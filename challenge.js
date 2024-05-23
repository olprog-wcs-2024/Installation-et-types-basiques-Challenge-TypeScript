// challenge.ts
;
var prettyPrintWilder = function (users) {
    return users.map(function (user) {
        return "".concat(user.name, " is ").concat(user.age, " years old");
    });
};
var wilders = [];
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990" };
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
console.log(prettyPrintWilder(wilders));
// POO en Typescript 1 - Procédural vs Objet, classes, instances
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("My name is ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I'm ".concat(this.age, " years old"));
    };
    return Person;
}());
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 35);
person1.tellMyName();
person1.tellMyAge();
person2.tellMyName();
person2.tellMyAge();
