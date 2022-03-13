const { Request, Response } = require('express');

const defaultFormField = {
    pseudo: '',
    email: '',
    first_name: '',
    last_name: '',
    message: '',
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    return res.render('pages/contact/index', { title: 'Contact', ...defaultFormField, errors: {} });
};
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const sendForm = async (req, res) => {
    if (req.hasFormError) {
        console.log(req.formError);
        console.log(req.body);
        return res.render('pages/contact/', { title: 'Contact', errors: req.formError, ...req.body });
    }
    return res.render('pages/contact/success', { title: 'Message Sent - Thank You !', ...req.body });
};

const ContactController = { index, sendForm };

module.exports = ContactController;
