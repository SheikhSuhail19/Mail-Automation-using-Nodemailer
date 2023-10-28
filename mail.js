// Import NodeMailer (after npm install)
const nodemailer = require("nodemailer");


// List of email ids you want to send mail to
const mailList = [
    'sheikhsuhail2026@gmail.com',
    'shivendrachauhan1234@gmail.com',
    'sciencemadefun4u@gmail.com',
];

async function main() {
    // Async function enables allows handling of promises with await

    // First, define send settings by creating a new transporter: 
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 465, // Port for SMTP (usually 465)
        secure: true, // Usually true if connecting to port 465
        auth: {
            user: "sender.mail@gmail.com", // Your email address
            pass: "sender-mail-password", // Password (for gmail, your app password)
            // ⚠️ For better security, use environment variables set on the server for these values when deploying
        },
        connectionTimeout: 5 * 60 * 1000, // define a timeout for connection
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
        from: '"Fullstack Developer" <sender.mail@gmail.com>',
        to: mailList,
        subject: "Testing Nodemailer",
        html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
    });

    console.log(info.messageId); // Random ID generated after successful send (optional)
    console.log(info.accepted); // Array of emails that were successful
    console.log(info.rejected); // Array of unsuccessful emails
}

main()
    .catch(err => console.log(err));