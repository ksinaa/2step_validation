import jwt from 'jsonwebtoken'


export default (req, res, next) => {

    const token = req.get('Authorization');
    

    if(!token){
        res.status(401).send('not auth')
    }

    let decodedToken;
    try{
        decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    }catch(err){
        res.status(403).send('token is invalid')
    }
    req.tokenId = decodedToken._id;
    req.accsessLevel = decodedToken.accsessLevel
    next()
}