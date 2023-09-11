const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //handle mongodb id//cast error
  if (err.name === "CastError") {
    const message = `Resource not found: invaild ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //handle mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invaild, try again`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt expire
  if (err.name === "TokenExpireError") {
    const message = `Json web token is expired, try again`;
    err = new ErrorHandler(message, 400);
  }

  // Send JSON response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
