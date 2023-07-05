import nodemailer from "nodemailer";

class ReceiveMailUsers {
  async receiveMailQueue(job: any) {
    const {emails} = job?.data;

    for (const email of emails) {
      const mailOptions = {
        from: "ayushsmtp@gmail.com",
        to: email,
        subject: "Testing Email",
        text: "Testing body",
      };

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'meghan.willms@ethereal.email',
            pass: 'UtWpNTmeXqk4E3Njxx'
        }
      });
      transporter.sendMail(mailOptions, (error, mailres) => {
        if (error) {
          console.log("Error in sending mail: ", error);
        } else {
          console.log("Mail sent successfully");
        }
        transporter.close();
      });
    }
  }
}

export default new ReceiveMailUsers();
