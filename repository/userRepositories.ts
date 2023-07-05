import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  async createUser(data: any) { 
    const user = await prisma.user.create({
        data: data
    });
    return user;
  }

  async getUsers() {
    const users = await prisma.user.findMany()
    return users
  }

}

export default new UserRepository();
