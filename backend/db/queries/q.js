const knex = require('../connection')
const { attachPaginate } = require('knex-paginate')
attachPaginate()

// return top zones
function topZones(viewName) {
  return knex(viewName)
    .select('*')
}

module.exports = {
  topZones
}
