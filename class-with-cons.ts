// class helps in handling the business logic

class Employee2 {
    id: number;
    name: string;
    address: string;

    // can only have one constructor - either default or parameterized
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    //methods
    getNameWithAddress() {
        // return this.name + " " + this.address;
        // this concatenation can have bugs

        return `${this.name} stays at ${this.address}`; //string literal
    }
}

let tina = new Employee2(2, "Tina", "Pune");
console.log(tina);