import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
        user: process.env.emailName,
        pass: process.env.emailPass
    },
    tls: {
        rejectUnauthorized: false
      }
})

export async function emailSender(name, userEmail){
    try {
        let info = await transporter.sendMail({
            from: "richardosunmu@gmail.com",
            to: userEmail,
            subject: "Hello" + name,
            text: "Want to see if this works first",
            html: "<b>Hello World</b>"
        })
        console.log(info.messageId);
        console.log("Mail might have sent");
    } catch (err) {
        console.log(err);
        console.log("Message Did Not Send");
    }
}