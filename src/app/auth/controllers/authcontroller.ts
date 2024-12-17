import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { hash } from 'bcryptjs';

class AuthController {
  async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const hashedPassword = await hash(password, 10);

      const newUser = await authService.signup(name, email, hashedPassword);

      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        // password: newUser.password, senha hasheada
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await authService.signin(email, password);

      console.log(user);

      res.status(200).json({
        accessToken: user,
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async signOut(req: Request, res: Response) {
    try {
      const { email } = req.body;

      await authService.signout(email);

      res.status(200).send('Usuário deletado');
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}

export const authController = new AuthController();
