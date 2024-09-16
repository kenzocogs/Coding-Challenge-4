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
   let check = item.quantity <= item.lowStockLevel ? "Low in Stock":"In Stock"
     return`Name: ${item.name},
     Price: $${item.price}, 
     Quantity: ${item.quantity}, 
     Stock Level: ${item.name} is ${check}`
     
};

console.log(displayProductDetails(inventory[1]))
// Desired Ouput: WirelessCharger is Low Stock

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock (item, unitsSold) {
    item.quantity -= unitsSold
    
    if (item.quantity <= 0)  { 
        return `${item.name} is out of stock`;
    } else if ((0 <= item.quantity) && (item.quantity <= item.lowStockLevel)) {
        return `${item.name} is low in stock`;
    } else {
        return `${item.name} is in stock`;
    }
    
};

console.log (updateStock(inventory[2], 15))
// Desired Output: mechKeyboard is out of stock

console.log (updateStock(inventory[0], 2))
// Desired Output: smartPens is in stock
// ^ Multiple logs are tested here to verify that the if statement is working correctly. 

// Task 4: Create a Function to Check Low Stock Products

inventory.forEach (checkLowStock); // Iterating over the array using forEach

function checkLowStock (item) {
let check = item.quantity <= item.lowStockLevel ? console.log(item.name): ""; 

return check 

};

// Desired Output:
// WirelessCharger
// mechKeyboard
// wallLights

// NOTE: at this point, several modifications were also made to Task 3's code to 
// ensure that it was correct.

// Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue (inventory) {
    return inventory.reduce ((totalValue, item) => {
        return totalValue + (item.price * item.quantity)
    }, 0);
    
}

console.log (`The total inventory's value is $${calculateInventoryValue(inventory)}.`)
// Desired Output: The total inventory's value is $3785

// Task 6: Create a Function to Process a Sale

function processSale (name, unitsSold) {

    let item = inventory.find (item => item.name === name);

    return item ? updateStock(item, unitsSold) : 'ERROR: PRODUCT NOT FOUND IN INVENTORY';

}

console.log (processSale('graphicsCard', 4))
// Desired Output: graphicsCard is low in stock

console.log (processSale('GamingMouse', 1))
// Desired Output: ERROR: PRODUCT NOT FOUND IN INVENTORY
// ^ This output verifies the if statement's functionality, as GamingMouse is not a listed product
// in the inventory array.





