const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
    FK_Plate: {
        type: String, 
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    altitude: {
        type: Number,
        required: true,
    },
    date: {
        type: Date, 
        required: true,
    },
    Fuel_percentage: {
        type: Number,
        required: true,
    },
    // Definir una referencia al modelo Plane
    plane: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plane", // Nombre del modelo relacionado
    },
});

module.exports = mongoose.model("Flight", FlightSchema);
