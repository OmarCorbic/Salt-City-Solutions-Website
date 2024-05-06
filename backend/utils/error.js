const errorHandler = (err, req, res, next) => {
  const status = req.statusCode ? req.statusCode : 500;

  res.status(status);

  res.json({
    message: err.message,
  });
};

export default errorHandler;
