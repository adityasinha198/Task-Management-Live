const express = require('express')

const router = express.Router()

const admincontroller = require('../controllers/admincontroller')

router.post('/signup',(req,res,next)=>{
    console.log("Nice")

    admincontroller.adminsignup(req)
    
    .then(resp=>{
        res.send("Hello")
    })

    .catch(err=>{
        res.status(500).send(err)
    })
})


module.exports = router


