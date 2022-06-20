const nodemailer = require("nodemailer");
  module.exports = {
  transport: async(to,subject,text)=>{
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"karthikbruno77@gmail.com",
        pass:"xmfchxmgomrhdrda",
      },
    });
    // eslint-disable-next-line no-return-await
    return await transporter.sendMail({
      from: "karthikbruno77@gmail.com",
      to: `${to}`,
      subject: `${subject}`,
      html: `${text}`,
    });
  }
}