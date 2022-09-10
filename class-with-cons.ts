// class helps in handling the business logic

class Employee2 {
    // visibility modifiers
    // public - by default
    // private - only within the class - we can use private keyword or # in front of the variable
    // protected - only within the class and its child classes

    #id: number; // prefer using # for private
    private name: string;
    protected address: string;

    static count: number = 50; // static member can be accessed using class name

    static getCount(): number {
        return 35;
    }

    // can only have one constructor - either default or parameterized
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getEmpID(): number { // since id is a private member, we need to use getter and setter methods to access it
        return this.#id;
    }

    setEmpID(id: number) {
        this.#id = id;
    }

    //methods
    getNameWithAddress(): string {
        // return this.name + " " + this.address;
        // this concatenation can have bugs

        return `${this.name} stays at ${this.address}`; //string literal
    }
}

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

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `Manager Private Name stays at ${this.address}`;
    }
}

let mike = new Manager(3, "Mike", "Mumbai");
console.log(mike.getNameWithAddress());
