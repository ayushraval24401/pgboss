import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import sendMailQueue from "../queues/sender/sender";
import orderRepositories from "../repository/orderRepositories";

class OrderController {
  async createOrder(req: Request, res: Response, next: NextFunction) {
    console.log("Inside");
    try {
      const { products, user, userEmail, totalPrice } = req.body;
      const order = await orderRepositories.createOrder(
        products,
        user,
        userEmail,
        totalPrice
      );
      // const order = await prisma.order.create({
      //   data: {
      //     products: products,
      //     user: user,
      //     userEmail: userEmail,
      //     totalPrice: totalPrice,
      //   },
      // });
      return res.status(201).json({
        message: "Order created successfully",
        data: order,
      });
    } catch (err) {
      console.log("Eee: ", err);
      return res.status(500).json({
        message: "Error creating order : ",
      });
    }
  }

  async sendEmail(req: Request, res: Response, next: NextFunction) {
    const { to, subject, orderId } = req.body;

    sendMailQueue(to, subject, orderId);

    return res.status(200).json({
      message: "Email sent successfully",
    });
  }
}

export default new OrderController();
