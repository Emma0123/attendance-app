const jwt = require("jsonwebtoken");
const { errorResponse } = require("../helper/utils");
module.exports = {
  validateToken: async (req, res, next) => {
    try {
        // console.log("Validate Token Middleware: ",req.token);
        if(!req.token){
            return res.status(400).send({
                succes: false,
                message: "You not have token"
            })
        }else{
          const verifyToken = jwt.verify(req.token, process.env.SCRT_TKN)
          console.log("Verify token middleware:", verifyToken);
            if(!verifyToken){
                return res.status(401).send({
                    succes: false,
                    message: "Unautorized request"
                })
            }
            
            req.usersData = verifyToken
            next()
        }
    } catch (error) {
      next(errorResponse(500, false, "Error validateToken", null, error.message));
    }
  },
};
