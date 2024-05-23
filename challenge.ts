// challenge.ts

interface Users {
    name: string;
    age?: number;
    birthday?: string;
};

const prettyPrintWilder = (users : Users[]) : string[] => {
   return users.map((user) => {
      return `${user.name} is ${user.age} years old`;
    });
  };
  
  const wilders : Users[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);

  console.log(prettyPrintWilder(wilders))


  // POO en Typescript 1 - Procédural vs Objet, classes, instances

  class Person{
    name: string;
    age: number;
    constructor(name: string, age: number) {
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

  import assert from "assert";

  class BankCustomer {
    private name: string;
    private code: string;
    constructor(name: string, code: string) {
      this.name = name;
      this.code = code;
    }

    getName() {
      return this.name;
    }

    verifyPinInput(code: string) {
      assert.equal(code, this.code);
    }


  }


  const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));