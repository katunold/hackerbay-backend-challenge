import { user } from '../models/user.model';
import Jwt from '../utils/jwt';
import { validationResult } from 'express-validator';
import { errorDisplay } from '../middleware';

export default class AuthController {

  static userLogin = ( req, res ) => {
    const { body } = req;
    const { userId, userName, password } = user;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return errorDisplay(req, res, errors);
    }

    if (body.userName === userName && body.password === password) {
      delete user.password;
      return res.status(200).send({
        ...user,
        accessToken: Jwt.signToken(userId)
      });
    }

    return res.status(404).send({
      message: 'Wrong username or password'
    })
  }

}
