require('dotenv').config({path: __dirname + '/.env'});

// Module for Knex
// Setup database connections for Development and Test

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.USER}:${process.env.PWD}@${process.env.SERVER}:${process.env.PORT}/${process.env.DATABASE}`,
    pool: {
      min: 2,
      max: 10
    }
  },
  test: {
    client: 'pg',
    connection: `postgres://${process.env.USER}:${process.env.PWD}@${process.env.SERVER}:${process.env.PORT}/${process.env.DATABASE}`,
    pool: {
      min: 2,
      max: 10
    }
  }
};
