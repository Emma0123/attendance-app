const { where, Op } = require('sequelize');
const { errorResponse } = require('../helper/utils');
const { attendances } = require('../models');


module.exports = {
    getAttendance: async (req, res, next) => {
        try {
            const result = await attendances.findAll()
            return res.status(200).json(result)
        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, "From attendance controller [getAttendance]", error.stack))
        }
    },
    clockIn: async (req, res, next) => {
        try {
            // const result = await attendances.findOne({where: {...req.body, in: {[Op.not]: null}}})
            const result = await attendances.findOne({ where: { userId: req.body.userId, in: { [Op.not]: null } } })
            if (!result) {
                console.log("result", req.body);
                await attendances.create(req.body);
                return res.status(200).json({
                    sucess: true,
                    message: "Clock in success"
                });
            } else {
                throw { rc: 400, message: 'User already logged in' }
            }
        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, "From attendance controller [clockIn]", error.stack))
        }
    },
    clockOut: async (req, res, next) => {
        try {
            const result = await attendances.findOne({ where: { userId: req.body.userId } })
            if (result) {
                const checkClockOut = await attendances.findOne({ where: { userId: req.body.userId, out: null } })
                if (checkClockOut) {
                    await attendances.update({ out: req.body.out }, { where: { userId: req.body.userId } })
                    return res.status(200).json({
                        sucess: true,
                        message: "Clock in success"
                    });
                } else {
                    throw { rc: 400, message: "Already Clocked out" }
                }
                // console.log("result:", result.dataValues);
                // console.log("userid:", result.dataValues.userId);
                // console.log("out:", req.body.out);
            } else {
                throw { rc: 404, message: "Not Found" }
            }
        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, "From attendance controller [clockOut]", error.stack))
        }
    },
    create: async (req, res, next) => {
        try {
            // console.log(req.body)
            const result = await attendances.create(req.body);
        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, "From attendance controller [create]", error.stack))
        }
    },
};