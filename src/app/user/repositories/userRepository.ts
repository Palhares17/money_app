import { User } from '@prisma/client';
import { prismaClient } from '../../../lib/prismaClient';

class UserRepository {
  async findUserById(id: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }
}

export const userRepository = new UserRepository();
