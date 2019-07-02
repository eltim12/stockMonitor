const mongoose = require('mongoose')
const Schema = mongoose.Schema

let stockSchema = new Schema({
    item: {
        type: String
    },
    stock: {
        type: Number
    },
    customer: {
        type: String
    },
    customerQuantity: {
        type: Number
    },
    salesDate: {
        type: String
    },
    supplier: {
        type: String
    },
    supplierQuantity: {
        type: Number
    },
    purchaseDate: {
        type: String
    }
})

const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock