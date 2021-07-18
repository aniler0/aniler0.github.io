
// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    const dotenv = require('dotenv')
    dotenv.config();
    const PASSWORD = process.env.password

    let nodemailer = require('nodemailer')


    const transporter = nodemailer.createTransport({

        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'anil.er200016@gmail.com',
            pass: PASSWORD
        }, secure: true,
    });
    console.log(req.body)
    const mailData = {
        from: 'anil.er200016@gmail.com',
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