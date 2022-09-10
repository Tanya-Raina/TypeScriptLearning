"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// when we put ctrl+space it will show us the options
// named export
class Employee {
    Login() {
        return { name: "Tina", id: 1, email: "" };
    }
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "SHT";
console.log(john);
