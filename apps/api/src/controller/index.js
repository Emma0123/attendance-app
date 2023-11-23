// import controller here
// examp : const usersController = require("./users");
const resetPasswordController = require("./resetPassword")
const usersController = require("./users")
const shiftController = require("./shift");
const attendancesController = require("./attendance");

module.exports = {
    resetPasswordController,
    usersController,
    shiftController,
    attendancesController,
};
