const Stock = require('../models/stock')

module.exports = {

    findAll(req, res) {
        Stock
            .find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error.'
                })
            })
    },

    create(req, res) {
        Stock
            .create({
                item: req.body.item,
                stock: req.body.stock,
                customer: req.body.customer,
                customerQuantity: req.body.customerQuantity,
                salesDate: req.body.salesDate,
                supplier: req.body.supplier,
                supplierQuantity: req.body.supplierQuantity,
                purchaseDate: req.body.purchaseDate
            })
            .then(created => {
                res.status(201).json(created)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error'
                })
            })
    }
}