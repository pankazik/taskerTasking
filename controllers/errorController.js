module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.errors) {
    err.message = "";
    for (const [key, value] of Object.entries(err.errors)) {
      err.message += `${value} `;
    }
  }

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
  });
};
