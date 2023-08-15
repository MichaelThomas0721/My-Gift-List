import nodemailer from "nodemailer";
import { SECRET_EMAIL_PASS, SECRET_EMAIL_USER } from "$env/static/private";
import { PUBLIC_ABS_URL } from "$env/static/public";


export default function SendEmail(receiever, subject, content) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SECRET_EMAIL_USER,
            pass: SECRET_EMAIL_PASS
        }
    })
    const mailOptions = {
        from: SECRET_EMAIL_USER,
        to: receiever,
        subject: subject,
        html: content
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    })
}

export function SendCode(receiver, code) {
    const content = `<h1>My Gift List Password Reset</h1><p>Please follow the following link to reset your password <a href="${PUBLIC_ABS_URL}/reset-password/${code}" target="_blank">${PUBLIC_ABS_URL}/reset-password/${code}</a></p><a href="${PUBLIC_ABS_URL}/unsubscribe">unsubscribe</a>`
    const subject = "My Gift List Password Reset";
    SendEmail(receiver, subject, content);
}