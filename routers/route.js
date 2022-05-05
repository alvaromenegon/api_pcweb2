const express = require('express');
const controllerAPI = require('../controllers/controllerAPI');
const route = express.Router();

module.exports = route;

//ControllerAPI
    route.get("/api/animal/:id",controllerAPI.getAnimalById);
    route.get("/api/animais",controllerAPI.getAnimais);
    route.post("/api/animais",controllerAPI.postAnimal);
    route.put('/api/animal/:id',controllerAPI.putAnimal);
    route.delete('/api/animal/:id',controllerAPI.deleteAnimal);
    