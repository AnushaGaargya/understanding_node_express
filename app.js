const express = require('express')
const app = express()
// const router = express.Router()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));



app.get('/user', (req,res) => {
    console.log("HI")
    res.render('hello')
})

app.post('/user', (req,res) => {
    console.log('request body')
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.email)
  
    res.redirect('/success')
})

app.get('/success', (req,res) => {
    res.send("Hey, WELCOME!!")
})

// app.get('/error', (req,res) => {
    
//     res.status(500)
//     res.send('error')
// })


app.listen(3000)
