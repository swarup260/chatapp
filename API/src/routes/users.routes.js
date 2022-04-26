const Router = require('@koa/router')
const router = new Router({
    prefix: '/users'
})

const JWT = require('../middleware/JWT')

/* routes */
router
    .get('/', JWT, (ctx) => (ctx.body = 'user routes'))
    .post('/', JWT, (ctx) => (ctx.body = 'user routes'))


module.exports = router