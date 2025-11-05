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
      booked: false,
    });
    newCart.save().then((data) => {
      if (data) {
        res.json({ result: true });
      }
    });
  });
});

router.get("/", (req, res) => {
  Cart.find()
    .sort({ date: 1 })
    .then((cartData) => {
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

// je cherche a faire une route put qui apres avoir reçu un tableau d'id, doit modifier 
// le statut de la réservation en réservé. Et la condition est que peut importe le nombre de 
// réservation, ca doit fonctionner.


router.put("/", (req, res) => {
  Cart.updateMany({}, {booked: true})
  .then((idData) => {
  res.json({idData})
})
})

module.exports = router;


