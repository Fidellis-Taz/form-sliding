const express = require("express");
const app = express();

const connectDB = require("./database/db");

connectDB();
//the port is gonna be generated by heroku when we deploy , for now we use 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));