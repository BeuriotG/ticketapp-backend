var express = require("express");
var router = express.Router();
const Trip = require("../Models/trips");

// route get : donne les trains disponibles en fonction des paramètres
router.get("/", (req, res) => {
  const { departure, arrival, date } = req.body;
  console.log(departure);
  if (!departure || !arrival || !date) {
    res.json({ result: false, error: "le trajet n'existe pas" });
    return;
  }

  Trip.find({
    departure,
    arrival,
    date,
  }).then((tripData) =>
    res.json({
      result: true,
      message: "le trajet a été trouvé",
      trip: tripData,
    })
  );
});

module.exports = router;
