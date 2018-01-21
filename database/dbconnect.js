const { Client } = require('pg');

module.exports.executequery= function(query, callback){
	
	const client = new Client({
	  connectionString: process.env.DATABASE_URL,
	  ssl: true,
	});
	
	client.connect();

	var output = "";
	client.query(query, (err, data) => {
	  if (err) throw err;
	  for (let row of data.rows) {
		output = output + (JSON.stringify(row));
	  }
	  client.end();
	  callback(output);
	});
}