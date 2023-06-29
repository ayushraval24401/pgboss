import nodemailer from "nodemailer";

class ReceiveMailQueue {
  async receiveMailQueue(job: any) {
    const { orderDetails, to, subject } = job?.data;

    if (orderDetails && to && subject) {
      const html = `<!DOCTYPE html>
    <html lang="en" style="height:100vh">
      <head>
        <meta charset="utf-8">
        <title>Example 1</title>
        <link rel="stylesheet" href="./style.css" media="all" />
        <style>
        .clearfix:after {
          content: "";
          display: table;
          clear: both;
        }

        a {
          color: #5D6975;
          text-decoration: underline;
        }

        body {
          position: relative;
          width: 21cm;
          height: 30cm;
          margin: 0 auto;
          color: #001028;
          background: #FFFFFF;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-family: Arial;
          padding : 60px;
        }

        header {
          margin-bottom: 30px;
        }

        #logo {
          text-align: center;
          margin-bottom: 10px;
        }

        #logo img {
          width: 90px;
        }

        h1 {
          border-top: 1px solid  #5D6975;
          border-bottom: 1px solid  #5D6975;
          color: #5D6975;
          font-size: 2.4em;
          line-height: 1.4em;
          font-weight: normal;
          text-align: center;
          margin: 0 0 20px 0;
        }

        #project {
          float: left;
        }

        #project span {
          color: #5D6975;
          text-align: right;
          width: 52px;
          margin-right: 10px;
          display: inline-block;
          font-size: 0.8em;
        }

        #company {
          float: right;
          text-align: right;
        }

        #project div,
        #company div {
          white-space: nowrap;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
          margin-bottom: 20px;
          text-align: center !important;
        }

        table tr:nth-child(2n-1) td {
          background: #F5F5F5;
        }

        table th,
        table td {
          text-align: center;
        }

        table th {
          padding: 5px 20px;
          color: #5D6975;
          border-bottom: 1px solid #C1CED9;
          white-space: nowrap;
          font-weight: normal;
        }

        table .service,
        table .desc {
          text-align: left;
        }

        table td {
          padding: 20px;
          text-align: right;
        }

        table td.service,
        table td.desc {
          vertical-align: top;
        }

        table td.unit,
        table td.qty,
        table td.total {
          font-size: 1.2em;
        }

        table td.grand {
          border-top: 1px solid #5D6975;;
        }

        #notices .notice {
          color: #5D6975;
          font-size: 1.2em;
        }
        table,tbody,thead{
          width: 100%;
        }
        footer {
          color: #5D6975;
          width: 100%;
          height: 30px;
          position: absolute;
          bottom: 0;
          border-top: 1px solid #C1CED9;
          padding: 8px 0;
          text-align: center;
        }

        .service{
          text-align:center;
        }

        .value{
          text-align:center;
        }

        </style>
      </head>
      <body>
        <header className="clearfix">
          <div id="logo">
          </div>
          <h1>INVOICE 3-2-1</h1>
          <div id="company" className="clearfix">
            <div><span>INVOICE DATE : </span>${orderDetails?.created_at}</div>
            <div><span>INVOICE REFERENCE : </span></div>
          </div>
          <div id="project">
            <div><span>SUPPLIER</span>${orderDetails?.user}</div>
            <div><span>EMAIL</span>${orderDetails?.userEmail || "NA"}</div>
          </div>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th colspan="4">SERVICE</th>
                <th className="total">AMOUNT(GBP)</th>
              </tr>
            </thead>
            <tbody>

             ${orderDetails?.products?.map((product: any) => {
               return `<tr>
                        <td colspan="4" class="service">${product}</td>
                      </tr>`;
             })}

              <tr>
                <td colspan="4">SUBTOTAL(Net)</td>
                <td className="total">${orderDetails?.totalPrice}</td>
              </tr>

            </tbody>
          </table>
          <div id="notices">
            <div>NOTICE:</div>
            <div className="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
          </div>
        </main>
        <footer>
          Invoice was created on a computer and is valid without the signature and seal.
        </footer>
      </body>
    </html>
    `;

      const mailOptions = {
        from: "ayushsmtp@gmail.com",
        to: to,
        subject: subject,
        html: html,
      };

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          // user: process.env.username!,
          user: process.env.NODEMAILER_USERNAME!,
          pass: process.env.NODEMAILER_PASSWORD!,
        },
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

export default new ReceiveMailQueue();
