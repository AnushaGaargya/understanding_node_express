const express = require('express')
const app = express()
// const router = express.Router()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

const del_btns = {}

app.get('/user', (req,res) => {
    console.log("HI")
    res.render('hello', {
        del_btns : del_btns
    })
})


//getting form data from req body and passing that info as context to the view
app.post('/user', (req,res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    del_btns[req.body.id] = req.body.name
    console.log(del_btns)
    res.redirect('/user')
    // res.render('welcome', {
    //     name: req.body.name
    // })

})

app.post('/deleteprocess', (req,res) => {
    
    console.log("HURRAY! WE ARE IN DELETE PROCESS")
    console.log(req.body.delete)
    const del_id = req.body.delete
    console.log(del_btns)
    console.log(del_btns[del_id])
    delete del_btns[del_id]
    res.redirect('/user')
})



app.listen(3000)
