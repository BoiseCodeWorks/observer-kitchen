import Order from "../models/Order.js";

//Private
let _state = { //actual data goes in here
    orders: []
}

let _subscribers = { // add listeners/observers/subscribers to run when data changes
    orders: []
}

function _setState(propName, data) {
    console.count(`setting ${propName} in the state`)
    _state[propName] = data // add the data to the state
    _subscribers[propName].forEach(fn => {
        console.count('Running' + fn.name)
        fn()
    }); //run every subscriber function that is watching that data
}

function _cookFood(order) {
    console.count('Cooking food')
    setTimeout(() => {
        console.count('Food ready')
        order.ready = true;
        _setState('orders', _state.orders)
    }, order.cookTime * 1000)
}

//Public
export default class OrderService {
    get Orders() {
        return _state.orders.map(o => new Order(o)) //makes a copy of all orders .... => is the same as function(o){ new Order(o)}
    }


    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn) //adds the subscriber function to the array based on the property it is watching
    }

    addOrder(rawData) {
        console.count('AddOrder Service')
        let newOrder = new Order(rawData)
        _state.orders.push(newOrder)
        _setState('orders', _state.orders)
        _cookFood(newOrder)
    }
}

