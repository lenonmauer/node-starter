export default () =>
  function middlewareNotFound(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  };
