var mysql = require('mysql');

 var connection = mysql.createConnection({
   host     : 'www.vuintramurals.com',
   user     : '<lauren-h>',
   password : '<password>',
   database : '<intramurals>'
 });

 connection.connect();

 connection.query('SELECT * from < Player >', function(err, rows, fields) {
   if (!err)
   {
     console.log('The solution is: ', rows);
     return(rows);
   }
   else
     console.log('Error while performing Query.');
 });

 connection.end();
