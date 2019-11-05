const express = require("express");

const db = require("../data/dbConfig");

const carsInfoRouter = express.Router();

carsInfoRouter.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });
});


carsInfoRouter.get("/:id", async (req, res) => {
    try {
      const car = await db
        .select("*")
        .where({ car_id: req.params.id })
        .from("cars");
      res.status(200).json({
        car
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  });


  carsInfoRouter.post("/", async (req, res) => {
    try {
      const newEntry = await db
        .select("*")
        .from("cars")
        .insert(req.body)
        .where({ car_id: req.params.id });
  
      res.json("New entry got created with an id of " + newEntry[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  
module.exports = carsInfoRouter;
