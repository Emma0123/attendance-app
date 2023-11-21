const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorResponse } = require("../helper/utils");
module.exports = {
  register: async (req, res, next) => {
    try {
      const checkAcc = await users.findOne({
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
      const result = await users.create({
        username: req.body.username,
        password: req.body.password,
        role: "employee",
      });
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
          role: result.token,
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
          token,
        },
      });
    } catch (error) {
      next(errorResponse(500, false, "Error Register", null, error.message));
    }
  },
  loginAcc: async (req, res, next) => {
    try {
      const result = await users.findOne({
        where: {
          username: req.body.username,
        },
        raw: true,
      });
      const checkAcc = await bcrypt.compare(req.body.password, result.password);
      if(checkAcc) {
        const {id, username, password, role} = result
        const token =  jwt.sign(
          {
            id,
            username,
            role
          },
          process.env.SCRT_TKN,
          {
            expiresIn: "1h"
          }
        )

        return res.status(201).send({
          succes: true,
          result: {
            username,
            role,
            token
          }
        })
      }
    } catch (error) {
      next(errorResponse(500, false, "Error Register", null, error.message));
    }
  },
};
