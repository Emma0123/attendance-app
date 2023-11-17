const { Account } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async (req, res, next) => {
    try {
      const checkAcc = await Account.findOne({
        where: {
          username: req.body.username,
        },
        attributes: { exclude: ["password"] },
      });
      if (checkAcc) {
        return res.status(400).send({
          succes: false,
          message: "Account is exist",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashPassword;
      const result = await Account.create(req.body);
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
        },
        process.env.SCRT_TKN,
        {
          expiresIn: "1h",
        }
      );
      return res.status(201).send({
        succes: true,
        message: {
            result,
            token
        }
      })
    } catch (error) {

    }
  },
};
