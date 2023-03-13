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
            from: process.env.emailName,
            to: userEmail,
            subject: "A Budding Welcome " + name,
            text: "Want to see if this works first",
            html: "<p>Welcome to Budding, your go-to online destination for stylish and practical earbud cases! We are thrilled to have you as a new member of our community and we can't wait to help you find the perfect earbud case to suit your needs.</p> <br> <p>At Budding, we specialize in providing a wide variety of earbud cases that offer both functionality and style. Whether you're looking for a simple, understated case or something more unique and eye-catching, we're confident that you'll find exactly what you need in our collection.</p><br> <p>As a new member of our community, you'll have access to exclusive offers and promotions, as well as updates on the latest arrivals to our collection. If you have any questions or concerns, our friendly and knowledgeable customer service team is always here to help.</p><br> <p>Thank you for choosing Budding as your earbud case provider. We look forward to serving you and providing you with the best possible shopping experience.</p><br><p>Best regards,</p><br><p><b>The Budding Team.</b></p>"

        })
        console.log(info.messageId);
        console.log("Mail might have sent");
    } catch (err) {
        console.log(err);
        console.log("Message Did Not Send");
    }
}