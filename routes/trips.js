var express = require("express");
var router = express.Router();
const Trip = require("../Models/trips");



// route get : donne les trains disponibles en fonction des paramètres 
router.post("/", (req, res) => {
    const {departure, arrival, date} = req.body; 
    if (!departure || !arrival || !date) { 
        res.json ({result: false, error :"le trajet n'existe pas"})
        return 
    }

    const formatDate = new Date(date)
Trip.find({
    departure: {$regex: new RegExp(departure, 'i')},
    arrival: {$regex: new RegExp(arrival, 'i')}, 
    date : { $gte: formatDate} 
})

.then(tripData => res.json({result: true,  message: "le trajet a été trouvé", trip: tripData  }))

})

module.exports = router;
