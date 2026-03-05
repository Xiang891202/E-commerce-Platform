// 统一响应格式
// 通过封装成功和错误响应的格式，可以确保所有控制器返回的数据结构一致，便于前端处理和调试。

//成功
const successResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

//错误
const errorResponse = (res, message, statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message
  });
}

module.exports = {
  successResponse,
  errorResponse
};