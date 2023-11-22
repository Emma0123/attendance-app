const { transporter } = require("../helper/mailer");
const { errorResponse } = require("../helper/utils")
const { users } = require("../models");

const jwt = require("jsonwebtoken");
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
            const token = jwt.sign({ id: email.dataValues.id, email: email.dataValues.email }, process.env.SECRET_KEY, { expiresIn: '30m' })

            //Send Email Confirmation
            await transporter.sendMail({
                from: '"Mailer" mailernode123@gmail.com',
                to: email.dataValues.email,
                subject: 'Reset Password',
                text: 'Hello, Click below link to reset your password',
                html: `<b>Reset your password</b>
                <a href="http://localhost:5173/reset?tkn=${token}">Click Link</a>`
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
            const data = jwt.verify(req.query.tkn, process.env.SECRET_KEY)
            // console.log("JWT:", data);

            if (req.body.password === req.body.confirmPassword) {
                await users.update(
                    { password: req.body.password },
                    {
                        where: {
                            email: data.email,
                        }
                    }
                );
                return res.status(200).json({success: true, message: "Password updated successfully"});
            } else {
                throw { rc: 400, message: 'Password not match' }
            }

        } catch (error) {
            next(errorResponse(error.rc || 500, false, error.message, null, error.stack))
        }
    }
}