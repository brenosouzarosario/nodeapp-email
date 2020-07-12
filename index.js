const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "brenosouza.rosario@gmail.com",
        pass: ""
    }
});

transporter.sendMail({
    from: "Breno <brenosouza.rosario@gmail.com>",
    to: "teste@gmail.com",
    subject: "oi testando teste",
    text: "ola, estou testando o nodemailer",
    html: "ola, meu nome é <b>teste</b>"
}).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});