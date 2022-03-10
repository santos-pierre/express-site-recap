const express = require('express');
const HomeController = require('../controllers/HomeController');

const HomeRoutes = express.Router();

HomeRoutes.get('/', HomeController.index);

module.exports = HomeRoutes;
