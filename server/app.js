const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyparser = require('body-parser')


const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())


app.use('/',(req,res,next)=>{
    res.send("Hello")
})

const adminroutes = require('./routes/admin')

app.use('/admin',adminroutes)

module.exports = app

