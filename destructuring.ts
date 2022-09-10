export interface User {
    name: string;
    age?: number; // make it optional using ?
    id: number;
    email: string;
}

let user: User = {name: "Tanya", id: 1, email: "tanya@gmail.com"};

// accessing each property
user.name;
user.email;

// we can do it using object destructuring
let {name, email} = user;

// in case we don't want to use the same name as the property name
let {name: myName, email: myEmail} = user;


// array destructuring

let users: User[] = [
    {name: "Tanya", id: 1, email: ""},
    {name: "Tina", id: 2, email: ""},
    {name: "Ash", id: 3, email: ""},
    {name: "Mike", id: 4, email: ""},
    {name: "John", id: 5, email: ""},
];

let [tanya, tina, ...restUsers] = users;

console.log(restUsers); // array of all the remaining users

let result = restUsers.filter(user => user.id > 3);
console.log(result);