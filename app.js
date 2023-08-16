const express = require('express')
const app = express()
// const router = express.Router()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));



app.get('/user', (req,res) => {
    console.log("HI")
    res.render('hello')
})


//getting form data from req body and passing that info as context to the view
app.post('/user', (req,res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    res.render('welcome', {
        name: req.body.name
    })

})


app.listen(3000)
