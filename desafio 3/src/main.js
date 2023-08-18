/*import http, { request } from 'http'

const PORT = 4000
const server = http.createServer((request, response) => {
    response.end("Creando servidor")
})

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})*/

import express, { response } from 'express'
import { request } from 'http'

const PORT = 4000
const app = express()

const prods = [
    { id: 1, nombre: "Lapicera", categoria: "Libreria" },
    { id: 2, nombre: "Regla", categoria: "Libreria" },
    { id: 3, nombre: "Goma", categoria: "Libreria" },
]

app.get('/', (req,res) => {
    res.send("Creando express")
})

app.get('/products', (req,res) => {
    console.log(req.query)
    const {categoria} = req.query
    if (categoria) {
        const products = prods.filter(prod => prod.categoria === categoria)
        res.send(products)
    }
    res.send(prods)    
})

app.get('/products:id', (req,res) => {
    console.log(req.params.id)
    const prod = prods.find(prod => prod.id === parseInt(req.params.id))
    if(prod)
       res.send(prod)
    else
       res,send("Producto no encontrado")   
    res.send("Producto")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

