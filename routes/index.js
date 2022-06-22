const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('../views/index.html', { title: '测试亚' })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
