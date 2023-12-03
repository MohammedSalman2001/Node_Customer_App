
const mysql = require('mysql');

//create connection pool;
const  connectionPool = mysql.createPool({
    connectionLimit: 50,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

module.exports=connectionPool;