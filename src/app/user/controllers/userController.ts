import { Request, Response } from 'express';

class UserController {
  getMe(req: Request, res: Response) {}
}

export const userController = new UserController();
