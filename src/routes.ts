import { Router } from 'express';
import { authController } from './app/auth/controllers/authcontroller';
import { userController } from './app/user/controllers/userController';

const router = Router();

router.post('/api/auth/sign-up', authController.signUp);
router.post('/api/auth/sign-in', authController.signIn);
router.post('/api/auth/sign-out', authController.signOut);

export default router;
