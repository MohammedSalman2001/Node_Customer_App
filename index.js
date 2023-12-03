const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const expressHandleBars = require('express-handlebars').engine;
require('dotenv').config();

const app = express()

const serverPort = process.env.SERVER_PORT

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

//================

const customerRouter=require('./routes/CustomerRoute')
//================


app.use(express.static('public'))

app.engine('hbs', expressHandleBars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts'
}))
app.set('view engine', '.hbs');


//create connection pool;
const connectionPool = mysql.createPool({
    connectionLimit: 50,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DB_NAME
});

connectionPool.getConnection((error, connection) => {
    if (error) {
        throw error
    }
    console.log(connection)
})


app.use('/',customerRouter)


app.listen(3000, () => {
    console.log(`server port ${serverPort} running`);
});

