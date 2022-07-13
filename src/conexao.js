// Conexão com base de dados no Heroku
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-18-214-238-28.compute-1.amazonaws.com',
    user: 'hqqmdqruoiyxxb',
    password: '9617862d6ecc578dfea73e8d1b8a1600d2909794b88ca84b585ea778d18d4bd0',
    database: 'd2uheju3h6si19',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

// Conexão com base de dados local
// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     user: 'postgres',
//     password: '123456',
//     database: 'loja'
//   }
// });

module.exports = knex;