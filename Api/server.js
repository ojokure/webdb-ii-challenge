const express = require("express");

const helmet = require("helmet");

const carsInfoRouter = require("../cars/carsInfoRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsInfoRouter);

server.get("/", (req, res) => {
  res.send('<h2> still connected </h2>');
});
module.exports = server;
