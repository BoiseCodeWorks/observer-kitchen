export default class Order {
    constructor(data) {
        console.count('Creating or Copying New Order')
        this.id = data.id || Math.floor(Math.random() * 100000)
        this.cookTime = data.cookTime || Math.floor(Math.random() * 4) + 1
        this.ready = data.ready || false
        this.description = data.description
        this.table = data.table
    }

    get readyTemplate() {
        return `
    <li>${this.description}<button onclick="app.controllers.orderController.serveFood(${this.id})">Serve Food</button></li>
        `
    }

    get cookingTemplate() {
        return `
        <li>${this.description} <i class="fas fa-spinner fa-pulse"></i></li>
        `
    }
}