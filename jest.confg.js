module.exports = {
  testEnvironment: "jsdom", // 启用浏览器环境模拟
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // 全局测试配置
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // 模拟 CSS 模块
  },
};
