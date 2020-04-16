const q = require('../db/queries/q')



module.exports = ({ apiRouter }) => {

  async function executeTopZones(view) {
    if (view.trim().toLowerCase() !== 'drops' && view.trim().toLowerCase() !== 'picks') {
      throw new Error('Invalid view name ... whe only allow  drops || picks')
    }
    return q.topZones(`top5${view.trim().toLowerCase()}`)
  }
  apiRouter.get('/top5/:view', async (ctx) => {

    // GET method for getting drops and picks
    // if view is omitted than view=top5drops
    // returns pretty json
    const view = ctx.params.view || 'drops'
    try {

      const dt = await executeTopZones(view)
      ctx.body = (JSON.stringify({
        top_zones: dt
      }, null, '  '))
    } catch (err) {
      console.log(err)
    }
  }).post('/top5/', async (ctx) => {

    // POST method for getting drops and picks
    // if view is omitted than view=top5drops
    // returns pretty json

    ctx.body = ctx.request.body.view
    const view = ctx.body.view || 'drops'
    try {
      const dt = await executeTopZones(view)
      ctx.body = (JSON.stringify({
        top_zones: dt
      }, null, '  '))
    } catch (err) {
      console.log(err)
    }

  })
}
