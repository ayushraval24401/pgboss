import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CustomerRepository {
  async createCustomer(data: any) {
    const customer = await prisma.customer.create({
      data: data,
    });
    return customer;
  }
}

export default new CustomerRepository();
