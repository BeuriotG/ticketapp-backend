var express = require("express");
var router = express.Router();
const Cart = require("../Models/carts");
const Trip = require("../Models/trips");

router.post("/", (req, res) => {
  Trip.findById(req.body.id).then((data) => {
    const newCart = new Cart({
      departure: data.departure,
      arrival: data.arrival,
      date: data.date,
      price: data.price,
    });
    newCart.save().then((data) => {
      if (data) {
        res.json({ result: true });
      }
    });
  });
});

router.get("/", (req, res) => {
  Cart.find().then((cartData) => {
    if (cartData) {
      res.json({ result: true, cartData });
    } else {
      res.json({ result: false });
    }
  });
});

router.delete("/", (req, res) => {
  Cart.deleteOne({ _id: req.body.id }).then((idData) => {
    if (idData) {
      res.json({ result: true, idData });
    } else {
      res.json({ result: false });
    }
  });
});

module.exports = router;
