import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa2-cors';
import healthRouter from './routes/health';
import longRunningRouter from './routes/long-running';

const app = new Koa();
const router = new Router();

// 配置 CORS 中间件，允许所有外部站点访问
app.use(cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization']
}));

// 注册路由
router.use('/api/health', healthRouter.routes());
router.use('/api/long-running', longRunningRouter.routes());

// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());

// 启动服务器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});