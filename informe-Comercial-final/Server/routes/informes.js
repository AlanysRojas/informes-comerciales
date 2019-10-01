'use strict'
var express = require('express');
var informesController = require('../controllers/informes');
var infCompletoController = require('../controllers/completo');

var api = express.Router();


//informe corto
api.post('/informe',informesController.create);
api.get('/informe',informesController.findAll);
api.get('/informe/:informeId',informesController.findOne);
api.put('/informe',informesController.update);
api.delete('/informe/:informeId',informesController.delete);

//informe largo
api.post('/completo',infCompletoController.create);
api.get('/completo',infCompletoController.findAll);
api.get('/completo/:informeId',infCompletoController.findOne);
api.put('/completo',infCompletoController.update);
api.delete('/completo/:informeId',infCompletoController.delete);
module.exports = api;