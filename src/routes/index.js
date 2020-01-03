import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { loginValidations } from '../middleware/validation';
import PatchController from '../controllers/patch.controller';
import Jwt from '../utils/jwt';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);
router.patch('/update', Jwt.requireSignIn,  PatchController.patchUserData);

export default router;
