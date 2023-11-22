const transporter = require("../helper/mailer");
const { errorResponse } = require("../helper/utils")
const { users } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, '../../.env') });

module.exports = {
    checkEmail: async (req, res, next) => {
        try {
            console.log('Checking email', req.body)
            const email = await users.findOne({
                where: { email: req.body.email }
            });
            if (!email) {
                throw { rc: 404, message: 'email not found' };
            }
            // console.log(email.dataValues.email);
            const token = jwt.sign({ id: email.dataValues.id, email: email.dataValues.email }, process.env.SCRT_TKN, { expiresIn: '24h' })

            // await transporter.verify((error, success) => {
            //     if (error) {
            //         console.log("Mailer error: ", error);
            //     } else {
            //         console.log("Mailer success: ", success);
            //     }
            // })

            //Send Email Confirmation
            await transporter.sendMail({
                from: '"Mailer" mailernode123@gmail.com',
                to: email.dataValues.email,
                subject: 'Reset Password',
                text: 'Hello, Click below link to reset your password',
                html: `<b>Reset your password</b>
                <a href="http://localhost:5173/reset-password?tkn=${token}">Click Link</a>`
            });

            return res.status(200).json({
                success: true,
                message: 'Email confirmation has been sent',
                token: token
            });
        } catch (error) {
            console.log(error);
            next(errorResponse(error.rc || 500, false, error.message, null, error.stack))
        }
    },
    reset: async (req, res, next) => {
        try {
            const decode = jwt.verify(req.token, process.env.SCRT_TKN)

            const saltRounds = 10;
            const password = await bcrypt.hash(req.body.newPassword, saltRounds)

            const result = await users.update(
                { password: password },
                {
                    where: {
                        email: decode.email,
                    }
                }
            );

            return res.status(200).json({ success: true, message: "Password updated successfully" });

        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, null, error.stack))
        }
    }
}