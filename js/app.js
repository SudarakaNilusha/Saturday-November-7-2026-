console.log("Hello, World!");

class customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }   

}

let customer1 = new customer("John Doe", 30, "123 Main St");

console.log(customer1.name); // Output: John Doe

