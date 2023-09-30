const cron = require('node-cron');
const mongoose = require('mongoose');
require('../models/Plane');
const Plane = mongoose.model('Plane')
require('../models/Flight');
const Flight = mongoose.model('Flight');``


async function generateRandomFlights() {
  //bring all planes
  const planes = await Plane.find();
  planes.forEach(plane => {
    
    //generate random flight
    const flight = new Flight({
      FK_Plate: plane.Plate,
      //latitude between -90 and 90, type float
      latitude: (Math.random() * 180) - 90,
      //longitude between -180 and 180
      longitude: (Math.random() * 360) - 180,
      //fuel percentage between 0 and 100
      //altitude between 0 and 10000
      altitude : Math.floor(Math.random() * 10000),
      
      Fuel_percentage: Math.floor(Math.random() * 100),

      createdAt: Date.now()
    });
    //save flight
    flight.save()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });

}
module.exports = generateRandomFlights;
