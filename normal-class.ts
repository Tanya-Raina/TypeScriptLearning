import { Login, User } from './interface'; // give relative path, without extension
                                    // when we put ctrl+space it will show us the options
// named export

class Employee implements Login { // implements the interface
    id!: number;
    name!: string;
    address!: string;

    Login(): User { // giving error so import User too
        return {name: "Tina", id: 1, email: ""};
    }
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "SHT";

console.log(john);