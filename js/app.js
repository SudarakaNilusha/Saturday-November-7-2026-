console.log("Hello, World!");

class Customer {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new Customer("Jane Smith", 28, {
    street: "456 Elm St",
    city: "Othertown",
    state: "NY",
    zip: "67890"
});

console.log(customer1);