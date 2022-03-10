const { Request, Response } = require('express');
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    res.render('pages/home/index', { title: 'HomePage' });
};

const HomeController = { index };

module.exports = HomeController;
