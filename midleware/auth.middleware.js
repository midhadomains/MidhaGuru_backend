const jwt = require(jsonwebtoken);


const auth = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        jwt.varify(token, "midha",(err,decoded)=>{
            if(decoded){
                req.body.userId = decoded.userId;
                req.body.username= decoded.username;
                next();
            }else{
                res.status(200).send({"msg":"Something is wrong"})
            }
        })
    }else{
        res.status(400).send({"msg":"Please login Again!!"});
    }
}

module.exports={ auth };