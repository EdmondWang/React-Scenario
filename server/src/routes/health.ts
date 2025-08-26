import Router from 'koa-router';

const router = new Router();

// 健康检查API
router.get('/health', async (ctx) => {
  ctx.body = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Server is healthy'
  };
  ctx.status = 200;
});

export default router;