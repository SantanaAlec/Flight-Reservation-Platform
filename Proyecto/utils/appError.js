const winston = require("winston");
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

class appError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status =
            `${statusCode}`.startsWith("4") || `${statusCode}`.startsWith("5")
                ? "fail"
                : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

//Middleware to handle errors
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    logger.error(err.message);

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
    });
};

module.exports = { 
    appError, 
    globalErrorHandler 
};
