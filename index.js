const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const server = express(); // server CAN'T LISTEN TO REQUESTS

server.use(cors());

const port = process.env.PORT || 3000;

server.get("/inflation", (req, res) => {
  const { targetValue, startYear } = req.query;

  const inflationAPIUrl = `https://inflation-api.herokuapp.com/api?value=${targetValue}&year=${startYear}`;

  fetch(inflationAPIUrl)
    .then((result) => result.json())
    .then((data) => res.send(data));
});

server.listen(port, () => {
  console.log("Server listening");
});
