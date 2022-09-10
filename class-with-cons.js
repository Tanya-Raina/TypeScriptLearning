"use strict";
// class helps in handling the business logic
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee2_id;
class Employee2 {
    // can only have one constructor - either default or parameterized
    constructor(id, name, address) {
        // visibility modifiers
        // public - by default
        // private - only within the class - we can use private keyword or # in front of the variable
        // protected - only within the class and its child classes
        _Employee2_id.set(this, void 0); // prefer using # for private
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
        this.name = name;
        this.address = address;
    }
    static getCount() {
        return 35;
    }
    getEmpID() {
        return __classPrivateFieldGet(this, _Employee2_id, "f");
    }
    setEmpID(id) {
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
    }
    //methods
    getNameWithAddress() {
        // return this.name + " " + this.address;
        // this concatenation can have bugs
        return `${this.name} stays at ${this.address}`; //string literal
    }
}
_Employee2_id = new WeakMap();
Employee2.count = 50; // static member can be accessed using class name
let tina = new Employee2(2, "Tina", "Pune");
console.log(tina);
// when trying to access the private variable, we get an error
// console.log(tina.#id);
console.log(Employee2.count);
console.log(Employee2.getCount());
// all the objects share only one copy of static members
tina.setEmpID(21);
console.log(tina.getEmpID());
// ------------------ Inheritance ------------------
// protected used when we want to inherit the class
class Manager extends Employee2 {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `Manager Private Name stays at ${this.address}`;
    }
}
let mike = new Manager(3, "Mike", "Mumbai");
console.log(mike.getNameWithAddress());
