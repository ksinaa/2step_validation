import jwt from 'jsonwebtoken';

import User from './User.js';

const login = async (req, res, next) => {


    if(req.body.password != null){
        const email = req.body.email;
        const password = req.body.password;
    
        const user = await User.findOne({email: email});

        if(user == null){
            res.status(400).send("email not exist");
        }
        else if(user.password != password){
            res.status(400).send("wrong password");
        }
        
        const randomVal = Math.floor(1000 + Math.random() * 9000);

        //send random value from email

        await User.findOneAndUpdate({email: email}, {$set: {
            loginCode: randomVal
        }});

        res.status(200).send("random key generated")

        
    }else{
        const key = req.body.key;
        const email = req.body.email;

        const user = await User.findOne({email: email})

        const token = jwt.sign({
            _id: user._id.toString(),
            email: user.email,
        }, process.env.TOKEN_SECRET , {expiresIn: '1d'})

        if(user.loginCode == key){
            res.status(200).send({
                status: "login succsessfully",
                body: {
                    userId: user._id,
                    token: token
                }
            })
        }else{
            res.status(200).send('key is not true')
        }

    }

}


export default {login};