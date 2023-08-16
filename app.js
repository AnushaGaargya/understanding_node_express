const express = require('express')
const app = express()
// const router = express.Router()
app.set('view engine', 'ejs')



app.get('/user', (req,res) => {
    console.log("HI")
    console.log(req.headers)
    // res.set({
    //     'content-type': 'text/plain',
    //     'warning': 'encoding will be addded by default'
    // })
    var name = 'Anusha'
    res.render('hello', {name: name
       
    })
    // console.log(res.headersSent)
    // console.log(res.body)
    // console.log(req.headers)
})

app.get('/error', (req,res) => {
    
    res.status(500)
    res.send('error')
})


app.listen(3000)
