class Employee {
    id!: number;
    name!: string;
    address!: string;
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "SHT";

console.log(john);