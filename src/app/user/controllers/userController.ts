import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';

class UserController {
  getMe = async (req: Request, res: Response) => {
    const { id } = req.body;

    const user = await userRepository.findUserById(id);

    res.status(200).json(user);
  };
}

export const userController = new UserController();
