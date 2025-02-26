const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

var cashInRegister = 100
const orderQueue = []
var nextOrderId = 0

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */
function addNewPizza(pizza) {
    menu.push(pizza)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder(pizza) {
    for (let i = 0; i < menu.length; i++) {
        console.log(pizza)
        if (menu[i].name == pizza) {
            nextOrderId++
            cashInRegister += menu[i].price
            order = { id_: nextOrderId, pizza: pizza, status: "ordered" }
            orderQueue.push(order)
            return order
        }
    }
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(id_){
    for(let i = 0;i<orderQueue.length;i++){
        if (orderQueue[i].id_ === id_ ){
            orderQueue[i].status = 'Completed'
            return orderQueue[i]
        }
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

console.log("Menu:", menu)
console.log("Order queue:", orderQueue)

placeOrder("Chicken Bacon Ranch")
completeOrder("1")
console.log("Menu:", menu)

// console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)