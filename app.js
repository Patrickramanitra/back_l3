const express = require("express");

const mysql = require("mysql");
const myConnection = require("express-myconnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const optionDB = require("./optionDB");
const addProduit = require("./routes/addProduit");
const modifProduit = require("./routes/modifProduit");
const deleteProduit = require("./routes/deleteProduit");
const readProduit = require("./routes/readProduits");
const getOneProduit = require("./routes/getOneProduit");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(myConnection(mysql, optionDB, "pool"));

app.use(readProduit);
app.use(addProduit);
app.use(modifProduit);
app.use(deleteProduit);
app.use(getOneProduit);

app.listen(3001);
console.log("Attente des requêtes au port 3001");
