import { compare } from 'bcryptjs';
import { authRepository } from '../repositories/authRepository';
import 'dotenv/config';
import { sign } from 'jsonwebtoken';

class AuthService {
  private genereteAccessToken(userId: string) {
    return sign({ sub: userId }, process.env.JWT_SECRET!, {
      expiresIn: '3d',
    });
  }

  async signup(name: string, email: string, password: string) {
    const userAlredyExist = await authRepository.findUserByEmail(email);

    if (userAlredyExist) {
      throw new Error('Email já está em uso');
    }

    const newUser = await authRepository.createUser(name, email, password);

    return newUser;
  }

  async signin(email: string, password: string) {
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('Email ou senha incorretos');
    }

    const passwordValid = await compare(password, user.password);

    if (!passwordValid) {
      throw new Error('Email ou senha incorretos');
    }

    const accessToken = this.genereteAccessToken(user.id);

    return { user, accessToken };
  }

  async signout(email: string) {
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await authRepository.deleteUser(email);
  }
}

export const authService = new AuthService();
