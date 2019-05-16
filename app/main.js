import OrderController from "./components/OrderController.js";


class App {
    constructor() {
        this.controllers = {
            orderController: new OrderController()
        }
    }
}

window['app'] = new App();