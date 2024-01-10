const jwt = require("jsonwebtoken");

const generateToken = (payload)=>{
    return jwt.sign({id: payload} , process.env.SECRET_KEY);
}

module.exports = generateToken;