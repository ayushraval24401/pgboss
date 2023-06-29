import PgBoss from "pg-boss";
import receiveMailQueue from "./receiver";
import orderRepositories from "../repository/orderRepositories";

const sendMailQueue = async (to: string, subject: string, orderId: number) => {
  const boss = new PgBoss({ connectionString: `${process.env.DATABASE_URL}` });

  boss.on("error", (error) => console.error(error));

  await boss.start();

  const queue = "queuename";

  const orderDetails:any = await orderRepositories?.findOrder(orderId);

  let jobId = await boss.send(queue, {orderDetails,to,subject});

  console.log(`created job in queue ${queue}: ${jobId}`);

  await boss.work(queue, receiveMailQueue.receiveMailQueue);
};

export default sendMailQueue;
