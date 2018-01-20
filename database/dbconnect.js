const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

module.exports.executequery= function(req,response){

var output = "";
client.query("SELECT * from test;", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    output = output + (JSON.stringify(row));
  }
  client.end();
  res.end(output);
});

}