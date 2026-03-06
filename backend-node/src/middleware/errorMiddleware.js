
const { errorResponse } = require('../utils/responseHelper');
const { logger } = require('../utils/logger');


//同步接收 model & service 錯誤訊息
const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500

  //logging
  logger.error(`${req.method} ${req.originalUrl} - ${err.message}`)

  res.status(statusCode).json(errorResponse(err.message))
}

module.exports = {
  errorMiddleware,
};