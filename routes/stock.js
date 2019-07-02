const router = require("express").Router()
const stockController = require('../controllers/stockController')

router.get('/', stockController.findAll)

router.post('/', stockController.create)

module.exports = router