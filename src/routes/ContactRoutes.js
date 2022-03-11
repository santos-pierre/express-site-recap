const express = require('express');
const ContactController = require('../controllers/ContactController');

const ContactRoutes = express.Router();

ContactRoutes.get('/contact', ContactController.index);
ContactRoutes.post('/contact', ContactController.sendForm);

module.exports = ContactRoutes;
