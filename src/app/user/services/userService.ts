import { userRepository } from '../repositories/userRepository';

class UserService {
  me = async (userId: string) => {
    const user = await userRepository.findUserById(userId);

    return user?.name;
  };
}

export const userService = new UserService();
