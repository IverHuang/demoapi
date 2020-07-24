var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'w3eeyryr',
    database: 'fiverr'
});

module.exports = connection;