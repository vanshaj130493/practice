const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

module.exports.executequery= function(req,res){

var output = "";
client.query("SELECT * from test;", (err, data) => {
  if (err) throw err;
  for (let row of data.rows) {
    output = output + (JSON.stringify(row));
  }
  client.end();
  res.end(output);
});

}