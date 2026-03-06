//包裝函數減少 control 裡的 try/catch 使用

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

module .exports = {
  asyncHandler
};