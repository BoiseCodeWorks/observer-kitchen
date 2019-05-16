import OrderService from "./OrderService.js";

//PRIVATE

let _orderService = new OrderService();

function _drawOrders() {
    console.count('running _drawOrders')
    let orders = _orderService.Orders
    let template = ''
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        if (order.ready) {
            template += order.readyTemplate
        } else {
            template += order.cookingTemplate
        }
    }
    document.getElementById('orders').innerHTML = template
}

function _logOrder() {
    console.log('Order Created')
}

//PUBLIC
export default class OrderController {
    constructor() {
        //register all subscribers
        _orderService.addSubscriber('orders', _drawOrders)
        _orderService.addSubscriber('orders', _logOrder)
    }


    addOrder(event) {
        event.preventDefault() // stop the page from reloading
        console.count('AddOrder Controller')
        let form = event.target
        let rawOrder = {
            description: form.description.value,
            table: form.table.value
        }
        _orderService.addOrder(rawOrder)
    }
}