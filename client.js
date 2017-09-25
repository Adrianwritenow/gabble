const { Client } = require('pg');
const client = new Client({
  username: 'AdrianRodriguez',
  host: 'localhost',
  database: 'gabbleDb',
  password: '',
  port: 5432
});
client.connect();

module.exports = client;
