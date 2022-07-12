const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");

const verify = async (req, res, next) => {
    try {
        const token = req.cookie.jwt;
        const VerifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(VerifyUser);

        const user = await Auth.findOne({_id:VerifyUser._id});
        console.log(user);

        if (VerifyUser) {
            res.render("/");
        } else {
            res.render("/adopt");
        }
        
        
        next();

        

    } catch (error) {
        res.status(401).send(error)

    }
    

}

module.exports = verify;