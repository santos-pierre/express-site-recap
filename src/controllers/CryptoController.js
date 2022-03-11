const { Request, Response } = require('express');

const { cryptos } = require('./../data/content_site.json');
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    res.render('pages/cryptos/index', { title: 'Crypto', cryptos });
};

const show = (req, res) => {
    res.sendStatus(501);
};

const HomeController = { index, show };

module.exports = HomeController;
