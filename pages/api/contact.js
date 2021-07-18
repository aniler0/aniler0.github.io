
// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    const dotenv = require('dotenv')
    dotenv.config();


    let nodemailer = require('nodemailer')


    const transporter = nodemailer.createTransport({

        service: "outlook",
        secureConnection: false,
        auth: {
            user: 'anilerbot@hotmail.com',
            pass: process.env.PASSWORD
        }, tls: {
            ciphers: 'SSLv3'
        }
    });
    console.log(req.body)
    const mailData = {
        from: 'anilerbot@hotmail.com',
        to: 'anil.er@hotmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.mail,
        html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.mail}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}