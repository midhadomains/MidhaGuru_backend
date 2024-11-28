const { jwt } = require("jsonwebtoken");

const adminAuth =(req,res,next)=>{
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({success:false,message: 'Not authorized login again'})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next()
    }catch(e){
        console.log(e);
        res.json({success:false,message:e.message}) 
    }
}

module.exports = adminAuth