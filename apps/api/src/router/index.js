// import router here
// examp : const usersRouter = require("./users");
const resetPasswordRouter = require('./resetPassword');
const usersRouter = require("./users");
const shiftRouter = require("./shift");
const attendanceRouter = require("./attendance");

module.exports = {
    resetPasswordRouter,
    usersRouter,
    shiftRouter,
    attendanceRouter,
};

