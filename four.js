const products = [
    { name: "Laptop", price: 120000},
    { name: "Mobile", price: 70000},
    { name: "Laptop Bag", price: 20000}, 
    {name: "Watch", price: 20000},
    {name: "Mobile Charger", price: 1500},
];

function findm(products) {
    let m1 = products[0].price
    let m2 = products[0].price
    let prod1 = products[0].name
    let prod2 = products[0].name

    for(let i=0;i<products.length;i++){
        if(products[i].price > m1){
            m1 = products[i].price
            prod1 = products[i].name
        }


        if(products[i].price < m2){
            m2 = products[i].price
            prod2 = products[i].name
        }
    }

    console.log(`The product with min ammount is : ${prod1} of price ${m1}`);
    console.log(`The product with min ammount is : ${prod2} of price ${m2}`);
}

findm(products)