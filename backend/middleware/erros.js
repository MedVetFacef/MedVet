export default (err, req, res, next) => {
  let error = {
    statusCode: err.statusCode || 500,
    message: err?.message || "Erro interno do servidor",
  };

  if (err.code === "P2025") {
    error.statusCode = 404;
    error.message = "Registro não encontrado";
  }

  if (err.name === "ValidationError") {
    error.statusCode = 400;
    error.message = Object.values(err.errors).map((e) => e.message).join(", ");
  }

  if (err.code === 11000) {
    error.statusCode = 400;
    error.message = "Registro duplicado. Este valor já existe.";
  }

  res.status(error.statusCode).json({
    message: error.message,
  });
};
