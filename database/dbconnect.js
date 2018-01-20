const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgresql-curly-40396",
  ssl: true,
});

client.connect();

module.exports.executequery= function(req,response){

client.query('SELECT * from test;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

}