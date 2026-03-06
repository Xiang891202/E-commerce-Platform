//記錄用的程式碼 統一由這裡進行變更

const logger = {
  info: (message) => console.info(`[INFO] [${new Date().toISOString()}] ${message}`),
  error: (message) => console.error(`[ERROR] [${new Date().toISOString()}] ${message}`),
  warn: (message) => console.warn(`[WARN] [${new Date().toISOString()}] ${message}`)
}

module.exports = {
    logger
};