var express = require("express");
var cors = require("cors");
var axios = require("axios");
var app = express();
const dotenv = require("dotenv");

app.use(cors());
dotenv.config();

app.get("/weather/:city", async function (req, res, next) {
  try {
    const city = req.params.city;
    const apiUrl = `${process.env.apiUrl}${city}&appid=${process.env.API_KEY}`;

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
