import { body } from 'express-validator';

export const loginValidations = () => (
  [
    body('userName', 'userName is required')
      .trim()
      .escape()
      .exists()
      .not()
      .isEmpty(),
    body('password', 'Password is required')
      .trim()
      .escape()
      .exists()
      .not()
      .isEmpty(),
  ]
);
