const express = require('express')
const app = express()
// const router = express.Router()


app.get('/user', (req,res) => {
    console.log("HI")
    res.send("<h1>Hello</h1>")
})


app.listen(3000)
