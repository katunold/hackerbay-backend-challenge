import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import loginValidations from '../middleware/validation/login.validation';
import PatchController from '../controllers/patch.controller';
import Jwt from '../utils/jwt';
import ThumbnailController from '../controllers/thumbnail.controller';
import thumbnailUriValidation from '../middleware/validation/thumbnail.validation';
import updateUserValidation from '../middleware/validation/patch.validation';

const router = Router();

router.post('/login', loginValidations(), AuthController.userLogin);
router.patch(
  '/update',
  Jwt.requireSignIn,
  updateUserValidation(),
  PatchController.patchUserData,
);
router.post(
  '/generate-thumbnail',
  Jwt.requireSignIn,
  thumbnailUriValidation(),
  ThumbnailController.generateThumbnail,
);

export default router;
