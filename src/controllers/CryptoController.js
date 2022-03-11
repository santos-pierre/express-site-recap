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
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const show = (req, res) => {
    const crypto = cryptos.find((crypto) => crypto.id === req.params.id);
    if (!crypto) {
        res.sendStatus(404);
    }
    res.render('pages/cryptos/show', { title: crypto.name, crypto });
};

const HomeController = { index, show };

module.exports = HomeController;
