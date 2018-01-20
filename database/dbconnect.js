const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

module.exports.executequery= function(req,response){

client.query("SELECT * from test where id='abc';", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    res.end(JSON.stringify(row));
  }
  client.end();
});

}