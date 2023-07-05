import PgBoss from "pg-boss";
import customerReceiver from "../receiver/customerReceiver";

const createCustomerSender = async (data: any) => {
  const boss = new PgBoss({ connectionString: `${process.env.DATABASE_URL}` });
  boss.on("error", (error) => console.error(error));

  await boss.start();

  const queue = "create-customer";

  await Promise.all(
    await data?.map(async (item: any) => {
      let jobId = await boss.send(queue, { customer: item });
      await boss.work(queue, customerReceiver.receiveCustomerQueue);
    })
  );
};

export default createCustomerSender;
