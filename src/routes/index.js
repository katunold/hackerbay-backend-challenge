import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { loginValidations } from '../middleware/validation';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);

export default router;
