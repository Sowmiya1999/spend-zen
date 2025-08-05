import jwt from 'jsonwebtoken';
import User from '../models/user';

const generateJWTToken = (id) =>{
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    )
}

export const signUp = async(req,res)=>{

};

export const login = async(req,res)=>{

};

export const getUserInfo = async(req,res)=>{

};
