const { errorResponse } = require('../helper/utils');
const { shifts } = require('../models');


module.exports ={
    getShifts: async (req, res, next) => {
        try {
            const data = await shifts.findAll();
            return res.status(200).json(data);
        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, null, error.stack))
        }
    },
};