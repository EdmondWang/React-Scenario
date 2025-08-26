import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  await new Promise(resolve => setTimeout(resolve, 10 * 1000));
  ctx.body = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Long running success'
  };
  ctx.status = 200;
});

export default router;