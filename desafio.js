class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)

        if (prod) {
            console.log("Producto ya encontrado")
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)

        if(prod) {
            console.log(prod)
        } else {
            console.log("Producto no encontrado")
        }
    }
}

class Product {
    constructor(title, description, price, stock, thumbnail) {
        this.title = title
        this.description = description
        this.price = price
        this.stock = stock
        this.thumbnail = thumbnail
        this.id = Product.incrementarID()
    }

    static incrementarID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1

        }
        return this.idIncrement
        
    }

}
const producto1 = new Product("Lapicera", "Azul", "150", "AA00AA", "50", [])
const producto2 = new Product("Regla", "30cm", "100", "AA00AB", "30", [])
const producto3 = new Product("Goma", "Blanca", "120", "AA00AC", "40", [])

const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)

productManager.getProducts()

productManager.getProductById()