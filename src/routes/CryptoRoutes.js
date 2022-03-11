const express = require('express');
const CryptoController = require('../controllers/CryptoController');

const CryptoRoutes = express.Router();

CryptoRoutes.get('/', CryptoController.index);
CryptoRoutes.get('/:id', CryptoController.show);

module.exports = CryptoRoutes;
