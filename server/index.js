const express = require('express');
const bodyParser = require('body-parser');
// const controller = require('./contoller');
const massive = require('massive');
    require('dotenv').config();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env


const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    return app.set('db', db);
})



app.listen(SERVER_PORT, () => console.log(`SERVER listening on port:${SERVER_PORT}`));