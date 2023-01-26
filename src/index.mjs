import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import passport from 'passport'
import session from 'express-session'


//database
import ConnectDB from './database/connection.mjs'

//api

import Auth from './api/auth/index.mjs'



var take_me = express();
var PORT = 5000;
take_me.use

take_me.use(express.json())
take_me.use(session({secret:"TAKEME"}))
take_me.use(passport.initialize())
take_me.use(passport.session())


//Accessing variables in .env file using process.env

take_me.get('/',(req,res)=>{
    res.json({message:"server is running"}).status(200);
})
take_me.use('/auth',Auth);

take_me.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log(`server is running in ${PORT}`);
    })
    .catch((err)=>{
        console.log('server is running but connection is failed');
        console.log(err);
    })
})