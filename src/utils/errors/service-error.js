const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(
    message="Something Went Wrong",
    explanation="Service Layer error",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    this.name="ServiceError";
    this.message=message;
    this.explanation=explanation;
    this.statusCode=statusCode;

  }
}