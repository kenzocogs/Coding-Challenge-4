// Task 1: Create an Inventory Array of Product Objects
let inventory = [
{
    name: 'smartPens',
    price: 70,
    quantity: 20,
    lowStockLevel: 5,
},

{
    name: 'WirelessCharger',
    price: 55,
    quantity: 3,
    lowStockLevel: 8 ,
},

{
    name: 'mechKeyboard',
    price: 195,
    quantity: 15,
    lowStockLevel: 10 ,
},

{
    name: 'wallLights',
    price: 120,
    quantity: 1,
    lowStockLevel: 4,
},

{
    name: 'graphicsCard',
    price: 350,
    quantity: 6,
    lowStockLevel: 2,
},

];


// Task 2: Create a Function to Display Product Details

function displayProductDetails (item) {
   let check = item.quantity <= item.lowStockLevel ? "Low Stock":"In Stock"
     return `${item.name} is ${check}`
     
}

console.log(displayProductDetails(inventory[1]))
// Desired Ouput: WirelessCharger is Low Stock

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock (item, unitsSold) {
    let afterSales = item.quantity - unitsSold

if (afterSales <= 0)  {
    return `${item.name} is out of stock`;
} else if ((0 <= afterSales) && (afterSales <= item.lowStockLevel)) {
    return `${item.name} is low in stock`;
} else {
    return `${item.name} is in stock`;
}

}

console.log (updateStock(inventory[2], 15))
// Desired Output: mechKeyboard is out of stock


