$().ready(
     //() => {console.log("jQuery is ready!")}, //test to show you ae connected

     $("#addBtn").on("click", () => {
        add();
     }),
);

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
];

const loaded = () => {
    display (customers);
}

const display = (customers) => {

    const tbody = document.getElementById("custs");

    tbody.innerHTML = "";
    for (let customer of customers) {
        customer.log();
        let tr = "<tr>";
        tr +=`<td>${customer.id}</td>`;
        tr +=`<td>${customer.name}</td>`;
        tr +=`<td>${customer.sales}</td>`;
        tr += "</tr>"
        tbody.innerHTML += tr;
    }
}
    const add = () => {
        let inpIdCtrl = document.getElementById("pId");
        let inpNameCtrl = document.getElementById("pName");
        let inpSalesCtrl = document.getElementById("pSales");
        let cust = new Customer();
        cust.id = +inpIdCtrl.value;
        cust.name = inpNameCtrl.value;
        cust.sales = +inpSalesCtrl.value;
        customers.push(cust);
        display(customers);

    }

