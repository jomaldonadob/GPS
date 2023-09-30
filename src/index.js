//import mongo conect
const mongo = require('./config/mongo');
const ubicacionRoutes = require('./routes/ubicacionRoutes');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const generateRandomFlights = require('./services/simulateFlights');
const cron = require('node-cron');

mongo().then(()=> console.log("db connected"));

///call generateRandomFlights every 5 minutes
cron.schedule('*/2 * * * *', () => {
  generateRandomFlights();
});
// Utiliza express.json() para analizar el cuerpo de las solicitudes JSON
app.use(express.json());
app.use(bodyParser.json());
//
// Utiliza la ruta "/ubicacion" para tus rutas definidas en ubicacionRoutes
app.use("/ubicacion", ubicacionRoutes);
//hola
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de ubicaciones');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
