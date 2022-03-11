const { Request, Response } = require('express');
const { ContactFormValidationSchema } = require('../validator/ContactFormValidation');

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    return res.render('pages/contact/index', { title: 'Contact' });
};
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const sendForm = async (req, res) => {
    console.log(req.body);
    try {
        await ContactFormValidationSchema.isValid(req.body);
        res.json(req.body);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }

    // if (ContactFormValidationSchema.isValid()) {
    // }
    // res.render('pages/contact/success', { title: 'Message Sent', ...req.body });
};

const ContactController = { index, sendForm };

module.exports = ContactController;
