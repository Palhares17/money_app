import { Router } from 'express';
import { authController } from './app/auth/controllers/authcontroller';
import { userController } from './app/user/controllers/userController';

const router = Router();

router.post('/auth/sign-up', authController.signUp);
router.post('/auth/sign-in', authController.signIn);
router.get('/me', userController.getMe);

export default router;
