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
    
}

let tina = new Employee2(2, "Tina", "Pune");
console.log(tina);