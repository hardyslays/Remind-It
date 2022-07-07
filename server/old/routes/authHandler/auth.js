const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config()

// router.use((req,res,next) => {
//     console.log("Auth route")
//     next()
// })

router.get('/', (req, res) => {
    res.json({
        'msg':'auth'
    })
})



router.route('/register')
    .get((req,res) => {
        console.log("Get register")
        res.json({
            'msg':'register auth'
        })
    })
    .post( async (req, res) => {
        console.log("Post register\n",req.body)
        try{
            const hashedPass = await bcrypt.hash(req.body.password, 10)

            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPass,
            })
            res.json({
                "status" : "ok"
            })
        } catch (err) {
            res.json({
                "status" :"error",
                "msg": "Duplicate email ID"
            })
        }
    })



router.route('/login')  
    .get((req,res) => {
        console.log("Get login")
        res.json({
            'msg':'login auth'
        })
    })
    .post( async (req, res) => {
        console.log("Post login\n",req.body)

        const user = await User.findOne({
            email: req.body.email,
        })
        if(!user){
            res.json({
                'status' :'error',
                'msg':'Invalid Email ID'
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            res.json({
                'status' :'error',
                'msg':'Wrong password'
            })
        }

        const token = jwt.sign({
            name: user.name,
            email : user.email,
            password : user.password
        }, process.env.JWT_SECRET)

        res.json({
            'status': 'ok',
            'user':token
        })
        
    })



module.exports = router