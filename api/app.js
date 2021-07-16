require("dotenv").config();

const mustache = require("mustache-express")
const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const app = express();

app.engine('html', mustache())
app.set('view engine', 'html')
app.set('views', 'views');
app.use(express.static('public/'));
app.use(express.static('node_modules/bootstrap/dist/css/'));
app.use(express.static('node_modules/bootstrap-icons/'));

app.use(cors({optionsSuccessStatus: 200}))
app.use(bodyParser.urlencoded({extended: "false"}));
app.use(bodyParser.json());

module.exports = app;