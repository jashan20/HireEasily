const nodemailer = require("nodemailer");
  module.exports = {
  transport: async(to,subject,text)=>{
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"XXXXXXXXXXXXX@gmail.com",
        pass:"XXXXXXXXXXXXX",
      },
    });
    // eslint-disable-next-line no-return-await
    return await transporter.sendMail({
      from: "XXXXXXXXXXXXX@gmail.com",
      to: `${to}`,
      subject: `${subject}`,
      html: `${text}`,
    });
  }
}