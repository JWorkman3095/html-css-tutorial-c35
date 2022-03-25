class Customer {
    id;
    name;
    sales;

    constructor (id = 0, name = "", sales = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    } 

    log() {
        console.log(this.id, this.name, this.sales);
    }
}

let customers = [
    new Customer(1, "MAX", 1000),
    new Customer(2, "PG", 10000),
    new Customer(3, "TREE", 8900),
    new Customer(4, "Test")
]

for (let customer of customers) {
    customer.log();
}
