require("dotenv").config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const mongoose = require("mongoose")
mongoose.set("useFindAndModify", false)

// mongoose.connect(`mongodb://localhost/db_name`, { useNewUrlParser: true })
mongoose.connect(`mongodb+srv://${process.env.ATLAST_NAME}:${process.env.ATLAST_PW}@cluster0-sfchz.gcp.mongodb.net/stockManager_codeAnatomy01?retryWrites=true`, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/user')
const stockRoutes = require('./routes/stock')

app.use('/users', userRoutes)
app.use('/stocks', stockRoutes)

app.listen(port, () => {
    console.log("listening on port" + port)
})
