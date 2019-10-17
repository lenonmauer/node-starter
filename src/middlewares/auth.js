import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import User from '../models/user';
import config from '../config';

const asyncJwtVerify = promisify(jwt.verify);

export default () =>
  async function middlewareAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = await asyncJwtVerify(token, config.jwtSecret);
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({ error: 'Invalid user' });
      }

      req.user = user;
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    return next();
  };
