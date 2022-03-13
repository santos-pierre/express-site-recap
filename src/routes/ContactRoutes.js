const express = require('express');
const ContactController = require('../controllers/ContactController');
const ValidationForm = require('../middlewares/contact/ValidationForm');
const { ContactFormValidationSchema } = require('../validator/ContactFormValidation');

const ContactRoutes = express.Router();

ContactRoutes.get('/contact', ContactController.index);
ContactRoutes.post('/contact', ValidationForm(ContactFormValidationSchema), ContactController.sendForm);

module.exports = ContactRoutes;
