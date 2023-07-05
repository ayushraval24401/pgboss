import PgBoss from "pg-boss";
import emailReceiver from "../receiver/emailReceiver";

const sendMailUsers = async (emails: any) => {
  const boss = new PgBoss({ connectionString: `${process.env.DATABASE_URL}` });
  boss.on("error", (error) => console.error(error));

  await boss.start();

  const queue = "send-mail-users";

  let jobId = await boss.send(queue, { emails });

  await boss.work(queue, emailReceiver.receiveMailQueue);
};

export default sendMailUsers;
