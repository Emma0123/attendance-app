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
      const result = await users.create(req.body);
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
          role: result.role,
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
      console.log("INI RESULT BREE", result);
      const checkAcc = await bcrypt.compare(req.body.password, result.password);
      
      if (checkAcc) {
        delete result.password;
        const { id, username, email, password, role } = result;
        const token = jwt.sign(
          {
            id,
            username,
            email,
            role,
          },
          process.env.SCRT_TKN,
          {
            expiresIn: "1h",
          }
        );
        // console.log("token:", token);
        return res.status(201).send({
          succes: true,
          result: {
            ...result,
            token,
          },
        });
      } else {
        return res.status(400).send({
          succes: false,
          message: "You unauthenticate",
        });
      }
    } catch (error) {
      next(errorResponse(500, false, "Error Register", null, error.message));
    }
  },

  keepLogin: async (req, res, next) => {
    try {
      console.log("users controller keepLogin:", req.usersData);
      const result = await users.findOne({
        where: {
          id: req.usersData.id,
        },
        raw: true,
      });
      const { id, username, email, password, role } = result;
      const token = jwt.sign(
        { id, username, email, role },
        process.env.SCRT_TKN,
        {
            expiresIn: "1h"
        }
      );
      return res.status(200).send({
        succes: true,
        result: {
            ...result,
            token
        }
      })
    } catch (error) {
      next(errorResponse(500, false, "Error Keep Login", null, error.message));
    }
  },
};
