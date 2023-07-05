import { Request, Response, NextFunction } from "express";
import userRepositories from "../repository/userRepositories";
import sendMailUsers from "../queues/sender/emailSender";
import customerRepositories from "../repository/customerRepositories";
import createCustomerSender from "../queues/sender/customerSender";

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        isActive: req.body.isActive,
        age: req.body.age,
        name: req.body.name,
        gender: req.body.gender,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
      };
      console.log("Data: ", data);
      const user = await userRepositories.createUser(data);
      console.log("Return: ", user);
      return res.send(user);
    } catch (err) {
      console.log("My err: ", err);
    }
  }

  async sendEmail(req: Request, res: Response) {
    const users = await userRepositories.getUsers();

    const emails = users?.map((user) => user?.email);

    sendMailUsers(emails);

    return res.send("Working");
  }

  async createCustomer(req: Request, res: Response) {
    const users = await userRepositories.getUsers();

    createCustomerSender(users);

    return res.send({});
  }
}

export default new UserController();
