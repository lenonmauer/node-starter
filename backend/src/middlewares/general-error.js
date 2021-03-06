export default () =>
  function middlewareGeneralError(err, req, res, next) {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
      },
    });
  };
