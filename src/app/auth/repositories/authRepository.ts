import { User } from '@prisma/client';
import { prismaClient } from '../../../lib/prismaClient';

class AuthRepository {
  async findUserByEmail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: {
        email,
      },
      select: { id: true, name: true, email: true, password: true },
    });
  }

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    return prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}

export const authRepository = new AuthRepository();
