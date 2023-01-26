import express from 'express'
import passport from 'passport'

import {UserModel} from '../../database/allModel.mjs'

const Router = express.Router();

/**
 * Route  /signup
 * Des    create new authorised user
 * Params none
 * Access Public
 * Method POST
 */

Router.post('/signup',async(req,res)=>{
    try{
        const {fullName,email,password} = req.body.credentials;
        console.log(email,'----  ',password)
        const user = await UserModel.findOne({email});
        
        if(user) throw new Error("User Already Exist");
        console.log(password);
        const newUser = await UserModel.create({fullName,email,password});
        console.log(newUser);
        
        const token = newUser.generateJWT();
        return res.status(200).json({token,status:"success"})
    }catch(error){
        return res.status(500).json({error:error.message});
    }
})

/**
 * Route  /signup
 * Des    create new authorised user
 * Params none
 * Access Public
 * Method GET
 */


export default Router