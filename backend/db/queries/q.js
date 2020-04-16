const knex = require('../connection')
const { attachPaginate } = require('knex-paginate')
attachPaginate()

// return top zones
function topZones(viewName) {
  return knex(viewName)
    .select('*')
}

function getZones() {
  return knex('zones')
      .select('*')
}
// return top zones
function zoneTrips(zone,dt) {
  return knex.raw(`select * from trips('${zone}','${dt}')`)
}

module.exports = {
  topZones,
  getZones,
  zoneTrips
}
