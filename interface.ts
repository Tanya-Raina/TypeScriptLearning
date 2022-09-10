//interfaces help us to define the structure of an object

// interfaces don't exist in javascript!

// so make sure to use classes instead of interfaces

interface Address {
    street: string;
    city: string;
    state: string;
    pincode: number;
}


//what if we don't want to specify all the properties of the interface

export interface User {
    name: string;
    age?: number; // make it optional using ?
    id: number;
    email: string;
}

let user: User = {name: "Tanya", id: 1, email: "tanya@gmail.com"};

// we can also extend and implement interfaces

interface Employees extends User { // has all the properties of User
    salary: number;
}

let employee: Employees = {name: "Ash", id: 2, email: "ash@gmail.com", salary: 10000};

// we can also have method definitions

export interface Login {
    Login(): User; // method name with return type
}

// implemented in normal-class.ts
// we export the interface and use it there