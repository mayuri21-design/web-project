const express = require("express");
const router=require("./routers/menroute");
require("../src/db/conn");
const MensRanking = require("./model/mens");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log("server is listening");
});
