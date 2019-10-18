import { extract } from '../util/helpers';

export default () =>
  function middlewareOnly(req, res, next) {
    req.only = (...keys) => extract(req.body, keys);
    next();
  };
