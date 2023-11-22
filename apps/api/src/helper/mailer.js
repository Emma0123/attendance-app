const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mailernode123@gmail.com',
        pass: 'hmto unjx qbdj rype'
    }
});

module.exports = transporter;