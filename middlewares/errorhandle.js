const errorHandler = (err, req, res, next) => {
  console.log("error handler");
  console.log(err);

  return res.status(err.status || 500).json({
    message: err.message || err || "Internal server error",
  });
};

module.exports = errorHandler;
