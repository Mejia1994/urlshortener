require("dotenv").config();

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: "false"}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}))

const api = require('./api/api');
app.use('/api', api);

const listener = app.listen(process.env.port || 3000, function () {
    console.log("sever started on port " + listener.address().port)
});
