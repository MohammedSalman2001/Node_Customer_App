const express = require('express');
const bodyParser = require('body-parser');

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





app.use('/',customerRouter)


app.listen(3000, () => {
    console.log(`server port ${serverPort} running`);
});

