const { Request, Response } = require('express');

const { cryptos } = require('./../data/content_site.json');
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    res.render('pages/contact/index', { title: 'Contact' });
};
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const sendForm = (req, res) => {
    res.sendStatus(501);
};

const ContactController = { index, sendForm };

module.exports = ContactController;
