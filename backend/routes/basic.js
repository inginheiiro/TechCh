module.exports = ({ router }) => {
  // there is no place like 127.0.0.1
  router.get('/', (ctx, next) => {
    ctx.body = 'I\'m Alive!'
  })
}
