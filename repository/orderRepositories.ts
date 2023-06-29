import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class OrderRepository {
  async findOrder(id: number) {
    const order = await prisma.order.findFirst({
      where: {
        id: id,
      },
    });
    return order;
  }

  async createOrder(
    products: any,
    user: number,
    userEmail: string,
    totalPrice: number
  ) {
    const order = await prisma.order.create({
      data: {
        products: products,
        user: user,
        userEmail: userEmail,
        totalPrice: totalPrice,
      },
    });
    return order;
  }
}

export default new OrderRepository();
