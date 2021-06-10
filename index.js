const express = require('express')
const PORT = process.env.PORT || 80
const nodemailer = require('nodemailer')
const controller = require('./controllers/index')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))



app.get('/', (req,res) => {
    res.render('index',{repeat:0})
})

app.post('/', (req,res) => {
    controller._spam(req,res,nodemailer)
})



app.listen(PORT,() => {console.log(`Server Running at Port: ${PORT}`)})