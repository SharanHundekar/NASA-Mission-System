const express = require('express');
const lauhesController = express.Router();
const {httpgetAllLaunches, httpAddNewLaunch, httpDeleteLaunch} = require('../lauches/lauches.controller');

lauhesController.get('/', httpgetAllLaunches);
lauhesController.delete('/:id', httpDeleteLaunch);
lauhesController.post('/', httpAddNewLaunch);

module.exports = lauhesController;